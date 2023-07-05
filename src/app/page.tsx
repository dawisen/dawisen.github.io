'use client'

import React, { useRef } from "react";
import NavBar from "./components/navBar/navBar";

export default function Home() {
  const bodyContainerRef = useRef(null);
  const toggleTheme = (toggleBtn) => {
    bodyContainerRef.current.classList.toggle("dark-theme");
    toggleBtn.classList.toggle("dark-theme");
  }

  return (
    <div id="body-container" ref={bodyContainerRef}>
      <div id="page-container" >
        <header>
          <NavBar toggleTheme={toggleTheme} />
        </header>
        <main>
          <section>
            <h1>Hello there</h1>
            Welcome to my website!
          </section>
        </main>
      </div>
    </div>
  )
}
