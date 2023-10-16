import './style.scss';
import React from "react";
import Image from "next/image";
import logo from "../../../../../public/logo.svg";

export default function ResumePage() {
	return (
    <div id="resume-container">
      <div id="left-col">
        <section id="contact-info">
          <div id="logo">
            <Image alt="danielle wisen logo" src={logo} priority={true} />
          </div>
          <div id="contact-links">
            <a href={'mailto:daniellewwise@gmail.com'}>daniellewwise@gmail.com</a>
            <a href={'https://github.com/dawisen'}>GitHub</a>
            <a href={'https://www.linkedin.com/in/daniellewisen1/'}>LinkedIn</a>
          </div>
        </section>
        <section id="skills"><h2>SKILLS</h2>
          <p className="subsection-title">Software</p>
          <p>JavaScript, React, TypeScript, Express, Java, Node, Electron, MongoDB, JSON, Python Vue.js, MySQL</p>
          <p className="subsection-title">Tooling</p>
          <p>Heroku, Bitbucket, Jira, Git, AWS, GitHub Actions</p>
        </section>
        <section id="education"><h2>EDUCATION</h2>
          <p className="subsection-title">UNC Chapel Hill</p>
          <p>Full-Stack Coding Bootcamp</p>
          <p className="subsection-title">NC State University</p>
          <p>Bachelor of Arts in English Language and Writing</p>
        </section>
      </div>

      <div id="right-col">
        <section id="summary">
          <h2>SUMMARY</h2>
          <p>
            Highly motivated engineer with a background in teaching and writing.
            Experienced in both frontend and backend development with two years of experience
            in JavaScript, React and five years of experience in writing and editing.
            Committed learner and critical thinker seeking opportunities to build meaningful projects
            with a passionate team.
          </p>
        </section>
        <section id="experience">
          <h2>EXPERIENCE</h2>
          <div>
            <p className="subsection-title">
              Software Engineer
              <a href="https://www.willowtreeapps.com/">WillowTree</a>
            </p>
            <ul>
              <li>Developed and maintained a back-end API using Python, Amazon Web Services including Lambda, API Gateway, S3.</li>
              <li>Leveraged AWS services such as Route 53, Cloudfront, and S3 for serving a front-end React application.</li>
              <li>
                Implemented GitHub Actions to automate the deployment process for production, staging, and development
                environments, enabling linting and unit testing on each pull request and merge.
              </li>
              <li>
                Contributed as a key member of the frontend development team, utilizing React and Next.js to recreate the client’s user
                web portal, enhancing user experience and functionality.
              </li>
              <li>
                Integrated analytics into the project, enabling comprehensive tracking and analysis of user interactions to create
                actionable insights for the client that inform decision-making and future improvements with Mixpanel.
              </li>
              <li>
                Actively participated in code reviews and provided valuable feedback to team members, ensuring adherence to best
                practices, code quality, and efficient development processes.
              </li>
            </ul>
          </div>
          <div>
            <p className="subsection-title">
              Software Engineer
              <a href="https://jaggloballearning.com/">JAG Global Learning</a>
            </p>
            <ul>
              <li>Started a new project using Electron and React to streamline the process of writing and designing on-boarding documentation
                for Medicare Employees.
                <ul>
                  <li>
                    Developed client project in accordance to Section 508 federal guidelines to ensure that they are readily accessible to
                    people with disabilities.
                  </li>
                </ul>
              </li>
              <li>Translated product requirements from clients into technical specifications.</li>
              <li>Actively communicated progress with stakeholders on a bi-weekly basis.</li>
            </ul>
          </div>
          <div>
            <p className="subsection-title">
              Assistant Language Teacher
              <a href="https://jetprogramusa.org/">Japan Exchange and Teaching Program</a>
              
            </p>
            <ul>
              <li>Served as a cultural ambassador between the United States and Japan promoting English education.</li>
              <li>Co-led an educational workshop for teachers on different learning methods of students.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
	)
}