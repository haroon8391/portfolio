import React from "react";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col items-center justify-center lg:min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 md:px-12 lg:px-24 py-8"
      >
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="text-4xl font-extrabold mb-6 text-center">About Me</h1>
          <p className="text-lg mb-4">
            I am a dedicated Software Engineering student at NUST, where I am
            honing my skills and knowledge in software development. My academic
            journey has provided me with a solid foundation in various
            technologies and methodologies, which I have applied in numerous
            projects. I have expertise in MERN Stack and have proficiency in
            React, Node.js, and Express.js, and have substantial experience
            working with Next.js. This experience has equipped me with a deep
            understanding of both client-side and server-side development,
            enabling me to create efficient and scalable applications.
          </p>
          <p className="text-lg mb-4">
            My projects often involve developing user-friendly interfaces,
            optimizing performance, and ensuring seamless integration between
            front-end and back-end components. I am continuously learning and
            adapting to new technologies to stay at the forefront of the
            ever-evolving field of software engineering. I am enthusiastic about
            leveraging my skills and experience to contribute to innovative and
            impactful projects.
          </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
