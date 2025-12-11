const ServiceCard = ({ title, shortDescription }) => (
  <div className="card">
    <h3 style={{ fontSize: 18, marginBottom: 6 }}>{title}</h3>
    <p style={{ fontSize: 14, color: "#6b7280" }}>{shortDescription}</p>
  </div>
);

export default ServiceCard;
