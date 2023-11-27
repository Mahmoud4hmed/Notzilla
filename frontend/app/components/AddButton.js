import React from 'react'
import Link from 'next/link'

function AddButton() {
  return (
    <div className='flex flex-row w-screen items-left'>
      <Link href="/notes/add" className="text-3xl m-10 bg-[#04100d] border p-1 rounded-lg hover:rounded-xl hover:text-emerald-600 duration-200 hover:scale-110 cursor-pointer">
        Add
      </Link>
    </div>
  )
}

export default AddButton
