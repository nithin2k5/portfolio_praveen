import React, { useEffect } from 'react';

function About() {
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
    <section className="about-section">
      <h2>About <span className="highlight">me</span></h2>
      <p className="about-text animate-on-scroll">
        Hello! I'm Lakshmi Praveen, a passionate BA student with a deep fascination for history. 
        I believe that understanding our past is crucial for shaping our future. 
        Through my studies, I explore various historical periods, cultural developments, 
        and societal transformations that have shaped our world today.
        <span className="read-more">Read more</span>
      </p>
    </section>
  );
}

export default About; 