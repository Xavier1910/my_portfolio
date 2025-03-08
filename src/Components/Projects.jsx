import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'ShowShe-Instagram Clone',
    description: 'This is a full-stack Instagram-like web application built using Vite + React for the frontend and Spring Boot with MySQL for the backend. The app allows users to register, log in, create and manage posts, search for users, follow/unfollow users, and view profiles.',
    imageUrl: [
      '/images/project/ic1.png',
      '/images/project/ic2.png',
      '/images/project/ic3.png',
      '/images/project/ic4.png',
      '/images/project/ic5.png',
      '/images/project/ic6.png',
    ],
    githubLink: 'https://github.com/Xavier1910/instagramClone',
  },
  {
    id: 2,
    title: 'Recipe Sharing',
    description: 'A professional platform for sharing, discovering, and refining recipes within a global culinary community.',
    imageUrl: [
      '/images/project/rc1.png',
      '/images/project/rc2.png',
      '/images/project/rc3.png',
      '/images/project/rc4.png',
      '/images/project/rc5.png',
    ],
    githubLink: 'https://github.com/Xavier1910/Recipe-Sharing',
  },
  {
    id: 3,
    title: 'E-commerce Website',
    description: 'LuxeLane is a full-stack e-commerce web application built using HTML, CSS, JavaScript, Spring Boot, and MySQL. It provides a seamless shopping experience, including product management, user authentication, order processing, and cart functionalities.',
    imageUrl: [
      '/images/project/ecw1.png',
      '/images/project/ecw2.png',
      '/images/project/ecw3.png',
      '/images/project/ecw4.png',
      '/images/project/ecw5.png',
      '/images/project/ecw6.png',
      '/images/project/ecw7.png',

    ],
    githubLink: 'https://github.com/Xavier1910/E-CommerceWebsite',
  },
  {
    id: 4,
    title: 'WhatsApp Clone',
    description: 'A frontend-only WhatsApp clone featuring real-time chat, contact lists, message display, and media sharing, built with modern web technologies.',
    imageUrl: [
      '/images/project/wa1.png',
      '/images/project/wa2.png',
      '/images/project/wa3.png',
      '/images/project/wa4.png',
      '/images/project/wa5.png',
    ],
    githubLink: 'https://github.com/yourgithub',
  }, 
  {
    id: 5,
    title: 'E-commerce',
    description: 'A frontend-only e-commerce project offering a seamless, responsive shopping experience with product listings, cart functionality, and checkout pages.',
    imageUrl: [
      '/images/project/ec1.png',
      '/images/project/ec2.png',
      '/images/project/ec3.png',
      '/images/project/ec4.png',

    ],
    githubLink: 'https://github.com/Xavier1910/e-commerce',
  },
];

function Projects() {
  const [autoScroll, setAutoScroll] = useState(true);

  const handlePause = () => setAutoScroll(false);
  const handlePlay = () => setAutoScroll(true);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCarousel
            key={project.id}
            project={project}
            autoScroll={autoScroll}
            handlePause={handlePause}
            handlePlay={handlePlay}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCarousel({ project, autoScroll, handlePause, handlePlay }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === project.imageUrl.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); 
      return () => clearInterval(interval); 
    }
  }, [autoScroll, project.imageUrl.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? project.imageUrl.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === project.imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project">
      <div className="carousel-container" onMouseEnter={handlePause} onMouseLeave={handlePlay}>
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {project.imageUrl.map((image, idx) => (
              <div className="carousel-item" key={idx}>
                <img
                  className="carousel-image"
                  src={image}
                  alt={`Slide ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-control prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="GitButton"
      >
        GitHub<i className="bi bi-github"></i>
      </a>
    </div>
  );
}

export default Projects;
