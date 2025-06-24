import React from "react";
import { Heart, Code2 } from "lucide-react";
import { images } from "../assets/images";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <img
                  src={images.profile}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-bold text-xl">Tirupathi Rao</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Passionate educator and developer making programming accessible in
              Telugu. Building the future, one student at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#about"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#courses"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Courses
              </a>
              <a
                href="#content"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Content
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-400">
              Resources
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                YouTube Channel
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="mailto:tirupathistr@gmail.com"
                className="block text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-yellow-500 mx-2 fill-current" />
              <span>by Tirupathi Rao Sesapu</span>
            </div>
            <div className="text-gray-400">© 2025 All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
