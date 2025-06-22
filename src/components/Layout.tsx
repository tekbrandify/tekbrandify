
import { Link } from 'react-router-dom';
import ChatWidget from './ChatWidget';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="modern-website">
      <style>{`
        /* Reset and Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .modern-website {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          overflow-x: hidden;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .dark .modern-website {
          color: #e5e7eb;
          background-color: #111827;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .dark .navbar {
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
          animation: fadeIn 1s ease;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .nav-menu a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .dark .nav-menu a {
          color: #e5e7eb;
        }

        .nav-menu a:hover {
          color: #667eea;
          transform: translateY(-2px);
        }

        .nav-menu a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .nav-menu a:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          animation: pulse 2s infinite;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          color: #333;
        }

        .dark .mobile-menu-btn {
          color: #e5e7eb;
        }

        .mobile-menu-btn:hover {
          transform: rotate(90deg);
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 1rem;
          border-radius: 0 0 20px 20px;
          animation: slideDown 0.3s ease;
        }

        .dark .mobile-menu {
          background: #1f2937;
        }

        .mobile-menu-open {
          display: block !important;
        }

        .mobile-menu a {
          display: block;
          padding: 1rem;
          text-decoration: none;
          color: #333;
          border-bottom: 1px solid #eee;
          transition: all 0.3s ease;
        }

        .dark .mobile-menu a {
          color: #e5e7eb;
          border-bottom-color: #374151;
        }

        .mobile-menu a:hover {
          background: #f8fafc;
          padding-left: 1.5rem;
        }

        .dark .mobile-menu a:hover {
          background: #374151;
        }

        /* Main Content */
        .main-content {
          padding-top: 80px;
          min-height: 100vh;
        }

        /* Footer */
        .footer {
          background: #1f2937;
          color: white;
          padding: 3rem 0 1rem;
          margin-top: 4rem;
        }

        .dark .footer {
          background: #0f172a;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-section p {
          color: #9ca3af;
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: #374151;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .footer-links {
          list-style: none;
        }

        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          display: block;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 10px;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1rem;
          text-align: center;
          color: #9ca3af;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); }
          50% { box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Enhanced Responsive Design */
        @media (max-width: 1024px) {
          .nav-container {
            padding: 0 1rem;
          }
          
          .nav-menu {
            gap: 1rem;
          }
          
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-container {
            padding: 0 1rem;
          }
          
          .logo {
            font-size: 1.5rem;
          }
          
          .cta-button {
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          
          .logo {
            font-size: 1.3rem;
          }
          
          .mobile-menu {
            position: relative;
            top: 0;
            margin-top: 1rem;
            border-radius: 15px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">TekBrandify</Link>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/plans">Plans & Packages</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="nav-actions">
            <ThemeToggle />
            <Link to="/contact" className="cta-button">Get Started</Link>
          </div>
          <button className="mobile-menu-btn" onClick={() => {
            const menu = document.querySelector('.mobile-menu');
            menu?.classList.toggle('mobile-menu-open');
          }}>☰</button>
          <div className="mobile-menu">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/plans">Plans & Packages</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TekBrandify</h3>
            <p>Creating exceptional digital experiences that drive results and inspire audiences worldwide.</p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">📷</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Web Design</Link></li>
              <li><Link to="/services">Development</Link></li>
              <li><Link to="/services">Digital Strategy</Link></li>
              <li><Link to="/services">Consulting</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/teams">Teams</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 TekBrandify. All rights reserved. Built with passion and precision.</p>
        </div>
      </footer>

      <script>{`
        // Scroll animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.addEventListener('DOMContentLoaded', () => {
          const animatedElements = document.querySelectorAll('.animate-on-scroll');
          animatedElements.forEach(el => observer.observe(el));
        });
      `}</script>
    </div>
  );
};

export default Layout;
