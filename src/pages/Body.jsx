import React from "react";
import Slider from "react-slick";
import banner1 from "../images/banner.jpeg";
import { Link } from "react-router-dom";

// Industry Images
import Gate1 from "../images/modernGate2.jpeg";
import Gate2 from "../images/ModernGate.jpeg";
import Roofing1 from "../images/roofing1.jpeg";
import Roofing2 from "../images/roofing2.jpeg";
import Door1 from "../images/door1.jpeg";
import Window1 from "../images/window1.jpeg";
import Window2 from "../images/window2.jpeg";

// Machinery Images
import JuiceMaker from "../images/machinery/juiceMaker.jpeg";
import GrainGrinder from "../images/machinery/grain-grinder.png";
import ChaffCutter from "../images/machinery/chaff-cutter.jpeg";
import Potato from "../images/machinery/potato.jpeg";
import Rice from "../images/machinery/rice.jpeg";
import Grinder from "../images/machinery/grinder.jpeg";
import Ground from "../images/machinery/groundnuts.png";
import Pea from "../images/machinery/small-pea-nuts.jpg";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const industries = [
  { title: "Main Gate", img: Gate1, description: "Premium steel main gate solutions with durability and design." },
  { title: "Gates", img: Gate2, description: "Custom metal gate fabrication with elegant finishes." },
  { title: "Roofing", img: Roofing1, description: "Strong roofing structures with expert welding." },
  { title: "Metal Fabrication", img: Roofing2, description: "Industrial fabrication and steel structures." },
  { title: "Door", img: Door1, description: "Modern doors crafted with precision and strength." },
  { title: "Window", img: Window1, description: "Durable and stylish welded window solutions." },
  { title: "Window", img: Window2, description: "Modern welded windows with strong security." },
];

const machinery = [
  { img: JuiceMaker, title: "Juice Maker Machine", description: "Efficient machines for fresh juice extraction from various fruits." },
  { img: GrainGrinder, title: "Grain Grinding Machine", description: "Robust grinders for maize, millet, and sorghum into fine flour." },
  { img: ChaffCutter, title: "Chaff Cutter Machine", description: "Reliable machines for cutting and processing straw and hay." },
  { img: Potato, title: "Potato Processing Machine", description: "Peeling, slicing, and processing machines for potatoes." },
  { img: Rice, title: "Rice Milling Machine", description: "Modern milling machines for rice processing." },
  { img: Grinder, title: "Food Grinder", description: "Multi-purpose grinders for food and industrial use." },
  { img: Ground, title: "Groundnut Processing Machine", description: "Machines designed for roasting and processing groundnuts." },
  { img: Pea, title: "Peanut Machine", description: "Compact machines for peanut shelling and processing." },
];

function Body() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center text-white flex items-center h-[40vh] sm:h-[50vh] md:h-[60vh]"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="relative z-10  mx-aut0 px-4 sm:px-6">
          <div className="space-y-6  mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              Logical Manufacturing Solution Ltd
            </h1>
            <p className="text-sm sm:text-base max-w-1/2 md:text-lg text-gray-300">
              Since 2010, we provide welding, fabrication, and industrial
              solutions. From gates and roofing to piping and repairs, we build
              with quality and precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                to="/contact_us"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-lg transition"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold shadow-lg transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="bg-black py-4">
        <div className="w-full mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-12">
            Explore Our Expertise
          </h2>

          <Slider {...sliderSettings}>
            {industries.map((item, i) => (
              <div key={i} className="px-2">
                <div className="bg-gray-900 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition flex flex-col h-full">
                  <div className="w-full px-0 h-40 sm:h-48 md:h-56 lg:h-64 flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-4 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="hidden sm:block mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* MACHINERY SECTION */}
      <section className="bg-black text-white py-4">
        <div className="max-w-full mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
            Machinery and Equipment
          </h2>
          <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Wide range of machinery solutions for agriculture, food processing,
            and industrial needs. Reliable and efficient to support your growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {machinery.map((m, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition flex flex-col overflow-hidden"
              >
                <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center bg-white">
                  <img
                    src={m.img}
                    alt={m.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {m.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mt-2 break-words">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
