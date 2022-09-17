import React, { useState } from "react";

// get whats typing and put setState using useState  // done
// put the notes to an array when add is clicked     //
// return that list to notes

function CreateArea(props) {
  const [note,setNote] = useState({title:"",content:""});
  

  function addText(events){
    const {name,value} = events.target;
    console.log(name,value)
    setNote((preValues)=>{
      return {...preValues,
      [name]:value}
    })
  }
  function addNote(event){
    console.log(note);
    props.setNoteList(prevNotes=>{
      return [...prevNotes,note]
    })
    console.log(props.noteList);
    setNote({title:"",content:""})
    event.preventDefault()
  }
  
  return (
    <div>
      <form>
        <input onChange={addText} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={addText} name="content" placeholder="Take a note..." rows="3" value={note.content}  />
        
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
