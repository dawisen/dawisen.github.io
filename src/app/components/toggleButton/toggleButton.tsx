import React from "react";
import "./style.scss"

export default function ToggleButton() {
  return (
		  <div id="toggle-container">
				  <input type="checkbox" name="theme-toggle" id="theme-toggle"/>
				  <label htmlFor="theme-toggle">theme slider</label>
		  </div>
  )
}