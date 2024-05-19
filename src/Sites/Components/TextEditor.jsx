import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const TextEditor = () => {
  const [value, setValue] = useState("");

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

  const saveContent = () => {
    const content = value; // value contains the editor content
    console.log(content); // Here you can save content to your backend or local storage
  };

  useEffect(() => {
    const existingContent = "<p>Existing content...</p>";
    setValue(existingContent);
  }, []);

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
      <button onClick={saveContent}>Save</button>
    </div>
  );
};

export default TextEditor;
