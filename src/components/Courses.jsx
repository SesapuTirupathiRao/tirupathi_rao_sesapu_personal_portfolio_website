import React from "react";
import { BookOpen, Clock, Users, Award } from "lucide-react";
import { images } from "../assets/images";

const Courses = () => {
  const courses = [
    {
      id: 1,
      type: "full", // full‑length tutorials
      title: "Python Tkinter Projects – Full Tutorials (Telugu)",
      desc: "Complete, end‑to‑end project videos. Each entry is a deep‑dive tutorial.",
      playlistId: "PLsbKQKRxPQpeniC8LnF3olTFU8B69PWIe",
      thumb: images.scientificCalculatorFullPart,
    },
    {
      id: 2,
      type: "short", // short versions / highlights
      title: "Python Tkinter Projects - Step-by-Step (Telugu)",
      desc: "Condensed versions or highlights of each project for rapid revision.",
      playlistId: "PLsbKQKRxPQpdMZTAkoy5DF9sOpg81W3mG",
      thumb: images.scientificCalculatorParts,
    },
  ];

  return (
    <section id="playlists" className="py-20 bg-[#0a1128] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Python Project Playlists
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full tutorials ✦ Quick wins – pick the style that fits your
            schedule.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {courses.map((pl) => (
            <div
              key={pl.id}
              className="bg-gray-900 border border-yellow-500/20 rounded-2xl p-6 shadow-lg
                         hover:shadow-yellow-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                {pl.title}
              </h3>

              {/* responsive 16:9 iframe */}
              <div className="aspect-video mb-4">
                <img src={pl.thumb} alt={pl.title} className="w-full rounded" />
              </div>

              <p className="text-gray-300 mb-6">{pl.desc}</p>

              <a
                href={`https://www.youtube.com/playlist?list=${pl.playlistId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black font-semibold
                           px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                View on YouTube
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
