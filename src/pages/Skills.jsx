import React from "react";
import Section from "../components/Section";
import {
  SiC,
  SiAndroidstudio,
  SiCss3,
  SiDocker,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTensorflow,
} from "react-icons/si";
import { BsTerminalFill } from "react-icons/bs";
import "../css/Skill.css";

const Skills = () => {
  const icons = [
    { icon: <SiC />, name: "C", color: "#A8B9CC" },
    { icon: <SiPython />, name: "Python", color: "#3776AB" },
    { icon: <SiGit />, name: "Git", color: "#F05032" },
    { icon: <SiGithub />, name: "GitHub", color: "#181717" },
    { icon: <SiGitlab />, name: "GitLab", color: "#FCA121" },
    { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
    { icon: <SiKeras />, name: "Keras", color: "#D00000" },
    { icon: <SiFlask />, name: "Flask", color: "#000000" },
    { icon: <SiFlutter />, name: "Flutter", color: "#02569B" },
    { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
    { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
    { icon: <SiAndroidstudio />, name: "Android Studio", color: "#3DDC84" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <BsTerminalFill />, name: "Terminal", color: "#4D4D4D" },
  ];

  return (
    <Section id="skills" title="Skills">
      <div
        className="subheading mb-3 text-center"
        style={{ fontSize: "1.8rem", fontWeight: "bold" }}
      >
        Tech I'm familiar with..
      </div>
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="skills-container">
            {icons.map(({ icon, name, color }, index) => (
              <div className="skill-item" key={index}>
                <span
                  className="icon-container"
                  data-tooltip={name}
                  aria-label={name}
                  style={{ color: color }}
                >
                  {icon}
                </span>
                <span className="skill-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
