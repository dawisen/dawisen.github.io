import Link from "next/link";
import React from "react";
import './style.scss';

export default function ResumePage() {
	return (
    <div id="resume-container">
      <section id="contact-info">
        <div id="name-and-title">
          <h1>Danielle Wisen</h1>
          <p>Software Engineer</p>
        </div>
        <div className="contact-links">
          <Link href={'daniellewwise@gmail.com'}>daniellewwise@gmail.com</Link>
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
        <div>
          <h3>WillowTree</h3>
        </div>
        <div>
          <h3>JAG Global Learning</h3>
        </div>
        <div>
          <h3>Japan Exchange and Teaching Program</h3>
        </div>
      </section>
      <section id="skills"><h2>Skills</h2>
        <h3>Technical</h3>
        <p>JavaScript, React, TypeScript, Express, Java, Node, Electron, MongoDB, JSON, Python Vue.js, MySQL</p>
        <h3>Tooling</h3>
        <p>Heroku, Bitbucket, Jira, Git, AWS, GitHub Actions</p>
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