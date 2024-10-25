import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const editorRef = useRef(null);

  // Function to execute commands (bold, italic, underline, etc.)
  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="App">
      <h1>Rich Text Editor</h1>

      <div className="toolbar">
        {/* Text formatting buttons */}
        <button onClick={() => formatText("bold")}>Bold</button>
        <button onClick={() => formatText("italic")}>Italic</button>
        <button onClick={() => formatText("underline")}>Underline</button>

        {/* Font size selection */}
        <select onChange={(e) => formatText("fontSize", e.target.value)}>
          <option value="3">Normal</option>
          <option value="4">Large</option>
          <option value="5">Larger</option>
        </select>

        {/* Text color selection */}
        <input
          type="color"
          onChange={(e) => formatText("foreColor", e.target.value)}
          title="Text Color"
        />
      </div>

      {/* Editable div for text */}
      <div
        ref={editorRef}
        contentEditable="true"
        className="editor"
        suppressContentEditableWarning={true} // to avoid React warning
      >
        <p>Start editing your text here...</p>
      </div>
    </div>
  );
};

export default App;
