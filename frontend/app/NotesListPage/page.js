'use client';
import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {

    getNotes()

  }, [])

  const getNotes = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/notes/')
    const data = await response.json()
    setNotes(data)
  }

  return (
      <div>
        {notes.map((note) => (
            <ListItem key={note.id} note={note} />
        ))}
      </div>
  )
}

export default NotesListPage
