import React from "react";
import { GraduationCap, Code, Wrench, Globe } from "lucide-react";

const About = () => {
  const skills = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Django",
    "MySQL",
    "PHP",
  ];

  const tools = ["Canva", "DaVinci Resolve", "GitHub", "VS Code"];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of continuous learning and sharing knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Skills */}
          <div className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/20 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-700 border border-yellow-500/30 text-yellow-400 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/20 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-gray-700 border border-yellow-500/30 text-yellow-400 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/20 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Languages</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">English</span>
                <div className="w-16 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Telugu</span>
                <div className="w-16 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
