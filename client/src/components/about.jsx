import React from "react";
import profileImg from "../assets/img/profile-img.jpg";
import testimonial1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonial2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonial3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonial4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonial5 from "../assets/img/testimonials/testimonials-5.jpg";
function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
function About() {
const age = calculateAge("1996-09-25"); // YYYY-MM-DD format

  return (
    <main className="main about-page">
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            I am a Full Stack Developer specializing in React.js (frontend) and Node.js/Express (backend) with strong experience in end-to-end web development.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src={profileImg} className="img-fluid" alt="Profile" />
            </div>
            <div className="col-lg-8 content">
              <h2>Full Stack &amp; Web Developer</h2>
              <p className="fst-italic py-3">
               To stay ahead, I integrate AI-powered tools into my workflow – leveraging ChatGPT for brainstorming, documentation, and debugging, and GitHub Copilot for accelerating development. This allows me to deliver high-quality code faster and focus more on solving complex business problems.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>25 Sep 1996</span>
                    </li>
                 {/*    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li> */}
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 7040147091</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Pune, MH, IN</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>{age}</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>Bachelor of Engineering (Computer)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong> <span>kajaldranpise@gmail.com</span>
                    </li>
                   {/*  <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li> */}
                  </ul>
                </div>
              </div>

              <p className="py-3">
                Results-driven and detail-oriented MERN Stack Developer with hands-on experience in designing, developing, and maintaining scalable web applications using Express.js, React.js, Node.js, MySQL, and MongoDB. Proficient in RESTful APIs, modern front-end frameworks, CI/CD pipelines, and deployment (Hostinger and DigitalOcean). Adept at collaborating with cross-functional teams to deliver high-quality, user-focused solutions in Agile environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}

      {/* Skills Section */}
      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills & Expertise</h2>
          <p>
            Technologies and tools I use to design, build, and optimize applications.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              {[
                { name: "HTML", val: "100" },
                { name: "CSS", val: "90" },
                { name: "JavaScript", val: "75" },
              ].map((skill, i) => (
                <div className="progress" key={i}>
                  <span className="skill">
                    <span>{skill.name}</span>{" "}
                    <i className="val">{skill.val}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skill.val}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-6">

              
              {[
                { name: "PHP", val: "50" },
                { name: "WordPress/CMS", val: "90" },
                { name: "Photoshop", val: "55" },
              ].map((skill, i) => (
                <div className="progress" key={i}>
                  <span className="skill">
                    <span>{skill.name}</span>{" "}
                    <i className="val">{skill.val}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skill.val}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* /Skills Section */}

      {/* Stats Section */}
      <section id="stats" className="stats section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Facts</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {[
              { end: 232, label: "Clients" },
              { end: 521, label: "Projects" },
              { end: 1453, label: "Hours Of Support" },
              { end: 32, label: "Workers" },
            ].map((stat, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end={stat.end}
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Stats Section */}

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              {[testimonial1, testimonial2, testimonial3, testimonial4, testimonial5].map(
                (img, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="testimonial-item">
                      <img src={img} className="testimonial-img" alt="" />
                      <h3>Person {i + 1}</h3>
                      <h4>Role</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          Sample testimonial text {i + 1}. Replace with your
                          content.
                        </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/* /Testimonials Section */}
    </main>
  );
}

export default About;
