import React from "react";
import Slider from "react-slick";
import banner1 from "../images/banner.jpeg";

// import banner from "../images/banner1.jpeg";
import Gate1 from "../images/modernGate2.jpeg";
import Gate2 from "../images/ModernGate.jpeg";
import Roofing1 from "../images/roofing1.jpeg";
import Roofing2 from "../images/roofing2.jpeg";
import Door1 from "../images/door1.jpeg";
import Door2 from "../images/door1.jpeg";
import Window1 from "../images/window1.jpeg";
import Window2 from "../images/window2.jpeg";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    { title: "Main Gate", img: Gate1 },
    { title: "Gates", img: Gate2 },
    { title: "Building", img: Roofing1 },
    { title: "Metal Fabrication", img: Roofing2 },
    { title: "Door", img: Door1 },
    { title: "Door", img: Door2 },
    { title: "Window", img: Window1 },
    { title: "Window", img: Window2 },
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
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-lg transition">
                Get Started
              </button>
              <button
                onClick={scrollToServices}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold shadow-lg transition"
              >
                View Services
              </button>
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
              <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-2">
                  <h3 className="text-lg text-white text-center font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}

export default Body;
