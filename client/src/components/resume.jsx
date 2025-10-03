import React, { useEffect } from "react";
import AOS from "aos";

function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const resumeData = {
  summary: {
    name: "Kajal Ranpise",
    role: "Innovative and deadline-driven Graphic Designer",
    description:
      "Results-driven and detail-oriented MERN Stack Developer with 5+ years of experience designing, developing, and maintaining scalable web applications using React.js, Node.js, Express.js, MySQL, and MongoDB. Skilled in RESTful APIs, modern front-end frameworks, CI/CD pipelines, and cloud deployment (Hostinger & DigitalOcean). Adept at collaborating with cross-functional teams to deliver high-quality, user-focused solutions.",
    contact: [
      { label: "📍 Pune, India" },
      { label: "📱 7040147091" },
      { label: "✉️ kajaldranpise@gmail.com" },
      { label: "🔗 LinkedIn", url: "https://www.linkedin.com/in/kajal-ranpise" },
      { label: "💻 GitHub", url: "https://github.com/kajal-ranpise" },
    ],
  },
  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      year: "2014 - 2018",
      institute: "Ajeenkya DY Patil School of Engineering & Technology, Pune, India",
 /*      description:
        "Focused on advanced design techniques and digital media projects.", */
    },
    {
      degree: "Higher Secondary Certificate in Science stream",
      year: "2013 - 2014",
      institute: "Shri Fattechand Jain jr College, Pune, India",
 /*      description:
        "Built a strong foundation in typography, print, and digital media.", */
    },
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "Autuskey Private Limited, Pune, India",
      year: "2021 - Present",
      responsibilities: [
        "Developed and maintained full-stack web applications leveraging MongoDB, MySQL, Express.js, React.js, and Node.js, ensuring high performance and scalability",
        "Designed and optimized database schemas and collections for MySQL and MongoDB to enable efficient data storage and querying",
        "Built and consumed RESTful APIs to facilitate seamless data-driven application functionality",
        "Implemented state management solutions using Redux and Context API for complex React applications",
        "Developed responsive and intuitive UI components using React to enhance user experience across devices.",
        "Integrated secure authentication and authorization mechanisms using JWT and OAuth",
        "Deployed and managed applications on cloud platforms, including Digital Ocean and Hostinger, ensuring reliability and scalability",
        "Optimized database performance through efficient SQL queries, indexing, and data migration strategies",
        "Collaborated with cross-functional teams, including UI/UX designers, QA engineers, and product managers, to deliver features on time and with high quality",
        "Participated in Agile/Scrum methodologies, including sprint planning, daily stand-ups, and code reviews, to maintain development efficiency and team alignment"
      ],
    },
    {
      title: "Bacekend Developer",
      company: "Mplussoft Technology, Pune, India",
      year: "2019 - 2020",
      responsibilities: [
        "Developed dynamic web applications using PHP and MySQL, delivering robust and scalable solutions",
        "Designed and optimized database schemas and queries to ensure efficient data storage and retrieval",
        "Implemented CRUD operations and RESTful APIs to enable seamless interaction between front-end and back-end systems",
        "Integrated secure user authentication and authorization to protect sensitive data and ensure compliance",
      ],
    },
  ],
};

  return (
    <main className="main resume-page">
      {/* Resume Section */}
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>Turning ideas into scalable web solutions—here’s my journey.</p>
        </div>

        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>{resumeData.summary.name}</h4>
                <p><em>{resumeData.summary.role} {resumeData.summary.description}</em></p>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  {resumeData.summary.contact.map((item, idx) => (
                    <li key={idx}>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          {item.label}
                        </a>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              {resumeData.education.map((edu, idx) => (
                <div className="resume-item" key={idx}>
                  <h4>{edu.degree}</h4>
                  <h5>{edu.year}</h5>
                  <p><em>{edu.institute}</em></p>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              {resumeData.experience.map((exp, idx) => (
                <div className="resume-item" key={idx}>
                  <h4>{exp.title}</h4>
                  <h5>{exp.year}</h5>
                  <p><em>{exp.company}</em></p>
                  <ul>
                    {exp.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;
