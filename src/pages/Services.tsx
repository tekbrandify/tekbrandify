
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Services = () => {
  const handleServiceClick = (serviceName: string) => {
    // Store the selected service in localStorage to pass to contact page
    localStorage.setItem('selectedService', serviceName);
  };

  return (
    <Layout>
      <style>{`
        .services-page {
          padding: 2rem 0 5rem;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-header {
          text-align: center;
          margin-bottom: 4rem;
          padding-top: 2rem;
        }

        .page-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: slideInUp 1s ease;
        }

        .page-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          animation: slideInUp 1s ease 0.2s both;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin: 3rem 0;
        }

        .service-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 1px solid #f0f0f0;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: left 0.4s ease;
        }

        .service-card:hover::before {
          left: 0;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          color: white;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-card h3 {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .service-card p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .service-features {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .service-features li {
          padding: 0.4rem 0;
          color: #555;
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1rem;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          width: 100%;
          text-align: center;
          font-size: 0.95rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .process-section {
          background: #f8fafc;
          padding: 4rem 0;
          margin: 4rem 0;
          border-radius: 25px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2.5rem;
          margin-top: 2.5rem;
        }

        .process-step {
          text-align: center;
          padding: 1.5rem 1rem;
        }

        .process-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: bold;
          color: white;
          margin: 0 auto 1rem;
          animation: pulse 2s infinite;
        }

        .process-step h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #333;
        }

        .process-step p {
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .service-card {
            padding: 2rem 1.5rem;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .container {
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .page-header {
            margin-bottom: 3rem;
          }
          
          .services-grid {
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="services-page">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Comprehensive digital solutions designed to elevate your brand and drive meaningful results in today's competitive marketplace.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card" onClick={() => handleServiceClick('Web Design & Development')}>
              <div className="service-icon">🎨</div>
              <h3>Web Design & Development</h3>
              <p>Custom, responsive websites that combine stunning visuals with exceptional user experience and cutting-edge functionality.</p>
              <ul className="service-features">
                <li>Responsive Mobile-First Design</li>
                <li>Custom UI/UX Development</li>
                <li>Performance Optimization</li>
                <li>SEO-Friendly Structure</li>
                <li>Cross-Browser Compatibility</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handleServiceClick('Web Design & Development')}>Get Started</Link>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('Digital Marketing Strategy')}>
              <div className="service-icon">🚀</div>
              <h3>Digital Marketing Strategy</h3>
              <p>Data-driven marketing campaigns that increase your online visibility, engage your audience, and drive conversions.</p>
              <ul className="service-features">
                <li>SEO & Content Strategy</li>
                <li>Social Media Management</li>
                <li>PPC Campaign Management</li>
                <li>Analytics & Reporting</li>
                <li>Brand Positioning</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handleServiceClick('Digital Marketing Strategy')}>Learn More</Link>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('Mobile App Development')}>
              <div className="service-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform mobile applications that deliver seamless user experiences across all devices.</p>
              <ul className="service-features">
                <li>iOS & Android Development</li>
                <li>Cross-Platform Solutions</li>
                <li>App Store Optimization</li>
                <li>Backend Integration</li>
                <li>Ongoing Maintenance</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handleServiceClick('Mobile App Development')}>Explore Options</Link>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('E-Commerce Solutions')}>
              <div className="service-icon">🛒</div>
              <h3>E-Commerce Solutions</h3>
              <p>Complete online store development with secure payment processing, inventory management, and sales optimization.</p>
              <ul className="service-features">
                <li>Custom E-Commerce Platforms</li>
                <li>Payment Gateway Integration</li>
                <li>Inventory Management</li>
                <li>Order Processing Systems</li>
                <li>Sales Analytics</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handleServiceClick('E-Commerce Solutions')}>Build Your Store</Link>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('Cloud & Infrastructure')}>
              <div className="service-icon">☁️</div>
              <h3>Cloud & Infrastructure</h3>
              <p>Scalable cloud solutions and infrastructure management to ensure your applications run smoothly and securely.</p>
              <ul className="service-features">
                <li>Cloud Migration Services</li>
                <li>Infrastructure Setup</li>
                <li>Security Implementation</li>
                <li>Backup & Recovery</li>
                <li>24/7 Monitoring</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handleServiceClick('Cloud & Infrastructure')}>Secure Your Future</Link>
            </div>

            <div className="service-card" onClick={() => handleServiceClick('Consulting & Strategy')}>
              <div className="service-icon">🤝</div>
              <h3>Consulting & Strategy</h3>
              <p>Expert guidance and strategic planning to help you make informed decisions about your digital transformation journey.</p>
              <ul className="service-features">
                <li>Digital Transformation</li>
                <li>Technology Consulting</li>
                <li>Project Management</li>
                <li>Training & Support</li>
                <li>Strategic Planning</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handleServiceClick('Consulting & Strategy')}>Get Consultation</Link>
            </div>
          </div>

          <div className="process-section">
            <div className="container">
              <h2 className="page-title" style={{marginBottom: '1rem'}}>Our Process</h2>
              <p className="page-subtitle" style={{marginBottom: '2.5rem'}}>A proven methodology that ensures successful project delivery every time</p>
              
              <div className="process-grid">
                <div className="process-step">
                  <div className="process-number">1</div>
                  <h4>Discovery & Planning</h4>
                  <p>We understand your goals, analyze your requirements, and create a comprehensive project roadmap.</p>
                </div>
                
                <div className="process-step">
                  <div className="process-number">2</div>
                  <h4>Design & Prototyping</h4>
                  <p>Creating wireframes, mockups, and interactive prototypes to visualize your project before development.</p>
                </div>
                
                <div className="process-step">
                  <div className="process-number">3</div>
                  <h4>Development & Testing</h4>
                  <p>Building your solution with clean, scalable code while conducting thorough testing at every stage.</p>
                </div>
                
                <div className="process-step">
                  <div className="process-number">4</div>
                  <h4>Launch & Optimization</h4>
                  <p>Deploying your project and providing ongoing support, monitoring, and optimization for peak performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
