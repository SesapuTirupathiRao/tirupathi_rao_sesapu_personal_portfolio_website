import React from "react";
import { ChevronDown, Github, Youtube, Instagram } from "lucide-react";
import { images } from "../assets/images";

const Hero = () => {
  return (
    <section className="min-h-screen pb-10 flex items-center justify-center relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-56 mt-14 h-56 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black text-4xl font-bold shadow-xl shadow-yellow-500/30">
            <img
              src={images.profile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Tirupathi Rao
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
              Sesapu
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-gray-300">
            <span className="px-4 py-2 bg-gray-800 border border-yellow-500/30 rounded-full shadow-sm">
              Python Developer
            </span>
            <span className="px-4 py-2 bg-gray-800 border border-yellow-500/30 rounded-full shadow-sm">
              Content Creator
            </span>
            <span className="px-4 py-2 bg-gray-800 border border-yellow-500/30 rounded-full shadow-sm">
              Tech Educator
            </span>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate self-taught programmer and educator from India,
            helping students learn
            <span className="text-yellow-400 font-semibold">
              {" "}
              Python, Tkinter, Django, and React
            </span>{" "}
            in Telugu. I build real-world projects and simplify tech learning.
          </p>

          <div className="flex flex-col sm:mb-20 sm:flex-row sm:justify-center sm:space-x-6 space-y-4 sm:space-y-0 pt-8 items-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Learning with Me
            </a>

            <div className="flex space-x-4">
              <a
                href="https://github.com/TirupathiRaoSesapu"
                target="_blank"
                className="w-12 h-12 bg-gray-800 border border-yellow-500/30 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
              >
                <Github className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href="https://www.youtube.com/@strtelugu"
                target="_blank"
                className="w-12 h-12 bg-gray-800 border border-yellow-500/30 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
              >
                <Youtube className="w-6 h-6 text-red-500" />
              </a>
              <a
                href="https://www.instagram.com/tirupathi_rao_sesapu/"
                target="_blank"
                className="w-12 h-12 bg-gray-800 border border-yellow-500/30 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:shadow-yellow-500/20 transition-shadow duration-300"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
