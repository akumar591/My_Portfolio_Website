import React from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "384f0181-c775-4790-b80a-920d2ef3da42");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! 🚀", {
          theme: "dark",
          autoClose: 3000,
          position: "top-right",
        });
        form.reset();
      } else {
        toast.error("Failed to send message. Try again later.", {
          theme: "dark",
          autoClose: 3000,
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        theme: "dark",
        autoClose: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex justify-center px-4 mt-10">
      {/* Toast Container with Custom Styling */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "rgba(30, 41, 59, 0.7)", // Slate-800 with transparency
          color: "aliceblue",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
        }}
      />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] backdrop-blur-md bg-white/10 rounded-xl shadow-lg p-4 md:p-6 text-[aliceblue]"
      >
        <h2 className="text-1xl md:text-2xl mb-8 mt-2 font-thin text-center">
          Request a Quote
        </h2>

        {/* First & Last Name */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1 group">
            <div className="flex items-center gap-2">
              <FiUser className="text-sky-400" />
              <input
                type="text"
                name="first_name"
                required
                placeholder="First Name"
                className="bg-transparent w-full py-2 font-thin focus:outline-none border-b border-white/20"
              />
            </div>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>

          <div className="relative flex-1 group">
            <div className="flex items-center gap-2">
              <FiUser className="text-sky-400" />
              <input
                type="text"
                name="last_name"
                required
                placeholder="Last Name"
                className="bg-transparent w-full py-2 font-thin focus:outline-none border-b border-white/20"
              />
            </div>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>
        </div>

        {/* Email */}
        <div className="relative group mb-6">
          <div className="flex items-center gap-2">
            <FiMail className="text-sky-400" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="bg-transparent w-full py-2 font-thin focus:outline-none border-b border-white/20"
            />
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
        </div>

        {/* Phone */}
        <div className="relative group mb-6">
          <div className="flex items-center gap-2">
            <FiPhone className="text-sky-400" />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Contact Number"
              className="bg-transparent w-full py-2 font-thin focus:outline-none border-b border-white/20"
            />
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
        </div>

        {/* Message */}
        <div className="relative group mb-6">
          <div className="flex items-start gap-2">
            <FiMessageSquare className="text-sky-400 mt-2" />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="4"
              className="bg-transparent font-thin w-full py-2 resize-none focus:outline-none border-b border-white/20"
            ></textarea>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="mt-1 px-6 py-2 rounded-sm bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 text-gray-800 font-normal transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Send Message ✉️
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
