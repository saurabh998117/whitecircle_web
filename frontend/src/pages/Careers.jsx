import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axiosClient.get("/careers").then((res) => setJobs(res.data));
  }, []);

  return (
    <section className="section" style={{ paddingTop: 96 }}>
      <div className="container">
        <h1 className="section-title">Careers</h1>
        <p className="section-subtitle">
          Join a team focused on quality engineering and long-term partnerships.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 18
          }}
        >
          {jobs.map((job) => (
            <div key={job._id} className="card">
              <h3 style={{ marginBottom: 4 }}>{job.title}</h3>
              <p style={{ fontSize: 13, color: "#6b7280" }}>
                {job.location || "Location: Flexible"} · {job.type || "Full-time"}
              </p>
              <p style={{ fontSize: 14, color: "#4b5563", marginTop: 8 }}>
                {job.description}
              </p>
            </div>
          ))}
          {!jobs.length && (
            <p style={{ color: "#9ca3af" }}>
              No open roles yet. Add them from the admin panel.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Careers;
