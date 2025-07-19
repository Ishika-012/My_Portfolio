import React, { useState, useEffect } from 'react';
import './Contact.css';
import contactImg from '../assets/contact.jpg';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [submitted]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  if (submitted) {
    return (
      <motion.section
        className="thank-you-fullscreen"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="thank-you-message">
          Thank you for reaching out! <br />
          We'll get back to you shortly.

          <motion.button
            className="go-home-btn"
            onClick={() => {
              document.body.classList.remove('no-scroll');
              window.location.href = '/';
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            Go Back to Home
          </motion.button>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="w-full h-full md:px-10 px-5">
        <div className="heading-area">
          <motion.h1
            className="main-heading"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="sub-heading"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            We'd love to hear from you!
          </motion.p>
        </div>

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {['name', 'email', 'phone', 'message'].map((field) => (
              <motion.div
                className="form-group"
                key={field}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === 'message' ? (
                  <textarea
                    name={field}
                    rows="4"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                )}
                {errors[field] && <span className="error">{errors[field]}</span>}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="contact-image"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={contactImg} alt="contact" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
