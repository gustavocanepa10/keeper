import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'
import CreateArea from './components/CreateArea'
import { useState } from 'react'


function App() {

  const [notes, setNotes] = useState([

  ])

  function addNote(newNote) {
    setNotes((notes) => {
      return [...notes, newNote]
      
    })
  }
  

  function deleteNote(id) {
    const updatedList = notes.filter((item ,index) => index !== id) 
    setNotes(updatedList)
  }
  

  return (
    <div>
      <Header/>
      <CreateArea onAdd =  {addNote}  />

      {notes.map((element, index) => (
        <Note key = {index} id= {index} content = {element.content} title = {element.title} onDelete = {deleteNote}  />

      ))}
      
      <Footer/>

    </div>
   
  )
}

export default App
