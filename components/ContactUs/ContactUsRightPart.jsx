"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonEffect from "@/app/button/page";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const ContactUsRightPart = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    website: "",
    services: [],
    message: "",
    referral: "",
  });
  const [loading, setLoading] = useState(false); // Loading state for button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting submission

    try {
      const response = await fetch(
        "https://living-brands-admin.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred.");
    } finally {
      setLoading(false); // Set loading to false after submission is complete
    }
  };

  return (
    <div className="mb-16">
      <ToastContainer
        position="top-right" // Position toast at the top-center by default
        autoClose={5000} // Optional: Auto close after 5 seconds
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ top: "130px" }} // Custom position from top
      />
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <p className="text-[17px] my-2 text-[#125b5c]">GOT AN IDEA?</p>
        <h1 className="text-[30px] font-bold my-2 text-[#125b5c]">
          Drop us a message
        </h1>
        <p className="text-[20px] text-[#1f2937] my-2">
          We&apos;re excited to work with you soon! Please drop an email with
          your details & requirements to bd@living-brand.com.
        </p>
        <p className="text-[20px] text-[#1f2937] my-2">
          You can also fill this form & we&apos;ll get back in 2 business days.
        </p>

        {/* Name Field */}
        <label>
          <p className="text-[20px] mt-12 mb-8">Your Name</p>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none h-10 text-[20px]"
            required
          />
        </label>

        {/* Organization Field */}
        <label>
          <p className="text-[20px] mt-12 mb-8">
            Your Organization&apos;s Name
          </p>
          <input
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none h-10 text-[20px]"
            required
          />
        </label>

        {/* Email Field */}
        <label>
          <p className="text-[20px] mt-12 mb-8">Your Email</p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none h-10 text-[20px]"
            required
          />
        </label>

        {/* Phone Field */}
        <label>
          <p className="text-[20px] mt-12 mb-8">Your Number</p>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none h-10 text-[20px]"
            required
          />
        </label>

        {/* Website/Social Media Link */}
        <label>
          <p className="text-[20px] mt-12 mb-8">Website/Social Media Link</p>
          <input
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none h-10 text-[20px]"
          />
        </label>

        {/* Services Field */}
        <p className="text-[20px] mt-12 mb-8">
          Which services are you interested in?
        </p>
        {[
          "Branding",
          "Social Media Management",
          "Content Creation & Marketing",
          "Ad Film/Video Production",
          "SEO",
          "Website Transformation",
          "Mobile App Development & UI/UX",
          "CRM/Sales Pipeline Development",
          "Influencer Marketing",
          "IP Creation",
          "Email & SMS Marketing Automation",
          "Integrated Campaigns",
          "Performance Media",
          "Growth via Media Buying",
          "Social Listening & ORM",
          "Consumer & Market Research",
          "Others",
        ].map((service) => (
          <button
            key={service}
            type="button"
            className={`p-2 text-[16px] border rounded-full m-2 focus:outline-none ${
              formData.services.includes(service) ? "bg-[#B6B6B6]" : ""
            }`}
            onClick={() => handleServiceSelect(service)}
          >
            {service}
          </button>
        ))}

        {/* Message Field */}
        <label>
          <p className="text-[20px] mt-12 mb-8">What&apos;s on your mind?</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-black focus:outline-none h-20 text-[20px]"
            required
          />
        </label>

        {/* Referral Field */}
        <p className="text-[20px] mt-12 mb-8">How did you hear about us?</p>
        {[
          "Referral",
          "Media & News",
          "LinkedIn",
          "Instagram/Facebook",
          "Emails/Newsletter",
          "Search",
          "Other Sources",
        ].map((referralSource) => (
          <button
            key={referralSource}
            type="button"
            className={`p-2 border rounded-full m-2 focus:outline-none ${
              formData.referral === referralSource ? "bg-[#B6B6B6]" : ""
            }`}
            onClick={() =>
              setFormData((prev) => ({ ...prev, referral: referralSource }))
            }
          >
            {referralSource}
          </button>
        ))}

        {/* Submit Button */}
        <div className="max-w-md pt-10">
          <ButtonEffect>
            <button
              type="submit"
              disabled={loading} // Disable button while loading
              className="flex gap-[6px] cursor-pointer "
            >
              {loading ? "Submitting..." : "Submit"}
              {!loading && <MdOutlineArrowRightAlt className="text-[20px]" />}
            </button>
          </ButtonEffect>
        </div>
      </form>
    </div>
  );
};

export default ContactUsRightPart;
