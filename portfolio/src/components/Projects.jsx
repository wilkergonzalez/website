import React from 'react';
import './Projects.css';
import Layout from './Layout';

const Projects = () => {
  const projects = [
    {
      title: "GH Windows - Small Business Website",
      description: "Designed and shipped a responsive website for a local window installer using HTML/CSS/JavaScript, organizing content around services, process, and FAQs to reduce pre-sales questions. Implemented a 'Free Estimate' form with client-side validation, spam protection, and email routing to the owner.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      githubUrl: "#",
      liveUrl: "https://ghwindow.com"
    },
    {
      title: "Coffee Shop Tycoon - Java OOP",
      description: "Built a Java console simulation using MVC and OOP compositions/enums/interfaces to model a 7-day coffee shop with inventory, pricing, and demand. Implemented a discrete simulator for customers to have budgets/patience, resource constraints, and a per-day market price variance. Tracked revenue, costs, profit, and final cash.",
      technologies: ["Java", "OOP", "MVC", "Console Application"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Sproutify Care Simulation",
      description: "Built a simulation using C++, Box2D physics engine, and Qt framework, focusing on realistic physics and user interaction following MVC architecture. Collaborated in a six-person team using SCRUM methodologies for development.",
      technologies: ["C++", "Box2D", "Qt Framework", "MVC", "SCRUM"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Customer Support System",
      description: "Developed comprehensive support solutions for Canvas Learning Management System, including ticket resolution, troubleshooting procedures, and customer satisfaction tracking. Achieved 95% satisfaction rate while handling 150+ tickets per week.",
      technologies: ["Customer Service", "Troubleshooting", "Technical Support", "Canvas LMS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Database Systems Project",
      description: "Academic project focusing on database design, implementation, and optimization using SQL. Included data wrangling, database systems coursework, and applied software security testing principles.",
      technologies: ["SQL", "Database Systems", "Data Wrangling", "Security Testing"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Web Development Portfolio",
      description: "Personal portfolio website showcasing web development skills using HTML, CSS, and JavaScript. Demonstrates responsive design, human-centered experience principles, and modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <Layout>
      <div className="projects-container">
        <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on recently</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <div className="project-number">{index + 1}</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} className="project-link github-link">
                  GitHub
                </a>
                <a href={project.liveUrl} className="project-link live-link">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default Projects;