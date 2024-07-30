// TypingAnimation.js
import React from "react";
import { ReactTyped as Typed } from "react-typed";

const TypingAnimation = () => {
  return (
    <Typed
      strings={[
        "Software Engineer",
        "Full Stack Developer",
        "MERN Stack Developer",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  );
};

export default TypingAnimation;
