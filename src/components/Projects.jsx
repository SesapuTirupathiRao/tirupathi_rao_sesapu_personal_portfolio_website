import React from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  CheckSquare,
  Landmark,
  Building,
  Globe,
  Users,
  TrendingUp,
  UserPlus,
  ExternalLink,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Code Kreations",
      description:
        "Responsive training institute website built with HTML, CSS, JavaScript, PHP, and MySQL, featuring course listings, batch schedules, contact form, and student interaction tools.",
      tech: "HTML + CSS + Javascript",
      icon: Landmark,
      color: "from-yellow-500 to-yellow-600",
      link: "http://codekreations.in/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 border border-yellow-500/20 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${project.color} p-6`}>
                  <IconComponent className="w-12 h-12 text-black mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-black/20 text-black rounded-full text-sm font-medium">
                    {project.tech}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <Link
                    to={project.link}
                    target="_blank"
                    className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-200 group-hover:translate-x-1"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
