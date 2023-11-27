import React from 'react'
import Link from 'next/link'

function ListItem({ note }) {
  return (
    <div className='p-2'>
      <div className="hover:text-emerald-600 p-2 duration-200 cursor-pointer border-b border-emerald-600 hover:scale-105">
        <Link href={`/notes/${note.id}`}>{note.body}</Link>
      </div>
    </div>
  )
}

export default ListItem
