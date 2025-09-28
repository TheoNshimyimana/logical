import React from "react";
import Slider from "react-slick";
// import banner from "../images/banner1.jpeg";
import banner1 from "../images/banner.jpeg";
import Window1 from "../images/window1.jpeg";
import Navbar from "../Navbar";
import Footer from "./Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Machinery
import JuiceMaker from "../images/machinery/juiceMaker.jpeg";
import GrainGrinder from "../images/machinery/grain-grinder.png";
import ChaffCutter from "../images/machinery/chaff-cutter.jpeg";
import Potato from "../images/machinery/potato.jpeg";
import Rice from "../images/machinery/rice.jpeg";
import Grinder from "../images/machinery/grinder.jpeg";
import Ground from "../images/machinery/groundnuts.png";
import Pea from "../images/machinery/small-pea-nuts.jpg";


// DoorClosed, windows,gates and roofing

import Roof1 from "../images/weldings/roof1.jpeg";
import Roof2 from "../images/weldings/roof1.jpg";
import Gate11 from "../images/weldings/gate11.jpeg";
import Gate2 from "../images/weldings/gate2.jpeg";
import SlidingDoor from "../images/weldings/sliding-door.jpeg";
import CustomDoor from "../images/weldings/custom-door.jpeg";
import SlidingWin from "../images/weldings/sliding-win.jpeg";
import CustomWin from "../images/weldings/custom-win.jpeg";

// Custom fabrications
import Bed1 from "../images/customs/bed1.png";
import Bed2 from "../images/customs/bed2.jpeg";
import Bed3 from "../images/customs/bed3.jpeg";
import Bed4 from "../images/customs/bed4.jpeg";
import Cupboad1 from "../images/customs/cupboard1.jpeg";
import Cupboad2 from "../images/customs/cupboard2.jpeg";
import Chair1 from "../images/customs/chair1.jpeg";
import Chair2 from "../images/customs/chair2.jpeg";
import Piptre2 from "../images/customs/pptre1.jpeg";
import Piptre1 from "../images/customs/pptre2.jpeg";
import Guide1 from "../images/customs/guide1.jpeg";
import Guide2 from "../images/customs/guide2.jpeg";
import Guide3 from "../images/customs/guide3.png";
import Rack1 from "../images/customs/rack1.jpeg";
import Rack2 from "../images/customs/rack2.jpeg";
import Gate from "../images/customs/gate1.jpeg";



export default function Services() {
  // Services Data
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
  const weldingServices = [
    {
      img: Roof1,
      title: "Gates",
      description:
        "Durable and elegant main gates, modern gates, and industrial security gates.",
    },
    {
      img: Roof2,
      title: "Roofing",
      description:
        "Strong and long-lasting roofing structures for residential and industrial projects.",
    },
    {
      img: Gate11,
      title: "Doors",
      description:
        "High-quality welded doors designed for both safety and style.",
    },
    {
      img: Gate2,
      title: "Doors",
      description:
        "High-quality welded doors designed for both safety and style.",
    },
    {
      img: SlidingDoor,
      title: "Doors",
      description:
        "High-quality welded doors designed for both safety and style.",
    },
    {
      img: CustomDoor,
      title: "Doors",
      description:
        "High-quality welded doors designed for both safety and style.",
    },
    {
      img: SlidingWin,
      title: "Doors",
      description:
        "High-quality welded doors designed for both safety and style.",
    },
    {
      img: CustomWin,
      title: "Doors",
      description:
        "High-quality welded doors designed for both safety and style.",
    },
  ];

  const customServices = [
    {
      img: Bed1,
      title: "Modern Beds",
      description:
        "Durable and stylish welded beds designed for homes, offices, and factories.",
    },
    {
      img: Bed2,
      title: "Luxury Custom Beds",
      description:
        "Tailor-made beds crafted to your specifications for comfort and elegance.",
    },
    {
      img: Bed3,
      title: "Industrial Beds",
      description:
        "Robust welded beds suitable for heavy-duty use in industrial settings.",
    },
    {
      img: Bed4,
      title: "Adjustable Beds",
      description:
        "Customizable beds offering flexibility and ergonomic comfort.",
    },
    {
      img: Cupboad1,
      title: "Custom Cupboards",
      description:
        "Personalized welded cupboards designed to maximize storage and aesthetics.",
    },
    {
      img: Cupboad2,
      title: "Modular Cupboards",
      description:
        "Flexible cupboard solutions tailored to your space and functional needs.",
    },
    {
      img: Chair1,
      title: "Office Chairs",
      description:
        "Ergonomic welded chairs designed for comfort and long-term use.",
    },
    {
      img: Chair2,
      title: "Custom Dining Chairs",
      description:
        "Stylish and durable chairs tailored to your home or restaurant.",
    },
    {
      img: Piptre1,
      title: "Standard Classroom Desks",
      description:
        "Durable and ergonomic welded desks designed for schools and training centers.",
    },
    {
      img: Piptre2,
      title: "Adjustable Classroom Desks",
      description:
        "Customizable desks with high-precision welding for comfort and long-term use in educational spaces.",
    },
    {
      img: Guide1,
      title: "Safety Guiderails",
      description:
        "Custom welded guiderails ensuring safety and durability in any environment.",
    },
    {
      img: Guide2,
      title: "Staircase Guiderails",
      description:
        "Stylish and secure guiderails designed for residential and commercial spaces.",
    },
    {
      img: Guide3,
      title: "Outdoor Guiderails",
      description:
        "Weather-resistant guiderails for outdoor and industrial applications.",
    },
    {
      img: Rack1,
      title: "Store Racks",
      description:
        "Custom racks designed to organize and store materials efficiently.",
    },
    {
      img: Rack2,
      title: "Display Shelves",
      description:
        "Tailor-made shelves ideal for showcasing products or organizing spaces.",
    },
    {
      img: Gate,
      title: "Custom Gates",
      description:
        "Durable and elegant welded gates for residential and industrial properties.",
    },
  ];


  

  return (
    <>
      <Navbar />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section
          className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-bold">
              Logical Manufacturing Solution Ltd
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl md:max-w-2xl mx-auto">
              Delivering professional welding, fabrication, and repair services
              with precision and durability since 2010.
            </p>
          </div>
        </section>

        {/* Section: Machinery and Equipment */}
        <section className="mx-auto px-4 md:px-6 py-10 ">
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
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
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
                  <p className="hidden sm:block mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Gates, Doors, Windows & Roofing */}
        <section className="px-4 md:px-6 py-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Gates, Doors, Windows & Roofing
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-center">
            We provide strong gates, stylish doors, secure windows, and durable
            roofing—custom-built for homes, businesses, and industries with a
            focus on quality, safety, and long-lasting performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {weldingServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
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

        {/* Section: Custom Work */}
        <section className="bg-gray-950 py-8">
          <div className="mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Custom Fabrication
            </h2>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto text-center">
              We provide high-quality, durable custom fabrication services,
              including beds, chairs, cupboards, racks, gates, guiderails, and
              classroom desks — all crafted to meet your exact specifications.
            </p>

            {/* Slider Settings */}
            {(() => {
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
                <Slider {...settings}>
                  {customServices.map((service, index) => (
                    <div key={index} className="px-2 sm:px-3">
                      <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col">
                        {service.img && (
                          <div className="w-full h-48 sm:h-56 flex items-center justify-center bg-white">
                            <img
                              src={service.img}
                              alt={service.title}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        )}
                        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                          <h3 className="text-lg md:text-xl font-semibold">
                            {service.title}
                          </h3>
                          <p className="hidden sm:block mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              );
            })()}
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );

}
