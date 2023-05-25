import React from "react";
import Section from "../components/Section";

import { BsTrophy } from "react-icons/bs"
// import { RiFilePaper2Fill } from "react-icons/ri"

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/1SwNIPj__uJam9oUVQIfi4hsouFXarGWX/view?usp=sharing">
              1<sup>st</sup> Prize in Kaggle Knight Prometeo'23 - Techfest, IIT Jodhpur
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/1qtBMlt6m2gE_ZRrI7tWeFYL-Ir6p2qdn/view?usp=sharing">
              2<sup>nd</sup> Prize in Quantum Conundrum Prometeo'23 - Techfest, IIT Jodhpur
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/1fFNnmNGjNsRjyF8vc5JjoBtn2yDMHBVF/view?usp=sharing">
              UG Research Day'23 Presentation
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="https://drive.google.com/file/d/172wE-2bqAB4NVfY4V-y2Vcyx8Vu9pxYG/view?usp=sharing">
              Amazon ML Summer School'22 Mentee
            </a>
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            <a href="/">
              Part of contingent that got Rank 8 at Inter IIT Tech Meet 10.0, IIT Kharagpur
            </a>
          </div>
          {/* <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><RiFilePaper2Fill /></i>
            </span>
            <a href="/">
              Certificate
            </a>
          </div> */}
        </ul>
      </Section>
    </React.Fragment>
  );
}
