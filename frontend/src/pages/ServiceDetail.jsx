import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { servicesDetails } from "../data/servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();                         // e.g. "software-development"
  const [service, setService] = useState(
    servicesDetails[slug] || null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // when slug changes, start fresh
    setLoading(true);
    setService(servicesDetails[slug] || null);

    axiosClient
      .get(`/services/${slug}`)
      .then((res) => {
        // merge API data into local details
        setService((prev) => ({ ...(prev || {}), ...res.data }));
      })
      .catch(() => {
        // if API fails, at least keep local data
      })
      .finally(() => setLoading(false));
  }, [slug]);   // 👈 run again whenever slug changes

  if (!service && loading) {
    return (
      <section className="section" style={{ paddingTop: 96 }}>
        <div className="container">
          <p>Loading service…</p>
        </div>
      </section>
    );
  }

  if (!service && !loading) {
    return (
      <section className="section" style={{ paddingTop: 96 }}>
        <div className="container">
          <p>Service not found.</p>
          <Link to="/services" style={{ color: "#1c45ff" }}>
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container">
        <Link
          to="/services"
          style={{ fontSize: 13, display: "inline-block", marginBottom: 8 }}
        >
          ← Back to Services
        </Link>

        <h1 className="section-title">{service.title}</h1>
        {service.bannerDescription && (
          <p className="section-subtitle">{service.bannerDescription}</p>
        )}

        {service.overview && (
          <>
            <h2>Overview</h2>
            <p>{service.overview}</p>
          </>
        )}

        {service.deliverables && (
          <>
            <h2>What We Deliver</h2>
            <ul>
              {service.deliverables.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {service.process && (
          <>
            <h2>Process</h2>
            <ol>
              {service.process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </>
        )}

        {service.technologies && (
          <>
            <h2>Technologies Used</h2>
            <ul>
              {service.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default ServiceDetail;
