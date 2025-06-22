
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Plans = () => {
  const handlePlanClick = (planName: string, planPrice: string) => {
    // Store the selected plan in localStorage to pass to contact page
    localStorage.setItem('selectedPlan', `${planName} - ${planPrice}`);
  };

  return (
    <Layout>
      <style>{`
        .plans-page {
          padding: 4rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .page-title {
          text-align: center;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          text-align: center;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #666;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .plan-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
          position: relative;
          cursor: pointer;
        }

        .plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .plan-card.featured {
          border: 2px solid #667eea;
          transform: scale(1.02);
        }

        .plan-card.featured::before {
          content: 'Most Popular';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .plan-name {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .plan-price {
          font-size: 2.5rem;
          font-weight: 700;
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .plan-price span {
          font-size: 0.9rem;
          color: #666;
        }

        .plan-description {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .plan-features {
          list-style: none;
          text-align: left;
          margin-bottom: 2rem;
        }

        .plan-features li {
          color: #666;
          margin-bottom: 0.8rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .plan-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1rem;
        }

        .plan-features li.unavailable {
          opacity: 0.5;
        }

        .plan-features li.unavailable::before {
          content: '✗';
          color: #ef4444;
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
          font-size: 0.95rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .cta-button.secondary {
          background: transparent;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .cta-button.secondary:hover {
          background: #667eea;
          color: white;
        }

        .custom-package {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          text-align: center;
          margin-top: 2rem;
        }

        .custom-package h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .custom-package p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .custom-package .cta-button {
          background: white;
          color: #667eea;
        }

        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: 1fr;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .plan-card.featured {
            transform: none;
          }

          .plan-card {
            padding: 2rem 1.5rem;
          }

          .container {
            padding: 0 1rem;
          }
        }
      `}</style>

      <div className="plans-page">
        <div className="container">
          <h1 className="page-title">Plans & Packages</h1>
          <p className="page-subtitle">Choose the perfect package that fits your business needs and budget</p>

          <div className="plans-grid">
            <div className="plan-card" onClick={() => handlePlanClick('Starter', '$2,999')}>
              <h3 className="plan-name">Starter</h3>
              <div className="plan-price">$2,999<span>/project</span></div>
              <p className="plan-description">Perfect for small businesses and startups looking to establish their online presence.</p>
              <ul className="plan-features">
                <li>5-page responsive website</li>
                <li>Mobile-first design</li>
                <li>Basic SEO optimization</li>
                <li>Contact form integration</li>
                <li>1 month of support</li>
                <li className="unavailable">E-commerce functionality</li>
                <li className="unavailable">Custom CMS</li>
                <li className="unavailable">Advanced analytics</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handlePlanClick('Starter', '$2,999')}>Get Started</Link>
            </div>

            <div className="plan-card featured" onClick={() => handlePlanClick('Professional', '$5,999')}>
              <h3 className="plan-name">Professional</h3>
              <div className="plan-price">$5,999<span>/project</span></div>
              <p className="plan-description">Ideal for growing businesses that need advanced features and functionality.</p>
              <ul className="plan-features">
                <li>10-page responsive website</li>
                <li>Custom UI/UX design</li>
                <li>Advanced SEO optimization</li>
                <li>CMS integration</li>
                <li>E-commerce functionality</li>
                <li>Payment gateway setup</li>
                <li>3 months of support</li>
                <li className="unavailable">Mobile app development</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handlePlanClick('Professional', '$5,999')}>Get Started</Link>
            </div>

            <div className="plan-card" onClick={() => handlePlanClick('Enterprise', '$12,999')}>
              <h3 className="plan-name">Enterprise</h3>
              <div className="plan-price">$12,999<span>/project</span></div>
              <p className="plan-description">Comprehensive solution for large businesses requiring complex functionality.</p>
              <ul className="plan-features">
                <li>Unlimited pages</li>
                <li>Custom web application</li>
                <li>Mobile app development</li>
                <li>Advanced integrations</li>
                <li>Custom dashboard</li>
                <li>Multi-user system</li>
                <li>6 months of support</li>
                <li>Priority support</li>
              </ul>
              <Link to="/contact" className="cta-button" onClick={() => handlePlanClick('Enterprise', '$12,999')}>Get Started</Link>
            </div>
          </div>

          <div className="custom-package">
            <h3>Need Something Custom?</h3>
            <p>Every business is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget.</p>
            <Link to="/contact" className="cta-button" onClick={() => handlePlanClick('Custom Package', 'Custom Quote')}>Request Custom Quote</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Plans;
