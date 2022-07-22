import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text to Edit");

  const handleUpClick = () => {
    console.log("handleUpClick");
    setText(text.toUpperCase());
    props.showAlert("Upper Case", "success");
  };
  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value);
  };
  const handleLowerCase = () => {
    setText(text.toLocaleLowerCase());
    props.showAlert("lower case", "success");
  };

  const handleTextCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  return (
    <div
      style={{
        color: props.mode === "light" ? "#000 " : "#fff",
      }}
    >
      <div>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              color: props.mode === "light" ? "#000 " : "#fff",
              backgroundColor: props.mode === "light" ? "#fff " : "gray",
            }}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-warning mx-2" onClick={handleLowerCase}>
          Convert to lowercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleTextCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          Text has {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          It will take around {0.008 * text.split(" ").length} minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Some Text to Preview"}</p>
      </div>
    </div>
  );
}
