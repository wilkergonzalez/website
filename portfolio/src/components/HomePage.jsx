import React from 'react';
import './HomePage.css';
import Navigation from './Navigation';

const HomePage = ({ userName }) => {
  const resumeData = {
    name: "Wilker Gonzalez",
    title: "Software Development Student",
    about: "Computer Science student at the University of Utah with experience in software development, customer service, and technical support. Passionate about building practical solutions and developing strong technical and interpersonal skills.",
    experience: [
      {
        title: "Special Advisor",
        company: "GH Windows LLC",
        period: "Jan 2024 - Present",
        description: "Created and maintained the company website. Ensured compliance with company policies during installation processes. Acted as customer point of contact, addressing inquiries and enhancing customer satisfaction by 20%."
      },
      {
        title: "L1 Support Engineer",
        company: "Instructure/Canvas",
        period: "Oct 2022 - Jan 2024",
        description: "Provided comprehensive support to teachers, administrators, and students for Canvas Learning Management System. Diagnosed and troubleshot technical problems, resolved average of 150 tickets per week with 95% satisfaction rate."
      }
    ],
    skills: [
      { name: "Java", icon: "☕" },
      { name: "C++", icon: "🔧" },
      { name: "C#", icon: "🔷" },
      { name: "Python", icon: "🐍" },
      { name: "SQL", icon: "🗃️" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Customer Service", icon: "🤝" },
      { name: "Communication", icon: "💬" },
      { name: "Problem Solving", icon: "💡" },
      { name: "Troubleshooting", icon: "🔧" },
      { name: "Team Player", icon: "👥" },
      { name: "Discord", icon: "🎮" },
      { name: "Slack", icon: "💬" }
    ],
    education: [
      {
        degree: "Bachelor of Science in Software Development",
        school: "University of Utah, Kahlert School of Computing",
        period: "August 2022 - May 2026"
      }
    ]
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="greeting">Hello, {userName}!</h1>
          <h2 className="hero-title">Welcome to {resumeData.name}'s Portfolio</h2>
          <p className="hero-subtitle">{resumeData.title}</p>
          <p className="hero-description">{resumeData.about}</p>
        </div>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        <div className="experience-grid">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <h4>{exp.title}</h4>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <div className="skills-grid">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="education">
        <h3>Education</h3>
        <div className="education-card">
          <h4>{resumeData.education[0].degree}</h4>
          <p className="school">{resumeData.education[0].school}</p>
          <p className="period">{resumeData.education[0].period}</p>
        </div>
      </section>

      <section className="contact">
        <h3>Get In Touch</h3>
        <p>Feel free to reach out for collaborations or just a friendly hello!</p>
        <button className="contact-button">Contact Me</button>
      </section>
    </div>
  );
};

export default HomePage;