import React from 'react';
import { MessageSquare, Map, Clock, Globe, Star, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare size={40} className="text-blue-500" />,
      title: "AI-Powered Conversations",
      description: "Natural language processing that understands tourist queries and provides helpful responses."
    },
    {
      icon: <Map size={40} className="text-blue-500" />,
      title: "Smart Recommendations",
      description: "Personalized suggestions for attractions, restaurants, and activities based on preferences."
    },
    {
      icon: <Clock size={40} className="text-blue-500" />,
      title: "24/7 Availability",
      description: "Round-the-clock assistance for tourists, regardless of time zones or holidays."
    },
    {
      icon: <Globe size={40} className="text-blue-500" />,
      title: "Multilingual Support",
      description: "Communicate in multiple languages to assist international tourists effectively."
    },
    {
      icon: <Star size={40} className="text-blue-500" />,
      title: "Personalized Experiences",
      description: "Tailored recommendations based on tourist preferences and previous interactions."
    },
    {
      icon: <Users size={40} className="text-blue-500" />,
      title: "Reduced Wait Times",
      description: "Instant responses eliminate the need for tourists to wait for human assistance."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Enhancing Tourist Satisfaction with AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our conversational AI chatbot revolutionizes the tourism experience with intelligent assistance and personalized recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;