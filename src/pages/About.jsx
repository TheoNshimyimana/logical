import React from "react";
import banner from "../images/banner1.jpeg";// Replace with your welding image
import banner2 from "../images/banner1.jpeg";// Replace with your image
import Footer from "./Footer";
import Navbar from "../Navbar";

function AboutUs() {
    return (
        <>
            <Navbar />
        <div className="bg-gray-50 text-gray-800">
          {/* Hero Section */}
          <section
            className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
                Building durable solutions in welding, fabrication, and
                construction since 2010.
              </p>
            </div>
          </section>

          {/* Who We Are */}
          <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Who We Are
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Logical Welding Society is a trusted name in welding and metal
                fabrication. Since 2010, we have provided high-quality solutions
                for gates, roofing, piping, industrial structures, and custom
                metalwork.
                <br /> <br />
                With years of experience, a skilled workforce, and advanced
                tools, we deliver durable and innovative results tailored to
                your needs.
              </p>
            </div>
            <div>
              <img
                src={banner2}
                alt="Welding work"
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide reliable, affordable, and innovative welding and
                  fabrication services that meet industry standards and exceed
                  customer expectations.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading welding and fabrication company in
                  Rwanda and East Africa, known for quality, durability, and
                  innovation.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
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
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
            </div>
            <Footer />
      </>
    );
}

export default AboutUs;
