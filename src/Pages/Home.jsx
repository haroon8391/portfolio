import React from "react";
import TypingAnimation from "../Components/TypingAnimation";
import image from "../Assets/image.jpeg";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 sm:p-12 md:p-16 lg:p-24">
        <div className="lg:w-1/2 p-4 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-4">Hello,</h1>
          <h2 className="text-2xl font-bold mb-4">
            <span>I am a </span>
            <span style={{ color: "#f9004d" }}>
              <TypingAnimation />
            </span>
          </h2>
          <p className="text-lg font-semibold">
            Welcome to my portfolio website. Here you can find information about
            my projects, skills, and experience.
          </p>
        </div>
        <div className="lg:w-1/2 p-4 flex justify-center lg:justify-end">
          <img
            src={image}
            alt="error"
            className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-lg animate-pulse object-cover"
          />
        </div>
      </div>
      <hr />
      <About />
    </>
  );
};

export default Home;
