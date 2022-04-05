import React from 'react'

const Navbar = () => {
    return (
        <nav className=" lg:hidden md:hidden w-screen  flex justify-between px-9 h-20 items-center">
            <h1 className="font-bold">Logo</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </nav>
    )
}

export default Navbar