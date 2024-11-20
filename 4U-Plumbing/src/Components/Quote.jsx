import React, { useState } from 'react';
import Background from '../images/bathroom-sink.jpg'; // Path to the image

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Submitting...'); // Show loading message

    try {
      const response = await fetch('https://yourdomain.com/api/get-quote', { // Replace with your cPanel domain
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setStatusMessage('Quote request sent successfully!');
      } else {
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatusMessage('Error submitting the form. Please try again later.');
    }
  };

  return (
    <div className="quote-form-container">
      <div className="quote-form">
        <h2>Get a Quote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name:'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email:'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Address"></label>
            <input
              type="address"
              id="address"
              name="address"
              placeholder='Address:'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              placeholder='Message:'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default QuoteForm;
