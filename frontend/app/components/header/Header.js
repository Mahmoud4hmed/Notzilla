import React from 'react'
import Link from "next/link";

const Header = () => {
  return (
        <Link href="/" className="text-3xl ml-5 font-bold hover:text-emerald-600 duration-200 hover:scale-110 cursor-pointer">Notzilla</Link>
  )
}

export default Header
