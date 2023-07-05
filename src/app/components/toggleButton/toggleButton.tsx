'use client'

import React, { useRef } from "react";
import "./style.scss"

export default function ToggleButton({ toggleTheme }) {
	const toggleRef = useRef(null);
  return (
		  <div id="toggle-container">
				<input type="checkbox" name="theme-toggle" id="theme-toggle"/>
				<label htmlFor="theme-toggle" id="theme-toggle-label" ref={toggleRef} onClick={() => toggleTheme(toggleRef.current)}>theme slider</label>
		  </div>
  )
}