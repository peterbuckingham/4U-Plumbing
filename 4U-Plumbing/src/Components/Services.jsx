import "../styles/index.css"; // Make sure to import your styles

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Plumbing Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3 className="service-title">Leak Detection</h3>
          <p className="service-description">
            We provide expert leak detection services to prevent water damage and costly repairs.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Pipe Repair & Replacement</h3>
          <p className="service-description">
            Our team specializes in pipe repairs and replacements, ensuring your plumbing system runs smoothly.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Water Heater Installation</h3>
          <p className="service-description">
            Whether it's repair or installation, we offer efficient water heater services for your comfort.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Drain Cleaning</h3>
          <p className="service-description">
            Keep your drains flowing freely with our comprehensive drain cleaning services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
