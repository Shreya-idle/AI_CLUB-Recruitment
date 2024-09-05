import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const challenge = () => {
    return (
        <div className=''>
            <h1 className='text-black font-bold '>TAKE UP THE CHALLENGE</h1>
            <p>Join the Challenge to test your boundaries and grow personally. Register and log in for enrollment opportunities. Finish the challenge to gain premium access, podcasting opportunities, content sharing, exclusive networking, and more benefits to enhance your experience!” 🚀🎙️📲🌟</p>
            <div className="flex flex-col items-center justify-center h-screen">
            {/* Profile Image */}
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-12 h-12 text-gray-500"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM6.75 19.5a7.5 7.5 0 1110.5 0H6.75z" 
                    />
                </svg>
            </div>

            {/* User Name */}
            <h2 className="mt-4 text-gray-600">Your Name</h2>

            {/* Buttons */}
            <div className="flex mt-6 space-x-4">
                {/* Dashboard Button */}
                <button className="bg-[#011F5B] text-white px-6 py-2 rounded-md">
                    Dashboard
                </button>
                
                {/* Sign Out Button */}
                <button className="border border-[#011F5B] text-[#011F5B] px-6 py-2 rounded-md">
                    Sign Out
                </button>
            </div>
        </div>
        </div>
    )
}
export default challenge;