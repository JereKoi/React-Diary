import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles
import "./TextEditor.css"; // Import your custom styles

const TextEditor = () => {
  const [value, setValue] = useState(""); // Editor content
  const [isFocused, setIsFocused] = useState(false); // Focus state
  const saveTimeout = useRef(null);

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

  {
    /*TODO: Check User.js does it require something in order to having saving work. */
  }

  const saveContent = useCallback(async () => {
    try {
      await axios.post("http://localhost:5000/save", { content: value });
      console.log("Content saved");
    } catch (error) {
      console.error("Error saving content:", error);
    }
  }, [value]);

  useEffect(() => {
    // Fetch initial content from the server
    const fetchContent = async () => {
      try {
        const response = await axios.get("http://localhost:5000/text");
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
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      saveContent();
    }, 2000); // 2 seconds delay

    return () => clearTimeout(saveTimeout.current);
  }, [value, saveContent]);

  const handleFocus = () => {
    setIsFocused(true);
    if (value === "<p>Type here about your day...</p>") {
      setValue("");
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (value === "") {
      setValue("<p>Type here about your day...</p>");
    }
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
        />
      </div>
      {/* TODO: CHANGE TEXT BASED ON UNSAVED / SAVED WHEN AUTOSAVING */}
      <a>Saved...</a>
    </div>
  );
};

export default TextEditor;
