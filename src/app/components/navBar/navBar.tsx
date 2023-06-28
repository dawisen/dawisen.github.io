import React from "react";
import "./style.scss"
import ToggleButton from "../toggleButton/toggleButton";

export default function NavBar() {
	return (
		<nav className="navbar-container">
			<ul className="nav navbar">
				<li className="nav-item"><a href="#home">HOME</a></li>
				<li className="nav-item"><a href="#projects">PROJECTS</a></li>
				<li className="nav-item"><a href="#resume">RESUME</a></li>
			</ul>
			<ToggleButton />
		</nav>
	)
}