import React from "react";
import { Youtube, BookOpen, BarChart3, Calendar } from "lucide-react";

const Content = () => {
  return (
    <section id="content" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            YouTube & Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating educational content to help thousands of students learn
            programming
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* YouTube Section */}
          <div className="bg-gray-900 border border-yellow-500/20 rounded-2xl shadow-lg p-8 hover:shadow-xl hover:shadow-yellow-500/10 transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mr-4">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  STR Telugu Channel
                </h3>
                <p className="text-gray-300">Educational Programming Content</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-800 border border-yellow-500/20 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  12K+
                </div>
                <div className="text-sm text-gray-300">Subscribers</div>
              </div>
              <div className="text-center p-4 bg-gray-800 border border-yellow-500/20 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  200+
                </div>
                <div className="text-sm text-gray-300">Math Videos</div>
              </div>
              <div className="text-center p-4 bg-gray-800 border border-yellow-500/20 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  Weekly
                </div>
                <div className="text-sm text-gray-300">Python Projects</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                <span>Weekly Python project tutorials</span>
              </div>
              <div className="flex items-center text-gray-300">
                <BarChart3 className="w-5 h-5 mr-3 text-gray-400" />
                <span>Mathematics problem solving videos</span>
              </div>
            </div>

            <a
              href="https://www.youtube.com/@strtelugu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300">
                Visit Channel
              </button>
            </a>
          </div>

          {/* Blog Section */}
          <div className="bg-gray-900 border border-yellow-500/20 rounded-2xl shadow-lg p-8 hover:shadow-xl hover:shadow-yellow-500/10 transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  STR EduTuts Blog
                </h3>
                <p className="text-gray-300">Programming Tutorials & Tips</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-800 border border-yellow-500/20 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  130+
                </div>
                <div className="text-sm text-gray-300">Blog Posts</div>
              </div>
              <div className="text-center p-4 bg-gray-800 border border-yellow-500/20 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  100-200
                </div>
                <div className="text-sm text-gray-300">Daily Readers</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-3 text-gray-400" />
                <span>Python, Django, React guides for all levels</span>
              </div>
              <div className="flex items-center text-gray-300">
                <BarChart3 className="w-5 h-5 mr-3 text-gray-400" />
                <span>Weekly tips aligned with STR Telugu videos</span>
              </div>
            </div>
            <a
              href="https://stredututs.blogspot.com/p/blog-page.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors duration-300">
                Read Blog
              </button>
            </a>
          </div>
        </div>

        {/* Content Creation Impact */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-black border border-yellow-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Making Learning Accessible
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              I believe education should be accessible to everyone. Through my
              YouTube channel and blog, I create content in Telugu to help
              students in my region learn programming and advance their careers.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">Telugu</div>
                <div className="text-gray-300">Primary Language</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">Free</div>
                <div className="text-gray-300">Always Accessible</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">
                  Practical
                </div>
                <div className="text-gray-300">Real Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
