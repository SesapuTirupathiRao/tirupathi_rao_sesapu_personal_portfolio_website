import React from 'react';
import { Calculator, CheckSquare, Building, Globe, Users, TrendingUp, UserPlus, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Scientific Calculator',
      description: 'Advanced calculator built with Python Tkinter featuring scientific functions and clean UI.',
      tech: 'Python Tkinter',
      icon: Calculator,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'To-Do List App',
      description: 'Task management application with JSON storage for persistent data handling.',
      tech: 'Tkinter + JSON',
      icon: CheckSquare,
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      title: 'Hostel Management System',
      description: 'Complete management solution for hostels with database integration.',
      tech: 'Tkinter + MySQL',
      icon: Building,
      color: 'from-yellow-600 to-yellow-700'
    },
    {
      title: 'Advanced Calculator Website',
      description: 'Web-based calculator with modern design and responsive layout.',
      tech: 'HTML, CSS, JS',
      icon: Globe,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Business Management App',
      description: 'Multi-page business application with routing and state management.',
      tech: 'React Router',
      icon: Users,
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      title: 'Expense Tracker',
      description: 'Feature-rich expense tracking with editing, filtering, charts, and export functionality.',
      tech: 'React + Charts',
      icon: TrendingUp,
      color: 'from-yellow-600 to-yellow-700'
    },
    {
      title: 'Multi-Step Signup',
      description: 'Beautiful multi-step user registration form with validation.',
      tech: 'React + Tailwind',
      icon: UserPlus,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="bg-gray-900 border border-yellow-500/20 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className={`bg-gradient-to-r ${project.color} p-6`}>
                  <IconComponent className="w-12 h-12 text-black mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <span className="px-3 py-1 bg-black/20 text-black rounded-full text-sm font-medium">
                    {project.tech}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <button className="flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-200 group-hover:translate-x-1">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
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