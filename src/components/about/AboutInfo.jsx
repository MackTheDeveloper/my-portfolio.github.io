import React from "react";
import TechStack from "./TechStack";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import codeImage from "../../assets/coder.svg";
import GitHubCalendar from "react-github-calendar";

const AboutInfo = () => {
  return (
    <div className="about">
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontSize: "2.5rem",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "#32CD30" }}>About</span> Me
      </h1>
      <div className="about-parent">
        <div className="about-text">
          <p style={{ textAlign: "justify" }}>
            Hi people, I am{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              Manish Patel
            </span>{" "}
            from Winnipeg, MB, Canada. I did Master in Computer Science & Information Technology
            from{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
              H.N.G.U, India
            </span>{" "}
            and currently I'm working as{" "}
            <span style={{ color: "#32CD30", fontWeight: "bold" }}>
            freelance web developer
            </span>
            .
          </p>
          <br></br>
          <p style={{ textAlign: "justify" }}>
            Apart from developement, some things I like are<br></br>
            <br></br>
            <ul>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Sports
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Reading
              </li>
              <li>
                <BsFillArrowRightSquareFill style={{ display: "inline" }} />{" "}
                Travelling
              </li>
            </ul>
          </p>
        </div>
        <img
          className="rounded about-image"
          src={codeImage}
          alt="Extra large avatar"
        ></img>
      </div>
      <TechStack />
      <h1
        style={{
          marginTop: "3rem",
          fontFamily: "Fira Code",
          fontWeight: "bold",
        }}
      >
        My <span style={{ color: "#32CD30" }}>Github</span> Contribution Graph
      </h1>
      <br></br>
      <div className="github-graph">
        <GitHubCalendar
          style={{ marginBottom: "50px" }}
          username="MackTheDeveloper"
          blockMargin={6}
          blockSize={12}
          fontSize={16}
          color={"#32CD30"}
        />
      </div>
    </div>
  );
};

export default AboutInfo;
