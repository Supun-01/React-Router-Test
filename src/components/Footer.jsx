import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footer() {
    return (
        <div className='border-t-2 border-black'>
            <div className='flex justify-between items-center text-2xl px-5 py-2 pb-5 bg-gray-200'>

                <div className='font-bold'>
                    <h1>ST</h1>
                </div>

                <div>
                    Supun Tharaka
                </div>

                <div className='flex gap-5'>
                    <FaFacebook className='text-blue-600' />
                    <IoLogoGithub />
                    <IoLogoWhatsapp className='text-green-600' />
                </div>
            </div>
        </div>
    )
}

export default Footer
