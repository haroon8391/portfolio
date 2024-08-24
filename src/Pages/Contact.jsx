import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "99815abc-646f-4b34-8fdb-72b52a6375b4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="lg:min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-extrabold mb-12 text-center">
          Contact Me
        </h1>
        <form
          className="bg-gray-700 rounded-lg shadow-lg p-8 w-full max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="mt-1 p-2 block w-full rounded-md bg-gray-800 border-gray-600 text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="mt-1 p-2 block w-full rounded-md bg-gray-800 border-gray-600 text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="mt-1 p-2 block w-full rounded-md bg-gray-800 border-gray-600 text-white"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#f9004d] text-white font-bold py-2 px-4 rounded-md border border-transparent transition duration-300 hover:bg-gray-800"
            >
              Send Message
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
