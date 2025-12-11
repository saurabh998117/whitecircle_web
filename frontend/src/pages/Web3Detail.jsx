import React from "react";
import { Link, useParams } from "react-router-dom";
import { web3ServicesDetails } from "../data/web3ServicesData";

const Web3Detail = () => {
  const { slug } = useParams();
  const service = web3ServicesDetails[slug];

  if (!service) {
    return (
      <section className="section" style={{ paddingTop: 100, textAlign: "center" }}>
        <h2>Service Not Found</h2>
        <Link to="/web3" style={{ color: "#1c45ff", fontSize: 18 }}>
          Back to Web3 Services
        </Link>
      </section>
    );
  }

  return (
    <section className="section" style={{ paddingTop: 100 }}>
      <div className="container">
        <Link to="/web3" style={{ color: "#1c45ff", fontSize: 16 }}>← Back to Web3 Services</Link>

        <h1 className="section-title" style={{ marginTop: 10 }}>{service.title}</h1>
        <p className="section-subtitle">{service.overview}</p>

        {/* WHAT WE DELIVER */}
        <h2 className="mt-2">🔧 What We Deliver</h2>
        <ul className="list">
          {service.deliverables.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* PROCESS */}
        <h2 className="mt-2">⚙️ Our Process</h2>
        <ol className="list">
          {service.process.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        {/* TECHNOLOGIES */}
        <h2 className="mt-2">🧠 Technologies Used</h2>
        <div className="tech-grid">
          {service.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* BENEFITS */}
        <h2 className="mt-2">🚀 Benefits</h2>
        <ul className="list">
          {service.benefits.map((ben, index) => (
            <li key={index}>{ben}</li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default Web3Detail;
