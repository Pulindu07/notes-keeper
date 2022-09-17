import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// const noteList=[{title:"Note 1",content:"Note 1 content"},{title:"Note 2",content:"Note 2 content"},{title:"Note 3",content:"Note 3 content"},{title:"Note 4",content:"Note 4 content"},{title:"Note 5",content:"Note 5 content"}];
function App() {
  const [noteList, setNoteList] = useState([]);

  function deleteNote(id){
    setNoteList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea noteList={noteList} setNoteList={setNoteList} />
      {noteList.map((singleNote) => {
        return (
          <Note key={singleNote.id} id={singleNote.id} title={singleNote.title} content={singleNote.content} deleteNote={deleteNote}/>
        )
      })}
      {/* <Note key={1} title="Note title" content="Note content" noteList={noteList} /> */}
      <Footer />
    </div>
  );
}

export default App;
