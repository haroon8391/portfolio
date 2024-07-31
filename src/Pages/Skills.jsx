import React from "react";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="skills-section lg:min-h-screen py-12 bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center items-center"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            <div className="skill-box animate-slide-in-left bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              HTML
            </div>
            <div className="skill-box animate-slide-in-left bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              CSS
            </div>
            <div className="skill-box animate-slide-in-left bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              TAILWIND
            </div>
            <div className="skill-box animate-slide-in-right bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              JAVASCRIPT
            </div>
            <div className="skill-box animate-slide-in-right bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              REACT
            </div>
            <div className="skill-box animate-slide-in-right bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              NEXTJS
            </div>
            <div className="skill-box animate-slide-in-left bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              NODE
            </div>
            <div className="skill-box animate-slide-in-left bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              EXPRESS
            </div>
            <div className="skill-box animate-slide-in-left bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              MONGODB
            </div>
            <div className="skill-box animate-slide-in-right bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              REDUX
            </div>
            <div className="skill-box animate-slide-in-right bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              GIT
            </div>
            <div className="skill-box animate-slide-in-right bg-white text-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-800 hover:text-white border-2 border-transparent hover:border-white">
              FIREBASE
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Skills;
