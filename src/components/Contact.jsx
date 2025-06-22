import React from 'react';
import { Mail, Instagram, MessageCircle, Linkedin, Twitter, Facebook, Phone } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: MessageCircle, label: 'Telegram', href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-500' },
    { icon: Twitter, label: 'X.com', href: '#', color: 'hover:text-gray-300' },
    { icon: Facebook, label: 'Facebook Page', href: '#', color: 'hover:text-blue-500' },
    { icon: Phone, label: 'WhatsApp Channel', href: '#', color: 'hover:text-green-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your programming journey or collaborate on exciting projects?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:tirupathistr@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
                      tirupathistr@gmail.com
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're looking to hire me for a project, collaborate on educational content, 
                  or need guidance on your programming journey, I'd love to hear from you!
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center p-4 bg-gray-800 border border-yellow-500/20 rounded-xl hover:bg-gray-700 transition-all duration-300"
                    >
                      <IconComponent className={`w-6 h-6 mr-3 text-gray-300 ${social.color} transition-colors duration-200`} />
                      <span className="font-medium text-gray-300">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="text-black/80 mb-6 leading-relaxed">
                Join thousands of students who have transformed their careers through my courses and content. 
                Let's build something amazing together!
              </p>
              <div className="space-y-4">
                <button className="w-full bg-black text-yellow-400 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors duration-300">
                  Start Learning with Me
                </button>
                <button className="w-full border-2 border-black text-black py-3 rounded-xl font-semibold hover:bg-black hover:text-yellow-400 transition-all duration-300">
                  Hire Me for Projects
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">What I Offer</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-white">Custom Development</h4>
                    <p className="text-gray-300">Python, React, Django web applications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-white">Educational Content</h4>
                    <p className="text-gray-300">Course creation and tech tutorials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-white">Mentoring</h4>
                    <p className="text-gray-300">One-on-one guidance for aspiring developers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;