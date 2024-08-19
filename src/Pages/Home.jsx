import React from "react";
import TypingAnimation from "../Components/TypingAnimation";
import image2 from "../Assets/image2.png";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col lg:flex-row items-center justify-center lg:min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24 sm:p-24 md:p-16 lg:p-24"
      >
        <div className="lg:w-1/2 p-4 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold mb-4">Hello I'm</h1>
          <h1 className="text-4xl font-extrabold mb-4">Muhammad Haroon Ali</h1>
          <h2 className="text-4xl font-bold mb-4">
            <span style={{ color: "#f9004d" }}>
              <TypingAnimation />
            </span>
          </h2>
          <p className="text-lg font-semibold leading-relaxed">
            Welcome to my digital corner! Dive into my journey as a passionate
            Software Engineer and MERN stack developer. Explore my projects,
            skills, and experiences.
          </p>
          <div className="mt-10">
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-slate-100 text-black font-bold py-2 px-4 rounded-lg border-2 border-transparent hover:border-white hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Download Resume{"  "}
              <span>
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 flex justify-center lg:justify-end">
          <div className="relative rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1">
            <div className="rounded-full bg-white p-1">
              <img
                src={image2}
                alt="error"
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full shadow-lg object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
