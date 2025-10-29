import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The AI chatbot made our trip to Paris so much easier. It recommended the perfect restaurants and helped us navigate the metro system.",
      author: "Sarah Johnson",
      role: "Tourist from USA"
    },
    {
      quote: "Since implementing the AI chatbot, our customer satisfaction scores have increased by 35% and our staff can focus on more complex guest needs.",
      author: "Michael Chen",
      role: "Hotel Manager"
    },
    {
      quote: "As a solo traveler, having the AI assistant available 24/7 gave me peace of mind and helped me discover amazing local experiences.",
      author: "Emma Rodriguez",
      role: "Digital Nomad"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What People Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from tourists and businesses who have experienced the benefits of our AI chatbot solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col h-full">
                <div className="mb-4 text-4xl text-blue-500">"</div>
                <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;