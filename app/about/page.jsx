"use client";

import React from "react";

const About = () => {
  return (
    <div className="text-gray-800">
      {/* 🌟 Hero Banner */}
      <section
        className="relative w-full h-[300px] md:h-[400px] bg-center bg-cover flex items-center md:justify-start justify-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20210710/original/pngtree-ring-jewelry-promotion-poster-background-picture-image_1024253.jpg')",
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <h1 className="relative text-white text-3xl md:text-6xl font-bold pl-25">
          About GEMS <span className="text-amber-400">& JEWEL</span>
        </h1>
      </section>

      {/* 📝 Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <section className="mb-10">
          <p className="text-lg leading-7 mb-4">
            Welcome to{" "}
            <span className="font-semibold text-black">GEMS & JEWEL</span> –
            your trusted destination for premium{" "}
            <span className="text-amber-500">artificial jewellery</span> that
            blends timeless elegance with modern style.
          </p>
          <p className="text-lg leading-7">
            We believe jewellery isn’t just an accessory — it’s a story. Our
            collection is designed to help you express your personality, elevate
            your look, and shine confidently at every occasion, whether it's a
            wedding, party, or everyday glam.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Our Mission
          </h2>
          <p className="text-lg leading-7">
            To make high-quality, fashionable, and affordable jewellery
            accessible to everyone. We aim to redefine the artificial jewellery
            space with style, variety, and trust.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>💎 Wide range of trendy & traditional jewellery</li>
            <li>💰 Affordable luxury for every budget</li>
            <li>🔒 100% secure and seamless shopping experience</li>
            <li>🚚 Fast and reliable delivery</li>
            <li>💬 Excellent customer support</li>
          </ul>
        </section>

        <section className="text-center mt-10">
          <p className="text-lg italic">
            Join the GEMS & JEWEL family and sparkle with confidence. ❤️
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
