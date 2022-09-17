import React, { useState } from "react";

// get whats typing and put setState using useState  // done
// put the notes to an array when add is clicked     //
// return that list to notes

function CreateArea(props) {
  const [note, setNote] = useState({ id: 1, title: "", content: "" });


  function addText(events) {
    const { name, value } = events.target;
    console.log(name, value)
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value
      }
    })
  }
  function addNote(event) {
    if (note.title !== "" && note.content !== "") {
      setNote((preValues) => {
        console.log("preVal ", preValues)
        return {
          ...preValues,
          ["id"]: preValues.id + 1
        }
      })

      props.setNoteList(prevNotes => {
        return [...prevNotes, note]
      })
      console.log(props.noteList);

      setNote((preValues) => {
        return {
          ...preValues,
          title: "", content: ""
        }
      })
      event.preventDefault()
    }else{
      alert("Please Add a Note title and a content to your Note!")
    }
  }


  return (
    <div>
      <form>
        <input onChange={addText} name="title" placeholder="Title" value={note.title} required />
        <textarea onChange={addText} name="content" placeholder="Take a note..." rows="3" value={note.content} required />

        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
