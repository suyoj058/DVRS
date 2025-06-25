
import { Search, CheckCircle, Car, Key } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-orange-500" />,
      title: "Search",
      description: "Browse our extensive collection of quality used cars and find the perfect match for your needs."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
      title: "Choose",
      description: "Select from our verified vehicles, all inspected for quality and reliability."
    },
    {
      icon: <Car className="w-12 h-12 text-orange-500" />,
      title: "Inspect",
      description: "Schedule a viewing or inspection to ensure the vehicle meets your expectations."
    },
    {
      icon: <Key className="w-12 h-12 text-orange-500" />,
      title: "Drive",
      description: "Complete the paperwork and drive away in your new car today!"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HOW IT <span className="text-orange-500">WORKS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your dream car has never been easier. Follow these simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
