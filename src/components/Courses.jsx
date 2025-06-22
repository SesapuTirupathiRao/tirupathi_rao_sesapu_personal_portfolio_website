import React from 'react';
import { BookOpen, Clock, Users, Award } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: '100-Day Python Full Stack Course',
      description: 'Complete Python development from basics to advanced full-stack applications.',
      duration: '100 Days',
      students: '500+',
      level: 'Beginner to Advanced',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: '60-Day Python + DSA',
      description: 'Master Python programming with Data Structures and Algorithms.',
      duration: '60 Days',
      students: '300+',
      level: 'Intermediate',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      title: '15-Day React with Redux',
      description: 'Build modern web applications with React and state management.',
      duration: '15 Days',
      students: '200+',
      level: 'Intermediate',
      color: 'from-yellow-600 to-yellow-700'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Courses I Created</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive learning paths taught via YouTube and Live Classes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-black border border-yellow-500/20 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`bg-gradient-to-r ${course.color} h-2`}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-gray-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-5 h-5 mr-3 text-gray-400" />
                    <span>{course.students} Students</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award className="w-5 h-5 mr-3 text-gray-400" />
                    <span>{course.level}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Stats */}
        <div className="bg-gradient-to-r from-gray-800 to-black border border-yellow-500/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Teaching Impact</h3>
            <p className="text-gray-300">Making tech education accessible in Telugu</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-gray-300">Students Taught</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-gray-300">Comprehensive Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-gray-300">Live Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;