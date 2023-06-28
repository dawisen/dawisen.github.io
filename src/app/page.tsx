import React from "react";
import NavBar from "./components/navBar/navBar";

export default function Home() {
  return (
    <div className="page-container">
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <h1>Hello there</h1>
          Welcome to my website!
        </section>
      </main>
    </div>
  )
}
