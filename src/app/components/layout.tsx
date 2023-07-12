"use client"

import React, { useRef } from 'react'
import NavBar from './navBar/navBar'
import '../../app/globals.css'

export default function Layout({
  children,
}) {
  const bodyContainerRef = useRef<HTMLDivElement>(null);
  const toggleTheme = (toggleBtn) => {
    if (bodyContainerRef && bodyContainerRef.current) {
      bodyContainerRef.current.classList.toggle("dark-theme");
      toggleBtn.classList.toggle("dark-theme");
    }
  }
  
  return (
    <div id="body-container" ref={bodyContainerRef}> 
      <NavBar toggleTheme={toggleTheme}/>
        <div id="page-container">
          {children}
        </div>
    </div>
  )
}