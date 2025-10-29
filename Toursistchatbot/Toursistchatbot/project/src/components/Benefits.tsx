import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Tourism Industry</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Our AI chatbot solution delivers significant advantages for tourism businesses and destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">For Tourists</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Instant access to accurate local information</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Personalized recommendations based on preferences</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>24/7 assistance throughout the journey</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Overcome language barriers with multilingual support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Discover hidden gems and local favorites</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Reduce operational costs for customer service</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Collect valuable data on tourist preferences</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Improve customer satisfaction and loyalty</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Scale customer support without increasing staff</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">✓</span>
                <span>Promote local attractions and increase revenue</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;