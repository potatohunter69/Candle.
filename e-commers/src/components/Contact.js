import React, { useState } from 'react';
import './contact.css'; // Assuming you have a CSS file named ContactForm.css
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState(''); // State to keep track of the error message
  const navigate = useNavigate(); // Hook to control routing

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      // Set an error message if any field is empty
      setError('Please fill out all fields.');
    } else {
      // Reset error state if all fields are filled
      setError('');

      fetch('http://localhost:8080/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Email sent successfully:', data);
        navigate('/'); // Redirect to the home page after successful form submission
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        
      })
      .finally(navigate('/')); // Redirect to the home page after form submission (whether successful or not
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        {error && <div className="error-message" style={{color:"red", marginBottom: "1vh"}}>{error}</div>} {/* Display the error message if there is one */}
        <div className="form-field">
          <input
            type="text"
            name="name"
            placeholder="Write your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="form-field">
          <input
            type="email"
            name="email"
            placeholder="Write your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="form-field">
          <textarea
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="read-mor">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
