import React, { useEffect, useState } from "react";
import { getProjects, getAllDeployments, getActiveDeployment } from "../../../../utils/github/api";

interface project {
  id: number;
  name: string;
  html_url: string;
  description: string;
  active_deployment_url: string;
}
 
export default function ProjectPage() {
  const [projectList, setProjectList] = useState<project[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const createProjectList = async () => {
      setLoading(true);
      try {
        const projectRes = await getProjects();
        let projectArr: project[] = [];
        
        for (let i = 0; i < 3; i++) {
          let project:project = {
            id: 0,
            name: "",
            html_url: "",
            description: "",
            active_deployment_url: ""
          };
          if (projectRes[i] !== undefined) {
            project.id = projectRes[i].id
            project.name = projectRes[i].name;
            project.html_url = projectRes[i].html_url;
            project.description = projectRes[i].description;
            let projectDeployments = await getAllDeployments(projectRes[i]?.name);
  
            if (projectDeployments !== undefined && projectDeployments.length !== 0) {
              let activeDeployment = await getActiveDeployment(projectRes[i]?.name, projectDeployments[0]?.id);
              project.active_deployment_url = activeDeployment[0].environment_url;
            }
            else project.active_deployment_url = '';
            projectArr.push(project);
          }
        }
        
        setProjectList(projectArr);
        setLoading(false);
      }
      catch(error) {
        console.error(error);
        setProjectList([]);
        setLoading(false);
      }
    }

    createProjectList()
  }, [])

	return (
    <section>
      <h1>Projects</h1>
      <p>Here are some recent projects I&apos;ve worked on</p>
      {loading ? 'Loading...' : null}
      {!loading && projectList.length ?
        <ul>
          {
            projectList?.map((project) => {
              return (
                <li key={project.id}>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <a href={project.html_url}>GitHub Repository</a>
                  {project.active_deployment_url !== '' ?
                    <a href={project.active_deployment_url}>Live Demo</a>
                    : null
                  }
                </li>
              )
            })
          }
        </ul> : null
      }
    </section>
	)
}