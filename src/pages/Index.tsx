
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <style>{`
        /* Enhanced Hero Section */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,0 1000,1000"/></svg>');
          background-size: cover;
          animation: float 6s ease-in-out infinite;
        }

        .hero-content {
          max-width: 900px;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          animation: slideInUp 1s ease 0.2s both;
          line-height: 1.2;
        }

        .hero p {
          font-size: clamp(1rem, 2vw, 1.3rem);
          margin-bottom: 2.5rem;
          opacity: 0.95;
          animation: slideInUp 1s ease 0.4s both;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: slideInUp 1s ease 0.6s both;
        }

        .btn-primary {
          background: white;
          color: #667eea;
          padding: 1.2rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1.1rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 1.2rem 2.5rem;
          border: 2px solid white;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1.1rem;
        }

        .btn-primary:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
        }

        /* Floating elements */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
          width: 60px;
          height: 60px;
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }

        /* Enhanced Features Section */
        .features {
          padding: 6rem 0;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          text-align: center;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #666;
          margin-bottom: 4rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }

        .feature-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          color: white;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .feature-card h3 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .feature-card p {
          color: #666;
          line-height: 1.7;
          font-size: 1rem;
        }

        /* Stats Section */
        .stats-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .stat-item {
          padding: 1rem;
        }

        .stat-item h4 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 0.5rem;
          animation: countUp 2s ease;
        }

        .stat-item p {
          font-size: 1.2rem;
          opacity: 0.9;
          font-weight: 500;
        }

        /* Enhanced CTA Section */
        .cta-section {
          padding: 6rem 0;
          background: #1f2937;
          color: white;
          text-align: center;
          position: relative;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle fill="rgba(102,126,234,0.1)" cx="200" cy="200" r="100"/><circle fill="rgba(118,75,162,0.1)" cx="800" cy="600" r="150"/></svg>');
          background-size: cover;
        }

        .cta-section h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .cta-section p {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          margin-bottom: 3rem;
          opacity: 0.9;
          position: relative;
          z-index: 2;
        }

        /* Animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Enhanced Responsive Design */
        @media (max-width: 768px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 280px;
            padding: 1rem 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .feature-card {
            padding: 2rem 1.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .floating-elements {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .hero-content {
            padding: 0 1rem;
          }

          .features-grid {
            gap: 1.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <section className="hero">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <div className="hero-content">
          <h1>Transform Your Digital Presence with TekBrandify</h1>
          <p>We create stunning, responsive digital experiences that captivate your audience and drive exceptional results. From concept to launch, we're your trusted partner in digital success.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Start Your Journey</Link>
            <Link to="/portfolio" className="btn-secondary">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose TekBrandify?</h2>
          <p className="section-subtitle">We deliver comprehensive digital solutions that set your brand apart in today's competitive landscape</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Creative Excellence</h3>
              <p>Award-winning designs that capture your brand essence and create lasting impressions with your target audience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast Performance</h3>
              <p>Optimized websites with blazing-fast load times that keep your visitors engaged and improve your search rankings.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Growth-Focused Strategy</h3>
              <p>Strategic digital solutions designed to scale with your business and drive measurable, long-term results.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security and 99.9% uptime guarantee to keep your business running smoothly 24/7.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile-First Design</h3>
              <p>Responsive designs that look and perform perfectly on all devices, from smartphones to desktops.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Dedicated Support</h3>
              <p>24/7 expert support and ongoing maintenance to ensure your digital presence always stays ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title" style={{color: 'white', marginBottom: '3rem'}}>Our Track Record</h2>
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
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Brand?</h2>
          <p>Join hundreds of satisfied clients who have elevated their business with TekBrandify's expert digital solutions.</p>
          <div className="hero-buttons">
            <Link to="/plans" className="btn-primary">View Our Plans</Link>
            <Link to="/contact" className="btn-secondary">Get Free Consultation</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
