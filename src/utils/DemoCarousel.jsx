import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pic1 from '../assets/pic1.JPG';
import pic2 from '../assets/pic2.JPG';
import pic3 from '../assets/piic3.JPG';
import pic5 from '../assets/pic5.JPG';
import Navbar from '../Components/Navbar';

const DemoCarousel = () => {
    const slideStyle = {
        height: '660px', // Adjust the height as needed
        width: '100vw',
    };

    return (
        <div className="relative"> {/* Use relative to contain absolutely positioned navbar */}
            {/* Navbar */}
            <div className="absolute top-0 left-0 w-full z-10"> {/* Absolute positioning for Navbar */}
                <Navbar />
            </div>

            {/* Carousel */}
            <Carousel
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
            >
                <div style={slideStyle}>
                    <img src={pic3} alt="Slide 3" className="w-full h-full object-cover sm:object-center object-[35%_80%]" />
                </div>
                <div style={slideStyle}>
                    <img src={pic1} alt="Slide 1" className="w-full h-full object-cover object-center" />
                </div>
                <div style={slideStyle}>
                    <img src={pic2} alt="Slide 2" className="w-full h-full object-cover " />
                </div>
                <div style={slideStyle}>
                    <img src={pic5} alt="Slide 2" className="w-full h-full object-cover md:object-center object-[80%_80%]" />
                </div>
            </Carousel>
        </div>
    );
};

export default DemoCarousel;
