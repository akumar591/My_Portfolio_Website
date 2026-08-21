import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      toast.success("Message sent successfully! 🚀", {
        theme: "dark",
        autoClose: 3000,
        position: "top-right",
      });

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error("Failed to send message. Please try again.", {
        theme: "dark",
        autoClose: 3000,
        position: "top-right",
      });

      setIsSending(false);
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

      {submitted ? (
        <div className="w-full max-w-[600px] backdrop-blur-md bg-white/10 rounded-xl shadow-lg p-6 md:p-8 text-[aliceblue]">
          <div className="flex flex-col items-center text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 mb-5 rounded-full flex items-center justify-center border border-sky-400/30 bg-sky-400/10 shadow-md">
              <span className="text-3xl text-sky-400">✓</span>
            </div>

            {/* Heading */}
            <h2 className="text-1xl md:text-2xl mb-4 font-thin">
              Message Sent Successfully!
            </h2>

            {/* Accent Line */}
            <div className="h-[2px] w-32 mb-5 bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>

            {/* Message */}
            <p className="text-sm md:text-base text-gray-300 font-thin leading-7 max-w-md">
              Thank you for reaching out to{" "}
              <span className="text-sky-400">Code & Create</span>. Your message
              has been received successfully. I’ll get back to you as soon as
              possible.
            </p>

            {/* Small Confirmation */}
            <p className="mt-4 text-xs text-gray-400 font-thin">
              A confirmation email has also been sent to your email address.
            </p>
          </div>
        </div>
      ) : (
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
          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={isSending}
              className={`mt-1 px-6 py-2 rounded-sm bg-gradient-to-r from-sky-500 to-blue-600 text-gray-800 font-normal transition-all duration-300 shadow-md hover:shadow-xl ${
                isSending
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:from-blue-600 hover:to-sky-500"
              }`}
            >
              {isSending ? "Sending..." : "Send Message ✉️"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
