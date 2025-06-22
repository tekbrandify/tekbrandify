
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Teams = () => {
  return (
    <Layout>
      <style>{`
        .teams-page {
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

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .team-member {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .team-member:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .member-photo {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 3rem;
          color: white;
          overflow: hidden;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .member-role {
          color: #667eea;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .member-bio {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .member-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .skill-tag {
          background: #e5e7eb;
          color: #374151;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .social-link {
          width: 35px;
          height: 35px;
          background: #f3f4f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-2px);
        }

        .join-team {
          background: #f8fafc;
          padding: 4rem 2rem;
          border-radius: 20px;
          text-align: center;
          margin-top: 3rem;
        }

        .join-team h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .join-team p {
          color: #666;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
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
          .team-grid {
            grid-template-columns: 1fr;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .team-member {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="teams-page">
        <div className="container">
          <h1 className="page-title">Meet Our Team</h1>
          <p className="page-subtitle">The talented professionals who bring your digital vision to life</p>

          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">👨‍💻</div>
              <h3 className="member-name">Alex Rodriguez</h3>
              <div className="member-role">Lead Developer & Founder</div>
              <p className="member-bio">With over 10 years of experience in full-stack development, Alex leads our technical team and ensures every project meets the highest standards.</p>
              <div className="member-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">TypeScript</span>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">in</a>
                <a href="#" className="social-link">gh</a>
                <a href="#" className="social-link">tw</a>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">👩‍🎨</div>
              <h3 className="member-name">Sarah Chen</h3>
              <div className="member-role">UI/UX Designer</div>
              <p className="member-bio">Sarah brings creativity and user-centered design thinking to every project, ensuring beautiful and intuitive user experiences.</p>
              <div className="member-skills">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Adobe XD</span>
                <span className="skill-tag">Prototyping</span>
                <span className="skill-tag">User Research</span>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">dr</a>
                <a href="#" className="social-link">be</a>
                <a href="#" className="social-link">in</a>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">👨‍💼</div>
              <h3 className="member-name">Michael Thompson</h3>
              <div className="member-role">Project Manager</div>
              <p className="member-bio">Michael ensures smooth project delivery and excellent client communication, keeping everything on track and on budget.</p>
              <div className="member-skills">
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Scrum</span>
                <span className="skill-tag">Client Relations</span>
                <span className="skill-tag">Strategy</span>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">in</a>
                <a href="#" className="social-link">tw</a>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">👩‍💻</div>
              <h3 className="member-name">Emily Watson</h3>
              <div className="member-role">Frontend Developer</div>
              <p className="member-bio">Emily specializes in creating responsive, performant web applications with modern frameworks and cutting-edge technologies.</p>
              <div className="member-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Animation</span>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">gh</a>
                <a href="#" className="social-link">cd</a>
                <a href="#" className="social-link">in</a>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">👨‍🔧</div>
              <h3 className="member-name">David Kumar</h3>
              <div className="member-role">Backend Developer</div>
              <p className="member-bio">David builds robust, scalable backend systems and APIs that power our applications with security and performance in mind.</p>
              <div className="member-skills">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Docker</span>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">gh</a>
                <a href="#" className="social-link">so</a>
                <a href="#" className="social-link">in</a>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo">👩‍📊</div>
              <h3 className="member-name">Lisa Martinez</h3>
              <div className="member-role">Digital Marketing Specialist</div>
              <p className="member-bio">Lisa helps our clients maximize their online presence through strategic SEO, analytics, and digital marketing campaigns.</p>
              <div className="member-skills">
                <span className="skill-tag">SEO</span>
                <span className="skill-tag">Analytics</span>
                <span className="skill-tag">PPC</span>
                <span className="skill-tag">Content Strategy</span>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">in</a>
                <a href="#" className="social-link">tw</a>
                <a href="#" className="social-link">ig</a>
              </div>
            </div>
          </div>

          <div className="join-team">
            <h3>Want to Join Our Team?</h3>
            <p>We're always looking for talented individuals who share our passion for creating exceptional digital experiences. Check out our open positions and become part of the TekBrandify family.</p>
            <Link to="/contact" className="cta-button">View Open Positions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Teams;
