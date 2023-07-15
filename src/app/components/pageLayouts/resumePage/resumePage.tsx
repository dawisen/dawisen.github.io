import Link from "next/link";
import React from "react";
import './style.scss';

export default function ResumePage() {
	return (
    <div id="resume-container">
      <section id="contact-info">
        <h1>Danielle Wisen</h1>
        <div className="contact-links">
          <Link href={'daniellewwise@gmail.com'}>email</Link>
          <Link href={'https://github.com/dawisen'}>GitHub</Link>
          <Link href={'https://www.linkedin.com/in/daniellewisen1/'}>LinkedIn</Link>
        </div>
      </section>
      <section id="summary">
        <h2>Summary</h2>
        <p>
          Software Engineer with writing and teaching background seeking new technical opportunities.
          Two years of experience in JavaScript, React and five years of experience in writing and editing.
          Committed learner and critical thinker.
        </p>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <ul>
          <li>WillowTree</li>
          <li>JAG Global Learning</li>
          <li>Japan Exchange and Teaching Program</li>
        </ul>
      </section>
      <section id="skills"><h2>Skills</h2>
        <h3>Technical</h3>
        <h3>Tooling</h3>
      </section>
      <section id="education"><h2>Education</h2>
        <ul>
          <li>Full-Stack Coding Bootcamp Certificate, The University of North Carolina at Chapel Hill</li>
          <li>Bachelor of Arts in English Language and Writing, North Carolina State University</li>
        </ul>
      </section>
    </div>
	)
}