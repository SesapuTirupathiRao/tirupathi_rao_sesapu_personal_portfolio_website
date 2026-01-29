import React from "react";
import { GraduationCap, Code, Wrench, Globe, Briefcase, Server, Database } from "lucide-react";

const About = () => {
  const skillsData = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Material UI"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "Django"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "Postman", "Vercel"],
    },
  ];

  // Skills already exist as skillsData

  const experienceData = [
    {
      role: "Associate Software Engineer",
      company: "Abilio IT Solutions",
    },
    {
      role: "Founding Tech Lead",
      company: "Harsewa.in",
    },
    {
      role: "Python Full Stack Trainer",
      company: "Gantasoft & Code Kreations",
    }
  ];


  const languageData = [
    { name: "Telugu", level: "Native", percent: 100 },
    { name: "English", level: "Professional", percent: 90 },
  ];

  const tools = ["Canva", "DaVinci Resolve", "GitHub", "VS Code"];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto bg-gray-800 border border-yellow-500/30 rounded-3xl p-3 mb-5 shadow-sm">
            A journey of continuous learning and sharing knowledge
          </p>
          <p className="text-xl text-gray-300 w-full mx-auto bg-gray-800 border border-yellow-500/30 rounded-3xl p-5 mb-5 shadow-sm text-justi">
            I am a Full Stack Developer and Tech Educator with a strong passion for building real-world applications and helping students learn programming in a simple and practical way. I have experience working with both frontend and backend technologies, and I enjoy creating complete end-to-end projects that solve real problems. Along with development, I actively teach and mentor students through structured courses, project-based learning, and Telugu-language tutorials to make technical concepts easy to understand for beginners.
          </p>
          <p className="text-xl text-gray-300 w-full mx-auto bg-gray-800 border border-yellow-500/30 rounded-3xl p-5 shadow-sm">
            Currently, I am working as an Associate Software Engineer and also leading the technical development of Harsewa.in, a platform focused on government schemes, scholarships, jobs, and public services. My goal is to continuously grow as a developer while empowering more students to build strong careers in the IT industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">

          {/* Skills */}
          {skillsData.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/20 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 border border-yellow-500/30 text-yellow-400 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Experience */}
          <div className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/20 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-black" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>

            <ul className="space-y-3">
              {experienceData.map((exp, index) => (
                <li key={index} className="text-sm text-gray-300">
                  <span className="text-yellow-400 font-medium">{exp.role}</span>
                  <br />
                  <span className="text-gray-400 text-xs">{exp.company}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/20 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-black" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>

            <div className="space-y-4">
              {languageData.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">
                      {lang.name} — {lang.level}
                    </span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${lang.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section >
  );
};

export default About;
