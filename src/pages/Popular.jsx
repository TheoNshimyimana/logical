import React from "react";
import { ArrowRight } from "lucide-react";

import Gate1 from "../images/modernGate2.jpeg";
import Gate2 from "../images/ModernGate.jpeg";
import Roofing1 from "../images/roofing1.jpeg";
import Roofing2 from "../images/roofing2.jpeg";
import Door1 from "../images/sliding-door.jpeg";
import Door2 from "../images/door1.jpeg";
import Window1 from "../images/window1.jpeg";
import Window2 from "../images/window2.jpeg";

const products = [
  {
    id: 1,
    title: "Main Gate",
    description:
      "Custom-designed gates built with durability and security in mind.",
    img: Gate1,
  },
  {
    id: 2,
    title: "Modern Gates",
    description: "Strong and stylish gate solutions for homes and industries.",
    img: Gate2,
  },
  {
    id: 3,
    title: "Roofing",
    description:
      "High-quality roofing structures that ensure safety and long life.",
    img: Roofing1,
  },
  {
    id: 4,
    title: "Industrial Roofing",
    description: "Metal roofing solutions for factories and large projects.",
    img: Roofing2,
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

function Popular() {
  return (
    <section className="max-w-full bg-gray-800 mx-auto px-6 py-2">
      <h2 className="text-2xl font-bold mb-8 text-white">
        Our Popular Welding Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">
                {item.description}
              </p>

              {/* Learn More */}
              <button className="mt-4 flex items-center text-sm font-medium text-blue-600 hover:underline">
                <ArrowRight className="w-4 h-4 mr-2" />
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular;
