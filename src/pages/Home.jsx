// import React from 'react';
// import { useTranslation } from '../context/LanguageContext';
// import './homeStyles.css';

// const Home = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="home_unique_wrapper">
//       <section className="home_unique_banner">
//         <h2 className="home_unique_title">{t('welcome_message')}</h2>
//         <p className="home_unique_subtext">We provide quality healthcare with compassion.</p>
//       </section>

//       <section className="home_unique_carousel">
//         <div className="home_unique_slider">
//           <img src="https://via.placeholder.com/800x300?text=Hospital+1" alt="Hospital 1" />
//           <img src="https://via.placeholder.com/800x300?text=Hospital+2" alt="Hospital 2" />
//           <img src="https://via.placeholder.com/800x300?text=Hospital+3" alt="Hospital 3" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
// HomePage.js
import React from "react";
import "./homeStyles.css";
import { Carousel } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="home_unique_wrapper">
      {/* WhatsApp Button */}
      <a href="https://wa.me/917013718111" className="float1" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-whatsapp my-float"></i>
      </a>

      {/* Carousel */}
      <section className="home_unique_carousel">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="/assets/carousel1.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/assets/carousel2.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/assets/carousel3.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Features */}
      <section className="feature-area section-padding">
        <div className="container">
          <div className="row">
            {/* Repeat this block for each feature */}
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <img src="/assets/feature1.png" alt="feature" />
                <h3>Qualified Doctors</h3>
                <p>We have highly qualified doctors for various departments.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <img src="/assets/feature2.png" alt="feature" />
                <h3>Advanced Equipment</h3>
                <p>Our hospital is equipped with the latest medical technologies.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <img src="/assets/feature3.png" alt="feature" />
                <h3>Emergency Services</h3>
                <p>24/7 emergency services with ambulance and ICU support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img className="welcome-img" src="/assets/hospital-building.jpg" alt="hospital" />
            </div>
            <div className="col-md-6">
              <div className="welcome-text">
                <h1>Welcome to Alavi Hospitals</h1>
                <p>
                  Alavi Hospitals provides compassionate healthcare with top-tier medical professionals and state-of-the-art equipment. We are committed to your health and well-being.
                </p>
                <a href="/services" className="template-btn mt-3">Explore Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="department-area section-padding">
        <div className="container">
          <div className="text-center">
            <h2>Our Departments</h2>
          </div>
          <div className="department-slider">
            {/* Repeat this block for each department */}
            <div className="single-slide">
              <div className="slide-img">
                <img src="/assets/department1.jpg" alt="department" />
              </div>
              <div className="single-department">
                <h3>Cardiology</h3>
                <p>Advanced cardiac care for heart-related conditions.</p>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src="/assets/department2.jpg" alt="department" />
              </div>
              <div className="single-department">
                <h3>Neurology</h3>
                <p>Specialized care for neurological disorders and treatments.</p>
              </div>
            </div>
            <div className="single-slide">
              <div className="slide-img">
                <img src="/assets/department3.jpg" alt="department" />
              </div>
              <div className="single-department">
                <h3>Orthopedics</h3>
                <p>Expert orthopedic surgeons for bones and joints health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
