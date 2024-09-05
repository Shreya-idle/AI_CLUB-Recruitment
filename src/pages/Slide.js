import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    };

    const slides = [
        {
            id: 1,
            content: (
                <div className="w-full h-full text-center p-6 bg-white rounded-lg shadow-md ">
                    <h2 className="text-xl font-bold">JOIN US !!</h2>
                    <p className="mt-4 text-gray-700">
                        Set sail on a voyage of discovery! 🚀 Join our circle of innovators and let your dreams take wing. Register, meet the criteria, and together, we’ll soar to success! 🎉🛫
                    </p>
                </div>
            ),
        },
        {
            id: 2,
            content: (
                <div className="w-full h-full text-center p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">OUR VISION</h2>
                    <p className="mt-4 text-gray-700">
                        We’re building a platform where individuals progress together, fostering a supportive ecosystem driven by impactful collaboration. 🌱 It’s about community, not just profits. Join us in shaping a future where everyone succeeds! 🚀✨
                    </p>
                </div>
            ),
        },
        {
            id: 3,
            content: (
                <div className="w-full h-full p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-center">FOLLOW US !!</h2>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/images/video.jpg`} alt="Follow Us" className="w-full h-auto object-cover" />
                            <p className="mt-4 text-gray-700 text-center">Check Out First Video !!!</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col space-y-2 text-gray-700">
                                <span>🎥 Any youtube video</span>
                                <span>🔗 Your linkedin</span>
                                <span>📷 Your insta id</span>
                                <span>📸 @startwithsmall</span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="relative">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="p-4">
                        {/* Use fixed width and height for all slides */}
                        <div className="w-105 h-96 mx-auto"> {/* All slides will be 24rem x 24rem */}
                            {slide.content}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slide;
