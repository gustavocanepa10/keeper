import React from "react";
import { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  

  return (
    <div>
      <form>
        <input
        //   onChange= 
        //   value={inputnote.title}
          name="title"
          placeholder="Title"
        />
        <textarea
        //   onChange={handleChange}
        //   value={inputnote.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
