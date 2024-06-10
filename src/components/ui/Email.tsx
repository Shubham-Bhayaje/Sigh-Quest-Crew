// src/EmailForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_i10p9x5",
        "template_h14ichc",
        formData,
        "Lq05UpCOLi7VxWx4o"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="max-w-lg mx-auto p-8 bg-gray-800 shadow-lg rounded-lg"
>
  <div className="mb-6">
    <label className="block text-gray-300 font-bold mb-2">Name:</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-gray-200"
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-300 font-bold mb-2">Email:</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-gray-200"
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-300 font-bold mb-2">Message:</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-gray-200"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300"
  >
    Send Email
  </button>
</form>

  );
};

export default EmailForm;
