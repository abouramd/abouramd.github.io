
import React, { useEffect, useState } from 'react';
import './index.css';
import { Store } from 'react-notifications-component';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  languages: string[];
  tools: string[];
  technologies: string[];
  sourceCodeLink: string;
}

function PortfolioProjectsShowcase(): JSX.Element {

  const [projects, setProjects] = useState<Project[] | null>(null);

  async function getProjects(): Promise<void> {

    try {
      const response = await fetch('/assest/docs/projects.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });


      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
      else {
        Store.addNotification({
          title: 'error',
          message: 'Failed to fetch projects',
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          },
        });
      }

    }
    catch (error) {
      Store.addNotification({
        title: 'error',
        message: (error as Error).message || 'Failed to fetch projects',
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },
      });
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <main className="container">
      <h1 className="main-title">My Projects</h1>
      <div className="projects-grid">
        {
          projects
            ?
            (projects as Project[]).map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
            :
            <div className='loading'>Loading...</div>
        }
      </div>
    </main >
  );
};

export default PortfolioProjectsShowcase;
