import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    return (
        <div className='flex justify-between border-b-2 border-black items-center px-5 py-3 bg-gray-200'>
            <div className='text-2xl'>
                <h1 className='font-bold'><Link to="/">ST</Link></h1>
            </div>

            <div className='text-2xl border-2 border-black px-10 py-2 rounded-xl'>
                <ul className='flex gap-5 font-semibold'>
                    <li className='hover:text-cyan-700'><NavLink to="/">Home</NavLink></li>
                    <li className='hover:text-cyan-700'><NavLink to="about">About</NavLink></li>
                    <li className='hover:text-cyan-700'><NavLink to="contact">Contact</NavLink></li>
                </ul>
            </div>

            <div>
                <button className='border-2 border-black px-5 py-1 font-bold text-2xl rounded-xl hover:bg-cyan-100' onClick={() => navigate('contact')}>Contact</button>
            </div>

        </div>
    )
}

export default NavBar
