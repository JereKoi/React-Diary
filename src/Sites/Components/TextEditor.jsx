import axios from "axios";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles
import "./TextEditor.css"; // Import your custom styles

const TextEditor = () => {
  const [value, setValue] = useState(""); // Editor content
  const [isSaving, setIsSaving] = useState(false); // Saving state
  const [saveStatus, setSaveStatus] = useState("Saved"); // Save status message

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

  const saveContent = useCallback(
    debounce(async (content) => {
      setIsSaving(true);
      setSaveStatus("Saving...");
      try {
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
    }, 2000), // 2 seconds delay
    []
  );

  useEffect(() => {
    const fetchContent = async () => {
      try {
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
  }, []);

  useEffect(() => {
    saveContent(value);
    return () => saveContent.cancel();
  }, [value, saveContent]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <div className="diary-text-editor">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Type here about your day..."
        />
      </div>
      <div className="save-status">{isSaving ? "Saving..." : saveStatus}</div>
    </div>
  );
};

export default TextEditor;
