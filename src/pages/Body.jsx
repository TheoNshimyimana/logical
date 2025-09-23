import React from "react";
import Slider from "react-slick";
import banner1 from "../images/banner.jpeg";
import { Link } from "react-router-dom";

// import banner from "../images/banner1.jpeg";
import Gate1 from "../images/modernGate2.jpeg";
import Gate2 from "../images/ModernGate.jpeg";
import Roofing1 from "../images/roofing1.jpeg";
import Roofing2 from "../images/roofing2.jpeg";
import Door1 from "../images/door1.jpeg";
import Door2 from "../images/door1.jpeg";
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

const machinery = [
  {
    img: JuiceMaker,
    title: "Juice Maker Machine",
    description:
      "Efficient juice extraction machines from pomegranates, mangoes, pineapples, and other fruits for fresh and healthy beverages.",
  },
  {
    img: GrainGrinder,
    title: "Grain Grinding Machine",
    description:
      "Robust grain grinding machines for processing maize, millet, sorghum, and other cereals into fine flour.",
  },
  {
    img: ChaffCutter,
    title: "Chaff Cutter Machine",
    description:
      "Efficient machines for cutting and processing straw, hay, and other agricultural residues.",
  },
  {
    img: Potato,
    title: "Potato Processing Machine",
    description:
      "Advanced machinery for efficient potato washing, peeling, and cutting.",
  },
  {
    img: Rice,
    title: "Rice Processing Machine",
    description:
      "State-of-the-art machinery for efficient rice milling, polishing, and packaging.",
  },
  {
    img: Grinder,
    title: "Grindering Machine",
    description:
      "High-quality grinders for efficient and precise material processing.",
  },
  {
    img: Ground,
    title: "Groundnuts Processing Machine",
    description:
      "High-quality machinery for efficient groundnuts processing, from shelling to packaging.",
  },
  {
    img: Pea,
    title: "Peas Processing Machine",
    description:
      "High-quality machinery for efficient pea processing, from shelling to packaging.",
  },
];

function Body() {
  const scrollToServices = () => {
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
    const element = document.getElementById("services");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const industries = [
    {
      title: "Main Gate",
      img: Gate1,
      description:
        "High-quality machinery for efficient pea processing, from shelling to packaging.",
    },
    {
      title: "Gates",
      img: Gate2,
      description:
        "High-quality machinery for efficient pea processing, from shelling to packaging.",
    },

    {
      title: "Metal Fabrication",
      img: Roofing2,
      description:
        "High-quality machinery for efficient pea processing, from shelling to packaging.",
    },
    {
      title: "Door",
      img: Door1,
      description:
        "High-quality machinery for efficient pea processing, from shelling to packaging.",
    },
    {
      title: "Door",
      img: Door2,
      description:
        "High-quality machinery for efficient pea processing, from shelling to packaging.",
    },
    {
      title: "Window",
      img: Window1,
      description:
        "High-quality machinery for efficient pea processing, from shelling to packaging.",
    },
    {
      title: "Window",
      img: Window2,
      description:
        "High-quality machinery for efficient pea processing, from shelling to packaging.",
    },
    {
      img: JuiceMaker,
      title: "Juice Maker Machine",
      description:
        "Efficient juice extraction machines from pomegranates, mangoes, pineapples, and other fruits for fresh and healthy beverages.",
    },
    {
      img: GrainGrinder,
      title: "Grain Grinding Machine",
      description:
        "Robust grain grinding machines for processing maize, millet, sorghum, and other cereals into fine flour.",
    },
    {
      img: ChaffCutter,
      title: "Chaff Cutter Machine",
      description:
        "Efficient machines for cutting and processing straw, hay, and other agricultural residues.",
    },
    {
      img: Potato,
      title: "Potato Processing Machine",
      description:
        "Advanced machinery for efficient potato washing, peeling, and cutting.",
    },
    {
      img: Rice,
      title: "Rice Processing Machine",
      description:
        "State-of-the-art machinery for efficient rice milling, polishing, and packaging.",
    },
    {
      img: Grinder,
      title: "Grindering Machine",
      description:
        "High-quality grinders for efficient and precise material processing.",
    },
    {
      img: Ground,
      title: "Groundnuts Processing Machine",
      description:
        "High-quality machinery for efficient groundnuts processing, from shelling to packaging.",
    },
    {
      img: Pea,
      title: "Peas Processing Machine",
      description:
        "High-quality machinery for efficient pea processing, from shelling to packaging.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-black text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-90"></div>

        <div className="relative max-w-full mx-auto px-10 py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Logical Manufacturing Solution Ltd
            </h1>
            <p className="text-lg text-gray-300">
              Founded in 2010, we deliver professional welding, fabrication, and
              repair services. From roofing and gates to piping and industrial
              projects, we build solutions that last.
            </p>

            <div className="flex space-x-4">
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
                {" "}
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-full bg-black py-10 px-10 mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-white text-left">
          Explore Our Expertise
        </h2>
        <Slider {...settings}>
          {industries.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-gray-900 rounded-xl text-wrap shadow-lg hover:shadow-2xl overflow-hidden transition cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-contain"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg text-white text-center font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* Section: Machinery and Equipment */}
      <div className="bg-black text-white">
        <section className="mx-auto px-4 md:px-6 py-0">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Machinery and Equipment
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
            We offer a wide range of machinery and equipment services, including
            repairs, maintenance, and custom fabrication to meet your specific
            needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {machinery.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform cursor-pointer transition duration-300"
              >
                {service.img && (
                  <div className="w-full h-40 sm:h-48 md:h-56 flex items-center justify-center bg-white">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Body;
