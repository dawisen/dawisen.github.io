import React, { useEffect, useState } from "react";
import { getProjects, getAllDeployments, getActiveDeployment } from "../../../../utils/github/api";
import { log } from "console";

interface project {
  id: number;
  name: string;
  html_url: string;
  description: string;
  active_deployment_url: string;
}
 
export default function ProjectPage() {
  const [projectList, setProjectList] = useState<project[]>([])
  useEffect(() => {
    const createProjectList = async () => {
      const myProjects = await getProjects();
      let projectArr: project[] = [];
      
      for (let i = 0; i < myProjects.length; i++) {
        let projectDeployments = await getAllDeployments(myProjects[i].name);
        if (projectDeployments.length !== 0) {
          let activeDeployment = await getActiveDeployment(myProjects[i].name, projectDeployments[0]?.id);
          myProjects[i].active_deployment_url = activeDeployment.environment_url;
        }
        projectArr.push(myProjects[i]);
      }
      setProjectList(projectArr)
    }

    createProjectList()
    console.log('current project list state', projectList);
  }, [])

	return (
    <section>
      <h1>Projects</h1>
      {`List of things I've worked on`}
      <ul>
        <li>
          Project 1
        </li>
        <li>
          Project 2
        </li>
        <li>
          Project 3
        </li>
      </ul>
    </section>
	)
}