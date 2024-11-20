
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Map Section */}
      <div style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114609.94532513263!2d27.9256722090456!3d-26.145859899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950a60026cdd95%3A0x2eea79f6537932e9!2s4U%20Plumbing!5e0!3m2!1sen!2sza!4v1732101683863!5m2!1sen!2sza"
          width="100%"
          height="300"
          style={styles.map}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>

      {/* Footer Content */}
      <div style={styles.footerContent}>
        <p style={styles.contactUs}>Contact us:</p> 
        <p style={styles.text}>info@4uplumbing.com</p>
        <p style={styles.text}>+27 82 590 7453</p>

        {/* Social Media Links */}
        <div style={styles.socialMedia}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div style={styles.copywrite}>
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} 4U Plumbing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1e60aa",
    color: "#fff",
    textAlign: "center",
    marginTop: "-300px",
  },
  mapContainer: {
    overflow: "hidden",
  },
  map: {
    border: 0,
    marginTop: "20px",
  },
  footerContent: {
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  text: {
    margin: "5px 0",
    paddingTop: "15px",
  },
  contactUs: {
    color: "#c8f4ff",
    fontWeight: "bold",
    marginBottom: "1px",
  },
  socialMedia: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    gap: "15px",
  },
  icon: {
    color: "#fff",
    fontSize: "1.5rem",
    textDecoration: "none",
    transition: "color 0.3s",
    marginTop: "15px",
    marginBottom: "-10px",
  },
  iconHover: {
    color: "#00d4ff",
  },
  copywrite: {
    backgroundColor: "#fff",
    height: "50px",
    color: "#1e60aa"
  },
};

export default Footer;
