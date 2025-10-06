import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import app1 from "../assets/img/portfolio/app-1.jpg";
import product1 from "../assets/img/portfolio/product-1.jpg";
import branding1 from "../assets/img/portfolio/branding-1.jpg";
import books1 from "../assets/img/portfolio/books-1.jpg";
  console.log("ProjectDetails component rendered???");

const projectDetails = {
  images: [app1, product1, branding1, books1],
  info: [
    { label: "Category", value: "Web design" },
    { label: "Client", value: "ASU Company" },
    { label: "Project date", value: "01 March, 2020" },
    { label: "Project URL", value: <a href="#">www.example.com</a> },
  ],
  title: "Exercitationem repudiandae officiis neque suscipit",
  description:
    "Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.",
};

function ProjectDetails() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="main portfolio-details-page">
      {/* Portfolio Details Section */}
      <section id="portfolio-details" className="portfolio-details section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Project Details</h2>
          <p>
            Deep dive into the work behind the project.
          </p>
        </div>
        {/* End Section Title */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Left - Swiper Slider */}
            <div className="col-lg-8">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                speed={600}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="portfolio-details-slider"
              >
                {projectDetails.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={`Project ${idx + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Right - Project Info */}
            <div className="col-lg-4">
              <div
                className="portfolio-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Project information</h3>
                <ul>
                  {projectDetails.info.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong>: {item.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="portfolio-description"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2>{projectDetails.title}</h2>
                <p>{projectDetails.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Details Section */}
    </main>
  );
}

export default ProjectDetails;
