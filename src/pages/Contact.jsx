import React from "react";
import banner1 from "../images/banner.jpeg";
import Footer from "./Footer";
import Navbar from "../Navbar";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section
          className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center px-4 md:px-6">
            <h1 className="text-3xl md:text-6xl font-bold">
              Logical Manufacturing Solution Ltd
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl md:max-w-2xl mx-auto">
              Delivering professional welding, fabrication, and repair services
              with precision and durability since 2010.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-full mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-6 text-white">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+250 7xx xxx xxx"
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Contact Info</h2>
            <p className="text-lg text-gray-300">
              We’re here to answer your questions and provide the best
              solutions.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="text-gray-300">Kigali, Rwanda</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+250 785 714 552</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-300">info@logicalmanufacturing.rw</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Working Hours</h3>
                  <p className="text-gray-300">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8353107918396!2d30.061885074046634!3d-1.9440721980311635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42571ab9c7b%3A0xf91a1d3db9f926a0!2sKigali!5e0!3m2!1sen!2srw!4v1694273800000!5m2!1sen!2srw"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
