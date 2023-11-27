'use client';
import Image from 'next/image'
import Link from "next/link";
import NotesListPage from './NotesListPage/page'
import AddButton from './components/AddButton'

export default function Home() {
  return (
    <main className='flex flex-col items-center max-w-3/4 w-screen justify-center'>
      <AddButton />
      <div className="flex sm:w-4/5 md:w-3/5 max-w-3/4 break-words text-center flex-col text-3xl border-2 mt-20 rounded-lg p-5 hover:scale-105 duration-200 shadow-lg hover:rounded-2xl shadow-emerald-600 hover:shadow-xl hover:shadow-emerald-600 bg-[#04100d]">
        <NotesListPage />
      </div>
    </main>
  )
}
