import React from 'react';
import { Carousel } from 'flowbite-react';
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        {/* Adjusted Carousel */}
        <Carousel className="w-full mx-auto px-5">
          {/* Added padding inside Carousel */}
          <div className="my-28 md:my-8 py-12 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="Event Banner" />
            </div>
            {/* Hero Text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Event blah blah blah{" "}
                <span className="text-brandPrimary leading-snug">blah blah</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda id repellendus.
              </p>
              <button className="btn-primary">Explore Events</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="Event Banner" />
            </div>
            {/* Hero Text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Event blah blahh{" "}
                <span className="text-brandPrimary leading-snug">blah blah</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda id repellendus.
              </p>
              <button className="btn-primary">Explore Events</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 px-6 md:px-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="Event Banner" />
            </div>
            {/* Hero Text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Event blah blah blah{" "}
                <span className="text-brandPrimary leading-snug">blah blah</span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda id repellendus.
              </p>
              <button className="btn-primary">Explore Events</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
