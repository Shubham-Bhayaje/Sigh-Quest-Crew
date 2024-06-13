// src/EmailForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "", // Added phone field
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
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
      phone: "", // Reset phone field
    });
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="w-[70%] mx-auto p-8 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg sm:w-[100%]"
>
  <div className="mb-6">
    <label className="block text-gray-300 font-bold mb-2">Name:</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-gray-200"
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
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-gray-200"
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-300 font-bold mb-2">Phone:</label>
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-gray-200"
    />
  </div>
  <div className="mb-6">
    <label className="block text-gray-300 font-bold mb-2">Message:</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-gray-200"
    />
  </div>
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300"
  >
    Submit
  </button>
</form>


  );
};

export default EmailForm;
