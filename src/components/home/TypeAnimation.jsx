import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Accountability",
          "Teamwork",
          "DSA Enthusiast",
          "Curious Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
};

export default TypeAnimation;
