import React from "react";
import { ArrowRight } from "lucide-react";

import Gate1 from "../images/modernGate2.jpeg";
import Roofing1 from "../images/roofing1.jpeg";
import Roofing2 from "../images/roofing2.jpeg";
import Door1 from "../images/sliding-door.jpeg";
import Door2 from "../images/door1.jpeg";
import Window1 from "../images/window1.jpeg";
import Window2 from "../images/window2.jpeg";
import { Link } from "react-router-dom";
import JuiceMaker from "../images/machinery/juiceMaker.jpeg";
import GrainGrinder from "../images/machinery/grain-grinder.png";
import ChaffCutter from "../images/machinery/chaff-cutter.jpeg";
import Potato from "../images/machinery/potato.jpeg";
import Rice from "../images/machinery/rice.jpeg";


const products = [
  {
    id: 1,
    title: "Main Gate",
    description:
      "Custom-designed gates built with durability and security in mind.",
    img: Gate1,
  },
  {
    img: JuiceMaker,
    title: "Juice Maker Machine",
    description:
      "Efficient machines for fresh juice extraction from various fruits.",
  },

  {
    id: 3,
    title: "Roofing",
    description:
      "High-quality roofing structures that ensure safety and long life.",
    img: Roofing1,
  },
  {
    img: GrainGrinder,
    title: "Grain Grinding Machine",
    description:
      "Robust grinders for maize, millet, and sorghum into fine flour.",
  },

  {
    img: Rice,
    title: "Rice Milling Machine",
    description: "Modern milling machines for rice processing.",
  },
  {
    id: 4,
    title: "Industrial Roofing",
    description: "Metal roofing solutions for factories and large projects.",
    img: Roofing2,
  },
  {
    img: Potato,
    title: "Potato Processing Machine",
    description: "Peeling, slicing, and processing machines for potatoes.",
  },
  {
    id: 5,
    title: "Metal Doors",
    description: "Secure and elegant metal doors designed to last.",
    img: Door1,
  },
  {
    id: 6,
    title: "Custom Doors",
    description: "Tailor-made door designs with premium welding finish.",
    img: Door2,
  },
  {
    img: ChaffCutter,
    title: "Chaff Cutter Machine",
    description: "Reliable machines for cutting and processing straw and hay.",
  },
  {
    id: 7,
    title: "Windows",
    description: "Modern welded windows for homes, offices, and industries.",
    img: Window1,
  },
  {
    id: 8,
    title: "Custom Windows",
    description: "Elegant window designs for better light and security.",
    img: Window2,
  },
];
const whyChooseUs = [
    {
      title: "Experience",
      description: "Over 15 years in welding and fabrication industry.",
    },
    {
      title: "Durability",
      description: "We use premium materials for lasting strength.",
    },
    {
      title: "Custom Solutions",
      description: "Every project is tailored to client needs.",
    },
    {
      title: "Trusted Team",
      description: "Skilled welders and fabricators delivering excellence.",
    },
   
  ];

function Popular() {
  return (
    <>
      <section className="max-w-full bg-black mx-auto px-6 py-6">
        <h2 className="text-2xl text-center font-bold mb-4 text-white">
          Our Popular Welding Products
        </h2>
        <p className="text-gray-300 text-center mb-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Top-quality welding products that combine strength, style, and
          precision for every project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 text-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">
                  {item.description}
                </p>

                {/* Learn More */}
                <button className="mt-4 flex items-center max-w-20 justify-center text-center text-sm font-medium text-blue-600 hover:underline">
                  <ArrowRight className="w-4 h-4 mr-2 text-center" />
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto px-4 py-6 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-lg md:text-xl">{item.title}</h4>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 py-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
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
          <Link
            to="/contact_us"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Popular;
