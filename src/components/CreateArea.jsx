import React from "react";
import { useState } from "react";
import Note from "./Note";

function CreateArea(props) {

  const [input, setNote] = useState({
    title: "",
    content: ""
  })
  
  function handleChange(event) {
    const {name, value} = event.target
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name] : value
      }
    })
  };
  

  function onSubmit(event) {
    props.onAdd(input)
    event.preventDefault();

    setNote({
      title : "",
      content: ""
    })
    
    
    

    
  }
  
  

  return (
    <div>
      <form>
        <input
          onChange= {handleChange}
          value={input.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={input.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
