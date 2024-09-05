import React from 'react';

//lg-mx-auto
const contact= () =>{
    return (
        <>
       <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-lg shadow-lg">
       <div className="writing-mode-vertical-rl rotate-180 text-blue-900 font-bold text-lg px-12 ">
        StartwithSmall
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Join the Community ?</h2>
        <p className="text-gray-600 text-lg mb-6 text-center md:text-left">
          Set sail on a voyage of discovery! 🚀 Join our circle of innovators and let your dreams take wing. Register, meet the criteria, and together, we’ll soar to success! 🌟✈️
        </p>
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center space-x-2">
            <i className="fab fa-youtube text-2xl text-red-600"></i>
            <a href="/any_youtube_video" className="text-gray-800">/any youtube video</a>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fab fa-linkedin text-2xl text-blue-600"></i>
            <a href="/your_linkedin" className="text-gray-800">/your linkedin</a>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fab fa-instagram text-2xl text-pink-600"></i>
            <a href="/your_insta_id" className="text-gray-800">@your insta id</a>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fab fa-instagram text-2xl text-pink-600"></i>
            <a href="/startwithsmall" className="text-gray-800">@startwithsmall</a>
          </div>
        </div>
      </div>
      
    </div>
            
    </>
    )
}
export default contact;