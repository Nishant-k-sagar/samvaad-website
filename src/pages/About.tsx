import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Samvaad</h1>
          <p>Learn about our mission, vision, and the people behind Samvaad Cultural Club</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>Samvaad was founded in 2018 by a group of passionate individuals who wanted to create a platform for cultural exchange and artistic expression. The name "Samvaad" means "dialogue" in Sanskrit, reflecting our commitment to fostering meaningful conversations through arts and culture.</p>
            <p>What started as small gatherings has now grown into a vibrant community of artists, writers, musicians, and culture enthusiasts from diverse backgrounds.</p>
          </div>
          
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>At Samvaad, our mission is to:</p>
            <ul>
              <li>Promote cultural awareness and appreciation</li>
              <li>Provide a platform for artistic expression</li>
              <li>Foster community connections through shared cultural experiences</li>
              <li>Preserve and celebrate diverse cultural traditions</li>
              <li>Support emerging artists and cultural practitioners</li>
            </ul>
          </div>
          
          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Inclusivity</h3>
                <p>We welcome people from all backgrounds and celebrate diversity.</p>
              </div>
              <div className="value-card">
                <h3>Creativity</h3>
                <p>We encourage innovative expression and artistic exploration.</p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>We build meaningful connections through shared experiences.</p>
              </div>
              <div className="value-card">
                <h3>Respect</h3>
                <p>We honor diverse traditions and perspectives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
