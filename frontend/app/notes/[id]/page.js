'use client';
import React from 'react'
import { useState, useEffect } from 'react'

function Update({ params }) {

  const [notes, setNotes] = useState([])

  useEffect(() => {

    getNotes()

  }, [])

  const getNotes = async () => {
    if (params.id === 'add') return
    const response = await fetch(`http://127.0.0.1:8000/api/notes/${params.id}`)
    const data = await response.json()
    setNotes(data)
  }

  let createNotes = async () => {
    fetch('http://127.0.0.1:8000/api/notes/create/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notes)
    })
    history.back()
  }

  let updateNotes = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${params.id}/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(notes)
    })
    history.back()
  }

  let deleteNotes = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${params.id}/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      }
    })
    history.back()
  }

  let handleSubmit = () => {
    updateNotes()
    history.back()
  }

  return (
    <>
      <div className='flex flex-col items-center w-screen justify-center'>
        <textarea onChange={(e) => setNotes({ ...notes, 'body': e.target.value })} defaultValue={notes.body} className="flex sm:w-4/5 md:w-2/4 max-w-3/4 break-words text-center flex-col text-3xl border-2 mt-20 rounded-lg p-5 hover:scale-105 duration-200 shadow-lg hover:rounded-2xl shadow-emerald-600 hover:shadow-xl hover:shadow-emerald-600 bg-[#04100d]"></textarea>
          {params.id !== 'add' ? (
          <div className='flex flex-row items-center w-screen justify-center'>
            <button onClick={handleSubmit} className="text-2xl mt-10 bg-[#04100d] border p-1 rounded-lg hover:rounded-xl hover:text-emerald-600 duration-200 hover:scale-110 cursor-pointer mr-5">Update</button>
            <button onClick={deleteNotes} className="text-2xl mt-10 bg-[#1d0606] border border-red-600 p-1 rounded-lg hover:rounded-xl hover:text-red-600 duration-200 hover:scale-110 cursor-pointer">Delete</button>
          </div>
            ) : (
              <button onClick={createNotes} className="text-3xl mt-10 bg-[#04100d] border p-1 rounded-lg hover:rounded-xl hover:text-emerald-600 duration-200 hover:scale-110 cursor-pointer mr-5">Add</button>
          )}
      </div>
    </>
  )
}

export default Update
