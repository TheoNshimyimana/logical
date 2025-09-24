import React from "react";
import banner1 from "../images/banner.jpeg"; 
import JuiceMaker from "../images/machinery/juiceMaker.jpeg";

import Footer from "./Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section
          className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center px-4 md:px-6">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Logical Manufacturing Solution Ltd
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Delivering professional welding, fabrication, and repair services
              with precision and durability since 2010.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="max-w-full mx-auto pr-0 pl-8 sm:pr-0 py-0 sm:py-0 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Logical Welding Society is a trusted name in welding and metal
              fabrication. Since 2010, we have provided high-quality solutions
              for gates, roofing, piping, industrial structures, and custom
              metalwork.
              <br /> <br />
              With years of experience, a skilled workforce, and advanced tools,
              we deliver durable and innovative results tailored to your needs.
            </p>
          </div>
          <div>
            <img
              src={JuiceMaker}
              alt="Welding work"
              className="rounded-2xl shadow-lg  object-cover w-full h-[300px] sm:h-[400px]"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-800 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
            <div className=" p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To provide reliable, affordable, and innovative welding and
                fabrication services that meet industry standards and exceed
                customer expectations.
              </p>
            </div>
            <div className=" p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become the leading welding and fabrication company in Rwanda
                and East Africa, known for quality, durability, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-white">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Skilled Experts",
                desc: "Our professional welders and technicians deliver quality work backed by years of experience.",
              },
              {
                title: "Durable Solutions",
                desc: "We use high-quality materials and modern equipment to ensure long-lasting results.",
              },
              {
                title: "Customer Focused",
                desc: "We tailor every project to meet client needs and guarantee satisfaction.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-400">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <section className="bg-gray-800 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Ready to Build With Us?
        </h2>
        <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
          Bring your ideas to life with our expert welding and custom
          fabrication services. We deliver precision, quality, and durability in
          every project.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            View Portfolio
          </button>
          <Link to="/contact_us" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Contact Us
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
