import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-full mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Logical Manufacturing Solution Ltd
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing durable, custom, and professional welding & fabrication
            services since 2010. We bring strength and design together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-blue-500 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              "Gates & Fencing",
              "Metal Doors & Windows",
              "Roofing Solutions",
              "Custom Fabrication",
              "Industrial Welding",
            ].map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-500" />
              +250785714552
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              logicalmanufacturingsolution@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              Kigali, Rwanda
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Logical Manufacturing Solution Ltd. All Rights
        Reserved.
      </div>
    </footer>
  );
}
