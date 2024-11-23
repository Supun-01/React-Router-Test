import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col justify-center items-center content-center'>
            <h1 className='text-8xl'>Welcome to <span className='text-red-500'>Contact</span> Page.</h1>
            <div className='mt-5'>
                <button className='border-2 border-black px-10 py-2 rounded-xl text-2xl font-bold hover:bg-cyan-100' onClick={() => navigate('info')}>Info</button>
            </div>
        </div>
    )
}

export default Contact
