
import Layout from '../components/Layout';

const Portfolio = () => {
  return (
    <Layout>
      <style>{`
        .portfolio-page {
          padding: 5rem 0;
          background: #f8fafc;
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

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .portfolio-item {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .portfolio-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .portfolio-image {
          height: 250px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          position: relative;
          overflow: hidden;
        }

        .portfolio-content {
          padding: 2rem;
        }

        .portfolio-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .portfolio-content p {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .portfolio-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          background: #e5e7eb;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .project-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #764ba2;
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .portfolio-content {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="portfolio-page">
        <div className="container">
          <h1 className="page-title">Our Work</h1>
          <p className="page-subtitle">A showcase of our recent projects and creative solutions</p>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">🏢</div>
              <div className="portfolio-content">
                <h3>TechCorp Enterprise</h3>
                <p>Complete digital transformation for a leading technology company, including website redesign and mobile application development.</p>
                <div className="portfolio-tags">
                  <span className="tag">Web Design</span>
                  <span className="tag">Development</span>
                  <span className="tag">Mobile App</span>
                </div>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">🛒</div>
              <div className="portfolio-content">
                <h3>StyleHub E-commerce</h3>
                <p>Full-featured online fashion store with advanced filtering, secure payment processing, and inventory management system.</p>
                <div className="portfolio-tags">
                  <span className="tag">E-commerce</span>
                  <span className="tag">Payment Gateway</span>
                  <span className="tag">Inventory</span>
                </div>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">📱</div>
              <div className="portfolio-content">
                <h3>FitTracker Mobile App</h3>
                <p>Cross-platform fitness tracking application with real-time analytics, social features, and wearable device integration.</p>
                <div className="portfolio-tags">
                  <span className="tag">Mobile App</span>
                  <span className="tag">Analytics</span>
                  <span className="tag">IoT Integration</span>
                </div>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">🎓</div>
              <div className="portfolio-content">
                <h3>EduPlatform Learning System</h3>
                <p>Comprehensive online learning management system with video streaming, progress tracking, and certification features.</p>
                <div className="portfolio-tags">
                  <span className="tag">LMS</span>
                  <span className="tag">Video Streaming</span>
                  <span className="tag">Certification</span>
                </div>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">🏥</div>
              <div className="portfolio-content">
                <h3>HealthCare Portal</h3>
                <p>Patient management system with appointment scheduling, medical records, and telemedicine integration for healthcare providers.</p>
                <div className="portfolio-tags">
                  <span className="tag">Healthcare</span>
                  <span className="tag">HIPAA Compliant</span>
                  <span className="tag">Telemedicine</span>
                </div>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">🏦</div>
              <div className="portfolio-content">
                <h3>FinanceTracker Dashboard</h3>
                <p>Advanced financial analytics dashboard with real-time data visualization, reporting, and portfolio management features.</p>
                <div className="portfolio-tags">
                  <span className="tag">FinTech</span>
                  <span className="tag">Analytics</span>
                  <span className="tag">Data Visualization</span>
                </div>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
