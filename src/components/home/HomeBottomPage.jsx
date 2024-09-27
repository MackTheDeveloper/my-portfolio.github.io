import React from "react";
import avatar from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "@mui/material";

const resumeURL = "https://drive.google.com/file/d/1K9WYwGKp9C1ndUUUWKUIgexZ6hv-vFtY/view?usp=sharing";

const HomeBottomPage = () => {

  return (
    <div className="homeBottom" >
      <h1 style={{ fontSize: "2.6rem", marginBottom: "3.5rem" }}>
        Some Things <span style={{ color: "#32CD30" }}>About Me</span>
      </h1>
      <div className="introduction">
        <div className="intro-text">
          <p>
            I am Manish Patel, passionate and experienced PHP web developer specializing in building dynamic and responsive web applications.
          </p>
          <br />
          <p>
            I love working as a <span style={{ color: "#32CD30" }}>Full Stack Developer</span> and My tech stack includes
            PHP, Laravel, Yii, NodeJs, React, TypeScript, RESTful APIs. I am also familar with AWS and Laravel Vapor.
          </p>
          <br />
          <p>
            I am also Proficient with <span style={{ color: "#32CD30" }}>Git</span> for version control, <span style={{ color: "#32CD30" }}>Agile, and Scrum Methodologies</span>.
          </p>
          <br />
          <p>
          I love to accept a new challenge and be keen to learn new {" "}
            <span style={{ color: "#32CD30" }}>skills and technologies</span>.
          </p>
          <br />
          <p>
            Checkout my <span style={{ color: "#32CD30" }}>resume</span> for more about me.{" "}
          </p>
        </div>
        <div className="intro-image">
          <Tilt>
            <img
              class="rounded w-36 h-36"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
        </div>
      </div>
      <div className="downloadPdf">
        <a
          href={resumeURL}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="contained"
            color="success"
            endIcon={<FiDownloadCloud />}
            style={{ marginBottom: "50px" }}
          >
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomeBottomPage;
