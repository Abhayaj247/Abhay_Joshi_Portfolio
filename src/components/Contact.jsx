import React, { useState } from "react";
import { CONTACT } from "../constants";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To track form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...."); // Update status to "Sending...."

    const formPayload = new FormData(event.target); // Use a different variable name
    formPayload.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" }); // Reset form data
        setTimeout(() => {
          setStatus("");
        }, 5000);
      } else {
        console.log("Error", data);
        setStatus(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        id="contact"
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      {/* Flex container for side-by-side layout */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 m-8">
        {/* "Get in Touch" Section */}
        <div className="text-center tracking-tighter md:w-1/2">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <a href={`mailto:${CONTACT.email}`} className="border-b">
            {CONTACT.email}
          </a>

          <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/abhayjoshi247"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Abhayaj247"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/abhayAJ_24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          onSubmit={onSubmit}
          className="mt-10 max-w-lg md:w-1/2 w-full"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-[#2f2e31] rounded bg-[#2f2e31] bg-opacity-50 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-[#2f2e31] rounded bg-[#2f2e31] bg-opacity-50 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-[#2f2e31] rounded bg-[#2f2e31] bg-opacity-50 focus:outline-none"
              rows="5"
              required
            />
          </div>

          {/* Centered "Send Message" Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-900 outline-none"
            >
              Send Message
            </button>
          </div>

          {/* Centered Status Message */}
          {status && (
            <p className="mt-4 text-center text-xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent">
              {status}
            </p>
          )}
        </motion.form>
      </div>

      {/* License Footer */}
      <footer className="border-t border-stone-900 pt-6 text-center mt-20 text-sm text-stone-400">
        © 2025 Abhay Joshi. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;