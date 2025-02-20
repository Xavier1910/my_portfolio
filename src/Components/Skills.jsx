import React from "react";

function Skills() {
  const skills = [
    {
      title: "Programming Language",
      value: [{ subTitle: "Java", logo: "/icons/java.png" }],
    },
    {
      title: "Web/MVC Framework",
      value: [{ subTitle: "Spring Boot", logo: "/icons/spring.png" }],
    },
    {
      title: "Front-end Web Framework",
      value: [{ subTitle: "React JS", logo: "/icons/react.png" }],
    },
    {
      title: "Front-end",
      value: [
        { subTitle: "HTML 5", logo: "/icons/html.png" },
        { subTitle: "CSS 3", logo: "/icons/css.png" },
        { subTitle: "JavaScript", logo: "/icons/js.png" },
      ],
    },
    {
      title: "Relational Databases",
      value: [
        { subTitle: "MySQL", logo: "/icons/mysql.png" },
        { subTitle: "Oracle", logo: "/icons/oracle.png" },
      ],
    },
    {
      title: "Source Version Control",
      value: [{ subTitle: "Git", logo: "/icons/git.png" }],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="card">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="card__content">
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.value.map((skill, i) => (
                  <div key={i} className="skill-item">
                    {skill.logo && (
                      <img src={skill.logo} alt={skill.subTitle} />
                    )}
                    <span>{skill.subTitle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
