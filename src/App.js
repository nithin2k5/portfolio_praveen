import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App dark-theme">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h3 className="hero-subtitle">Welcome to my portfolio</h3>
              <h1>LAKSHMI <span className="highlight">PRAVEEN</span></h1>
              <p className="hero-description">
                BA Student | History Enthusiast | Exploring the Past to Understand the Present
              </p>
              <div className="cta-buttons">
                <button className="btn primary">View Profile</button>
                <button className="btn secondary">Download CV</button>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="background-elements">
              {/* Add decorative elements here */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About <span className="highlight">me</span></h2>
        <p className="about-text animate-on-scroll">
          Hello! I'm Lakshmi Praveen, a passionate BA student with a deep fascination for history. 
          I believe that understanding our past is crucial for shaping our future. 
          Through my studies, I explore various historical periods, cultural developments, 
          and societal transformations that have shaped our world today.
         
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <h2>Skills & <span className="highlight">Interests</span></h2>
        <div className="portfolio-grid">
          <div className="portfolio-item languages">
            <h3>Languages Known</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-info">
                  <span>English</span>
                  <span>90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Tamil</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Telugu</span>
                  <span>75%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Hindi</span>
                  <span>70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="portfolio-item hobbies">
            <h3>My Hobbies</h3>
            <ul>
              <li>Reading</li>
              <li>Gaming</li>
              <li>Coding</li>
              <li>Music</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Got a project in <span className="highlight">mind?</span></h2>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
          </div>
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" style={{marginTop: '2rem'}} className="btn primary">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#reddit">Reddit</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
