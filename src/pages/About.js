import React from 'react';
import img1 from '../assets/images/logo.png';

function About() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-center h-100 w-250'>
                <img src={img1} alt="Start Small" className='grid grid-cols-2 gap-4' />
            </div>
            <div className='flex justify-center text-lg text-base pt-5 px-4 pb-8 text-customGray'>
                <p className='text-center'>Welcome to StartWSmall, a dynamic community where learning, innovation, and networking come together. Join us to fuel your personal and professional growth. Let's embark on an exploration of endless possibilities together.&#128640; 🌱 &#129394;</p>
            </div>
            <div className='flex justify-center w-full'>
                <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors duration-300">
                    Join
                </button>
            </div>
        </div>
    );
}

export default About;
