import React from "react";
import "./style.scss"
import ToggleButton from "../toggleButton/toggleButton";
import Link from "next/link";

export default function NavBar({ toggleTheme }) {
	return (
		<nav className="navbar-container">
			<ul className="nav navbar">
				<li className="nav-item"><Link href="/">HOME</Link></li>
				<li className="nav-item"><Link href="/projects">PROJECTS</Link></li>
				<li className="nav-item"><Link href="/resume">RESUME</Link></li>
			</ul>
			<ToggleButton toggleTheme={toggleTheme} />
		</nav>
	)
}