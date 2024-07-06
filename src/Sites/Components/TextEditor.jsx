import axios from "axios";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import io from "socket.io-client";
import "./TextEditor.css";

const TextEditor = ({ selectedDate }) => {
  const [value, setValue] = useState(""); // State for the editor content
  const [isSaving, setIsSaving] = useState(false); // State to indicate if the content is being saved
  const [saveStatus, setSaveStatus] = useState("Saved"); // State for the save status message
  const [isFocused, setIsFocused] = useState(false); // State for editor focus

  const socket = io(
    process.env.REACT_APP_SOCKET_URL || "http://localhost:3000"
  ); // Connect to Socket.IO server

  // Configuration for the Quill editor toolbar
  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [
        { header: "1" },
        { header: "2" },
        { header: [3, 4, 5, 6] },
        { header: false },
      ],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  // List of formats to be used in the Quill editor
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "blockquote",
    "code-block",
    "header",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  // Function to save content to the server, debounced to limit its execution frequency
  const saveContent = useCallback(
    debounce(async (content) => {
      setIsSaving(true);
      setSaveStatus("Saving...");
      try {
        // Send a POST request to save the content
        await axios.post(`${process.env.REACT_APP_API_URL}/save`, {
          content,
        });
        setSaveStatus("Saved");
      } catch (error) {
        setSaveStatus("Error saving content");
        console.error("Error saving content:", error);
      } finally {
        setIsSaving(false);
      }
    }, 2000),
    []
  );

  // useEffect to fetch the initial content when the component mounts
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Send a GET request to fetch the content
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/text`
        );
        if (response.data) {
          setValue(response.data.content);
        }
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, []); // Empty dependency array means this effect runs only once

  // useEffect to save content whenever it changes
  useEffect(() => {
    saveContent(value); // Call the debounced save function with the current content
    return () => saveContent.cancel(); // Cancel the debounced save function on cleanup
  }, [value, saveContent]); // Dependencies are the current content and the save function

  // Function to handle focus event on the editor
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Function to handle blur event on the editor
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleValueChange = (content, delta, source) => {
    setValue(content);
    if (source === "user") {
      socket.emit("new entry", content); // Emit new entry to Socket.IO server
    }
  };

  useEffect(() => {
    socket.on("new entry", (entry) => {
      setValue(entry); // Update the editor content when a new entry is received
    });

    return () => {
      socket.disconnect(); // Disconnect socket on component unmount
    };
  }, [socket]);

  return (
    <div>
      <h3>Diary entry for {selectedDate.toDateString()}</h3>
      <div className="diary-text-editor">
        <ReactQuill
          theme="snow"
          value={value} // Set the editor content to the current value
          onChange={handleValueChange} // Update the value when the content changes
          modules={modules}
          formats={formats}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Type here about your day..."
        />
      </div>
      <div className="save-status">{isSaving ? "Saving..." : saveStatus}</div>{" "}
    </div>
  );
};

export default TextEditor;
