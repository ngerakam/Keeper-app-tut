import React from "react";

function CreateArea({ handleChange, handleClick, title, content }) {
  return (
    <div>
      <form>
        <input
          name="title"
          value={title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
