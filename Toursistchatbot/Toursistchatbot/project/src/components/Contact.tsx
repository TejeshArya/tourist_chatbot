import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to enhance tourist satisfaction with our AI chatbot? Contact us to learn more about implementation options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our AI Solution?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <span>Easy integration with existing tourism platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <span>Customizable to match your brand and specific needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <span>Continuous learning and improvement from interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <span>Comprehensive analytics and insights dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-xl">✓</span>
                  <span>Dedicated support team for implementation and maintenance</span>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-lg mb-4">Ready for a demo?</p>
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;