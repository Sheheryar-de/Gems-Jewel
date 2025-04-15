"use client";
import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io5";

const ContactUs = () => {
  const openWhatsApp = () => {
    const mobileDevice = /Android|iPhone/i.test(navigator.userAgent);
    const url = mobileDevice
      ? "whatsapp://send?phone=923244998825"
      : "https://wa.me/923244998825";
    window.open(url, "_blank");
  };

  const openEmail = () => {
    window.open("mailto:email@email.com", "_blank");
  };

  return (
    <div className="max-w-screen-2xl mx-auto relative mb-14">
      {/* Background Image with Overlay */}
      <div className="relative w-full h-[500px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          className="w-full h-full object-cover object-center"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg"
          alt="Background"
          loading="lazy"
        />
      </div>

      {/* Contact Form (Partially Overlapping Image) */}
      <section className="relative -mt-[350px] z-50 shadow-lg rounded-lg p-8 max-w-screen-md mx-auto">
        <h2 className="text-white text-6xl font-extrabold text-center mb-[50px]">
          Contact Us
        </h2>
        <p className="mb-8 text-white font-light text-center sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form
          action="#"
          className="space-y-8 bg-white border border-black p-6 rounded-2xl"
        >
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-black text-sm rounded-lg block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-black shadow-sm"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-black shadow-sm"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-amber-400 cursor-pointer sm:w-fit hover:bg-primary-800"
          >
            Send message
          </button>
        </form>
      </section>

      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around mt-10">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="bg-black w-25 h-25 rounded-2xl flex flex-col items-center justify-center">
            <IoLogoWhatsapp
              className="text-5xl text-amber-400 cursor-pointer"
              onClick={openWhatsApp}
            />
          </div>
          <p className="uppercase text-center font-bold">WhatsApp</p>
          <p>+92 324 4998825</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="bg-black w-25 h-25 rounded-2xl flex flex-col items-center justify-center">
            <HiOutlineMail
              className="text-5xl text-amber-400 cursor-pointer"
              onClick={openEmail}
            />
          </div>
          <p className="uppercase text-center font-bold">Email</p>
          <p>email@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
