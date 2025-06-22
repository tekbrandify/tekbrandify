
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <style>{`
        .about-page {
          padding: 5rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-title {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          text-align: center;
          font-size: 1.25rem;
          color: #666;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        .about-text h3 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .about-text p {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .about-image {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          height: 400px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          position: relative;
          overflow: hidden;
        }

        .about-image::before {
          content: '🚀';
          font-size: 5rem;
          opacity: 0.8;
        }

        .stats-section {
          background: #f8fafc;
          padding: 4rem 0;
          margin: 4rem 0;
          border-radius: 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          text-align: center;
        }

        .stat-item h4 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: #666;
          font-weight: 500;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="about-page">
        <div className="container">
          <h1 className="page-title">About TekBrandify</h1>
          <p className="page-subtitle">We're passionate about creating digital solutions that make a difference</p>

          <div className="about-content">
            <div className="about-text">
              <h3>Innovation Meets Excellence</h3>
              <p>With over a decade of experience in web development and digital design, we've helped hundreds of businesses transform their online presence. Our team combines creative vision with technical expertise to deliver solutions that not only look amazing but perform exceptionally.</p>
              <p>We believe in the power of collaboration and work closely with our clients to understand their unique needs and goals. Every project is an opportunity to push boundaries and create something truly remarkable.</p>
              <Link to="/contact" className="cta-button">Work With Us</Link>
            </div>
            <div className="about-image">
              {/* Decorative content will be added via CSS */}
            </div>
          </div>

          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <h4>500+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>98%</h4>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>24/7</h4>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
