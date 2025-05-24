// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { FaBalanceScale, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">Empowering Women Through Legal Knowledge</h1>
          <p className="hero-description">
            Understand your rights, take action with confidence, and connect with resources that support your journey.
          </p>
          <Link to="/rights-explorer" className="btn btn-primary">
            Explore Your Rights
          </Link>
        </div>
      </section>

      {/* Complaint Procedure Section */}
      <section className="section complaint-procedure">
        <div className="container">
          <h2 className="section-title">How to File a Legal Complaint</h2>

          <div className="rights-grid">
            <div className="card">
              <div className="card-header">
                <FaBalanceScale className="card-icon" />
                <h3>1. Identify the Issue</h3>
              </div>
              <p>Determine the nature of your complaint and gather relevant information.</p>
            </div>

            <div className="card">
              <div className="card-header">
                <FaBalanceScale className="card-icon" />
                <h3>2. Gather Evidence</h3>
              </div>
              <p>Collect any documents, photos, or other evidence that supports your complaint.</p>
            </div>

            <div className="card">
              <div className="card-header">
                <FaPhoneAlt className="card-icon" />
                <h3>3. Contact Legal Aid</h3>
              </div>
              <p>Reach out to a legal aid organization for guidance on your specific situation.</p>
            </div>

            <div className="card">
              <div className="card-header">
                <FaBalanceScale className="card-icon" />
                <h3>4. Fill Out the Form</h3>
              </div>
              <p>Complete the necessary forms required for filing your complaint.</p>
            </div>

            <div className="card">
              <div className="card-header">
                <FaBalanceScale className="card-icon" />
                <h3>5. Submit Your Complaint</h3>
              </div>
              <p>File your complaint with the appropriate authority or organization.</p>
            </div>

            <div className="card">
              <div className="card-header">
                <FaPhoneAlt className="card-icon" />
                <h3>6. Follow Up</h3>
              </div>
              <p>Keep track of your complaint status and follow up as necessary.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a
              href="https://ncwapps.nic.in/onlinecomplaintsv2/"
              className="btn btn-emergency"
              target="_blank"
              rel="noopener noreferrer"
            >
              File a Complaint
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
