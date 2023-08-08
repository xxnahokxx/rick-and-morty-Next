"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex w-full justify-between bg-slate-600 py-4 px-6 text-white mx-auto fixed'>
            <div>
                logo
            </div>
            <div>
                <ul className='flex gap-4'>
                    <Link href={"/"}>
                        <li>Home</li>
                    </Link>
                    <Link href={"/characters"}>
                        <li>Characters</li>
                    </Link>
                    <Link href={"/about"}>
                        <li>About</li>
                    </Link>
                </ul>
            </div>
            <div>
                Login
            </div>
        </div>
    )
}

export default Navbar
