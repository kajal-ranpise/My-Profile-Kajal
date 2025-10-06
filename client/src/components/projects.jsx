import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import masonryPortfolio1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import masonryPortfolio2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import masonryPortfolio3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";

const portfolioFilters = [
  { label: "All", filter: "*" },
  { label: "React", filter: ".filter-react" },
  { label: "Node", filter: ".filter-node" },
   { label: "PHP", filter: ".filter-php" },
  { label: "MySql", filter: ".filter-mysql" },
  { label: "MongoDB", filter: ".filter-mongodb" }
];

const portfolioItems = [
  {
    img: masonryPortfolio1,
    category: "filter-react",
    title: "App 1",
    desc: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-app",
  },
  {
    img: masonryPortfolio1,
    category: "filter-mysql",
    title: "App 1",
    desc: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-app",
  },
  {
    img: masonryPortfolio2,
    category: "filter-node",
    title: "Product 1",
    desc: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-product",
  },
  {
    img: masonryPortfolio3,
    category: "filter-php",
    title: "Branding 1",
    desc: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-branding",
  },
  {
    img: masonryPortfolio3,
    category: "filter-mysql",
    title: "Branding 1",
    desc: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-branding",
  },
  {
    img: masonryPortfolio3,
    category: "filter-mongodb",
    title: "Branding 1",
    desc: "Lorem ipsum, dolor sit",
    gallery: "portfolio-gallery-branding",
  },
];

function Projects() {
  useEffect(() => {
    // Import isotope dynamically because it relies on window
    const loadIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;
      const imagesLoaded = (await import("imagesloaded")).default;

      let grid = document.querySelector(".isotope-container");
      if (grid) {
        let iso = new Isotope(grid, {
          itemSelector: ".portfolio-item",
          layoutMode: "masonry",
        });

        imagesLoaded(grid, () => {
          iso.layout();
        });

        // Filtering
        let filters = document.querySelectorAll(".portfolio-filters li");
        filters.forEach((filter) => {
          filter.addEventListener("click", function () {
            filters.forEach((el) => el.classList.remove("filter-active"));
            this.classList.add("filter-active");
            iso.arrange({ filter: this.getAttribute("data-filter") });
          });
        });
      }
    };

    loadIsotope();
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>A showcase of ideas turned into reality.</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          {/* Filters */}
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            {portfolioFilters.map((filter, idx) => (
              <li
                key={filter.filter}
                data-filter={filter.filter}
                className={idx === 0 ? "filter-active" : ""}
              >
                {filter.label}
              </li>
            ))}
          </ul>

          {/* Portfolio Grid */}
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
              >
                <img src={item.img} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <a
                    href={item.img}
                    title={item.title}
                    data-gallery={item.gallery}
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="/project-details" title="More Details" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
