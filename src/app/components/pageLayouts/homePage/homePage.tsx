import Link from "next/link";
import React from "react";
import myicon from "../../../../../public/DANIELLEICON.png";
import Image from "next/image";
import './style.scss';

export default function ResumePage() {
  return (
    <section>
      <div id="intro">
      <h1>Hi there</h1>
      <p>
        I&apos;m Danielle, a <a className="emphasize-text">software engineer</a> with an interest in building innovative web solutions.
        Programming languages are continuously evolving so I&apos;m always open to opportunities to learn something new.
      </p>
      <p>
        I believe in the power of technology to transform ideas into reality.
        My unique approach to programming, coupled with a passion for collaboration,
        enables me to drive innovation and create meaningful digital experiences.
      </p>
      <p>
        Check out my <Link className="link" href={'/resume'}>resume</Link> and
        some <Link className="link" href={'/projects'}>projects</Link> I&apos;ve been working on recently.
      </p>
      <p>
        If you think I would be a good fit for your team, contact me at <a className="link" href="mailto:daniellewwise@gmail.com">daniellewwise@gmail.com</a>.
      </p>
      </div>
      <Image id="pic-of-me" src={myicon} alt={"picture of Danielle Wisen"}></Image>
    </section>
	)
}