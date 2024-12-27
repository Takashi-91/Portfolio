import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        formData,
        'YOUR_USER_ID' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setErrorMessage('Failed to send message. Please try again.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
          </form>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600">
              Have any questions or just want to say hi? Feel free to drop me a message, and I’ll
              get back to you as soon as possible!
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-800">
                <strong>Phone:</strong> <a href="tel:0680783232" className="hover:text-blue-500">068 078 3232</a>
              </p>
              <p className="text-lg text-gray-800">
                <strong>Email:</strong> <a href="mailto:chuenemadimetja911@gmail.com" className="hover:text-blue-500">chuenemadimetja911@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>

  );
};

export default Contact;
