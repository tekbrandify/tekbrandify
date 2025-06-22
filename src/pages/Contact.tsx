
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  useEffect(() => {
    // Get selected service or plan from localStorage
    const service = localStorage.getItem('selectedService');
    const plan = localStorage.getItem('selectedPlan');
    
    if (service) {
      setSelectedService(service);
      localStorage.removeItem('selectedService'); // Clear after reading
    }
    
    if (plan) {
      setSelectedPlan(plan);
      localStorage.removeItem('selectedPlan'); // Clear after reading
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setSelectedService('');
      setSelectedPlan('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <Layout>
      <style>{`
        .contact-page {
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

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 2rem;
        }

        .contact-info h3 {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #333;
        }

        .contact-info p {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .contact-detail-icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.1rem;
        }

        .contact-detail-content strong {
          display: block;
          color: #333;
          margin-bottom: 0.2rem;
          font-size: 0.95rem;
        }

        .contact-detail-content span {
          color: #666;
          font-size: 0.9rem;
        }

        .contact-form {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .selected-info {
          background: #f0f4ff;
          border: 2px solid #667eea;
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .selected-info h4 {
          color: #667eea;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .selected-info p {
          color: #333;
          font-weight: 500;
          margin: 0;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .success-message {
          background: #10b981;
          color: white;
          text-align: center;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .office-hours {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 12px;
          margin-top: 1.5rem;
        }

        .office-hours h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #333;
        }

        .hours-list {
          list-style: none;
        }

        .hours-list li {
          display: flex;
          justify-content: space-between;
          padding: 0.4rem 0;
          color: #666;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.9rem;
        }

        .hours-list li:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .contact-form {
            padding: 2rem;
          }

          .container {
            padding: 0 1rem;
          }
        }
      `}</style>

      <div className="contact-page">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Ready to start your project? We'd love to hear from you</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Talk</h3>
              <p>Have a project in mind? We're here to help you bring your ideas to life. Get in touch and let's discuss how we can work together to create something amazing.</p>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">📧</div>
                  <div className="contact-detail-content">
                    <strong>Email</strong>
                    <span>hello@tekbrandify.com</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📞</div>
                  <div className="contact-detail-content">
                    <strong>Phone</strong>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-icon">📍</div>
                  <div className="contact-detail-content">
                    <strong>Location</strong>
                    <span>New York, NY</span>
                  </div>
                </div>
              </div>

              <div className="office-hours">
                <h4>Office Hours</h4>
                <ul className="hours-list">
                  <li><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></li>
                  <li><span>Saturday</span><span>10:00 AM - 4:00 PM</span></li>
                  <li><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
            </div>
            
            <div className="contact-form">
              {isSubmitted && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {(selectedService || selectedPlan) && (
                <div className="selected-info">
                  {selectedService && (
                    <>
                      <h4>Selected Service:</h4>
                      <p>{selectedService}</p>
                    </>
                  )}
                  {selectedPlan && (
                    <>
                      <h4>Selected Plan:</h4>
                      <p>{selectedPlan}</p>
                    </>
                  )}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
