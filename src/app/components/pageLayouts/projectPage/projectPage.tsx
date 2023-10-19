import "./style.scss"
import React, { useEffect, useState } from "react";
import projects from "./projectList.json";
import Image from "next/image";
import linkIcon from "../../../../../public/link-solid.svg";
import githubIcon from "../../../../../public/github.svg";

interface project {
  id: string;
  name: string;
  html_url: string;
  description: string;
  active_deployment_url: string;
}
 
export default function ProjectPage() {
  const [projectList, setProjectList] = useState<project[]>([])
  const [loading, setLoading] = useState(false);
  const projectJSON: project[]= [...projects.projects]

  useEffect(() => {
    setProjectList(projectJSON);
  }, [])

	return (
    <section>
      <h1 id="title">RECENT PROJECTS</h1>
      <p id="subtitle">Here&apos;s what I&apos;ve been working on lately.</p>
      {loading ? 'Loading...' : null}
      {!loading && projectList.length ?
        <ul>
          {
            projectList?.map((project) => {
              return (
                  <a href={project.html_url} key={project.id} >
                    <li id={"box-"+project.id}>
                      <p className="project-name">{project.name}</p>
                      <p className="project-description">{project.description}</p>
                    </li>
                  </a>
              )
            })
          }
          <a href="https://github.com/dawisen">
            <li id="last">
            FIND MORE ON MY GITHUB PAGE
            <Image className="github" alt="github-icon"src={githubIcon}/>
            </li>
          </a>
        </ul> : null
      }
    </section>
	)
}