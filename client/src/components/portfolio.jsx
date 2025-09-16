import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import masonryPortfolio1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import masonryPortfolio2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import masonryPortfolio3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";

function Portfolio() {
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
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          {/* Filters */}
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
          </ul>

          {/* Portfolio Grid */}
          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <img src={masonryPortfolio1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href={masonryPortfolio1}
                  title="App 1"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="/portfolio-details" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src={masonryPortfolio2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href={masonryPortfolio2}
                  title="Product 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="/portfolio-details" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src={masonryPortfolio3} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit</p>
                <a
                  href={masonryPortfolio3}
                  title="Branding 1"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in"></i>
                </a>
                <a href="/portfolio-details" title="More Details" className="details-link">
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}



export default Portfolio;
