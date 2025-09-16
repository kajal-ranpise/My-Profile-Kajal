import React, { useEffect } from "react";
import AOS from "aos";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="main services-page">
      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>
        {/* End Section Title */}

        <div className="container">
          <div className="row gy-4">
            {/* Service Item 1 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item item-cyan position-relative">
                <div className="icon">
                  <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#f5f5f5"
                      d="M300,521.0C376.1,517.9,466.0,529.7,510.7,468.0C554.3,407.6,508.0,328.9,491.2,256.3C474.5,184.0,479.9,96.6,416.2,58.6C348.8,18.5,261.9,40.5,193.5,78.9C130.4,114.3,98.3,179.9,76.7,249.0C51.9,328.5,13.7,421.8,66.5,486.1C119.0,550.1,217.2,524.3,300,521.0"
                    />
                  </svg>
                  <i className="bi bi-activity"></i>
                </div>
                <h3>Nesciunt Mete</h3>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.
                </p>
              </div>
            </div>
            {/* End Service Item */}

            {/* Service Item 2 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item item-orange position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <h3>Eosle Commodi</h3>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
              </div>
            </div>
            {/* End Service Item */}

            {/* Service Item 3 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item item-teal position-relative">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <h3>Ledo Markt</h3>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
              </div>
            </div>
            {/* End Service Item */}

            {/* Service Item 4 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-item item-red position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles"></i>
                </div>
                <h3>Asperiores Commodit</h3>
                <p>
                  Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
              </div>
            </div>
            {/* End Service Item */}

            {/* Service Item 5 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-item item-indigo position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <h3>Velit Doloremque</h3>
                <p>
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
              </div>
            </div>
            {/* End Service Item */}

            {/* Service Item 6 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-item item-pink position-relative">
                <div className="icon">
                  <i className="bi bi-chat-square-text"></i>
                </div>
                <h3>Dolori Architecto</h3>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
