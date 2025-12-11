import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import ServiceCard from "../components/ServiceCard";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axiosClient.get("/services").then((res) => {
      setServices(res.data.slice(0, 6));
    });
    axiosClient.get("/portfolio").then((res) => {
      setPortfolio(res.data.slice(0, 3));
    });
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div
          className="container hero-inner">
          
          <div>
            <h1 className="hero-title">
              Enterprise IT &amp; Digital Solutions for{" "}
              <span className="hero-highlight">Modern Businesses</span>
            </h1>
            <p className="hero-text">
              Whitecircle Group delivers end-to-end technology services –
              software, web, mobile, cloud and Web3 – to help you build
              resilient, scalable digital products.
            </p>
            <div className="hero-actions">
              <Link to="/contact">
                <button className="btn btn-primary">
                  Schedule a Free Consultation
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="btn btn-secondary">View Case Studies</button>
              </Link>
            </div>
          </div>
          <div className="partner-card">
            <h3 >Your Technology Partner</h3>
            <p >
              A single team to handle consulting, development, deployment and
              ongoing support.
            </p>
            <ul >
              <li>Full-stack product engineering</li>
              <li>Secure, cloud-ready architecture</li>
              <li>Agile delivery with clear communication</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
  <div className="container">
    <div className="services-snapshot-header">
      <div>
        <h2 className="section-title">Services Snapshot</h2>
        <p className="section-subtitle">
          Expert IT, Digital, Cloud, Analytics and Web3 capabilities.
        </p>
      </div>
      <Link to="/services" className="btn btn-secondary">
        View All Services
      </Link>
    </div>

    <div className="services-grid">
      {/* Example cards – you can map from servicesDetails instead */}
      <Link to="/services/it-services" className="service-card">
        <h3 className="service-card-title">IT Services</h3>
        <p className="service-card-text">
          Secure and scalable infrastructure, monitoring and support for enterprise workloads.
        </p>
        <span className="service-card-link">View details →</span>
      </Link>

      <Link to="/services/software-development" className="service-card">
        <h3 className="service-card-title">Software Development</h3>
        <p className="service-card-text">
          Custom-built platforms, APIs and integrations engineered for long-term growth.
        </p>
        <span className="service-card-link">View details →</span>
      </Link>

      <Link to="/services/cloud-hosting" className="service-card">
        <h3 className="service-card-title">Cloud & Hosting</h3>
        <p className="service-card-text">
          Cloud migration, DevOps and managed hosting with strong security controls.
        </p>
        <span className="service-card-link">View details →</span>
      </Link>
    </div>
  </div>
</section>


      {/* Portfolio highlights */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Portfolio Highlights</h2>
          <p className="section-subtitle">
            A quick view of some recent implementations and success stories.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 18
            }}
          >
            {portfolio.map((p) => (
              <div key={p._id} className="card">
                <h3 style={{ marginBottom: 4 }}>{p.title}</h3>
                {p.clientName && (
                  <p style={{ fontSize: 13, color: "#6b7280" }}>
                    Client: {p.clientName}
                  </p>
                )}
                <Link
                  to="/portfolio"
                  style={{ fontSize: 13, marginTop: 8, display: "inline-block" }}
                >
                  View details →
                </Link>
              </div>
            ))}
            {!portfolio.length && (
              <p style={{ color: "#9ca3af" }}>
                Add portfolio items from the admin panel to showcase your work.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section" style={{ paddingBottom: 56 }}>
        <div className="container">
          <h2 className="section-title">Why Whitecircle?</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 18
            }}
          >
            <div className="card">
              <h3>End-to-end Ownership</h3>
              <p style={{ fontSize: 14, color: "#6b7280" }}>
                From idea to launch, we cover strategy, design, engineering and
                support.
              </p>
            </div>
            <div className="card">
              <h3>Enterprise Mindset</h3>
              <p style={{ fontSize: 14, color: "#6b7280" }}>
                We design systems that are secure, maintainable and ready for
                scale.
              </p>
            </div>
            <div className="card">
              <h3>Modern Tech Stack</h3>
              <p style={{ fontSize: 14, color: "#6b7280" }}>
                React, Node, cloud-native infrastructure and Web3 capabilities.
              </p>
            </div>
            <div className="card">
              <h3>Transparent Delivery</h3>
              <p style={{ fontSize: 14, color: "#6b7280" }}>
                Clear milestones, regular demos and collaborative working
                style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: "center" }}>
            <h2 className="section-title" style={{ marginBottom: 4 }}>
              Ready to discuss your next project?
            </h2>
            <p className="section-subtitle">
              Share your goals and we’ll suggest the most suitable technology
              approach.
            </p>
            <Link to="/contact">
              <button className="button-primary">
                Book a Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
