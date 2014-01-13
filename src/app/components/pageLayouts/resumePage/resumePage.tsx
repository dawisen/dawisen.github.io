import Link from "next/link";
import React from "react";

export default function ResumePage() {
	return (
    <div id="resume-container">
      <section id="contact-info">
        Danielle Wisen
        <Link href={'daniellewwise@gmail.com'}>email</Link>
        <Link href={'https://github.com/dawisen'}>GitHub</Link>
        <Link href={'https://www.linkedin.com/in/daniellewisen1/'}>LinkedIn</Link>
      </section>
      <section id="summary">Summary</section>
      <section id="work-experience">Experience
      </section>
      <section id="skills">Skills</section>
      <section id="education">Education</section>
    </div>
	)
}