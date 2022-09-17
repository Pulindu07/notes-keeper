import React from "react";


// render notes from an array

function Note(props) {
  const noteList=props.noteList;
  return(noteList.map(singleNote=>{
    return(<div className="note">
      <h1>{singleNote.title}</h1>
      <p>{singleNote.content}</p>
      <button>DELETE</button>
    </div>)
  }));

  // return (
  //   <div className="note">
  //     <h1>{props.title}</h1>
  //     <p>{props.content}</p>
  //     <button>DELETE</button>
  //   </div>
  // );
}

export default Note;
