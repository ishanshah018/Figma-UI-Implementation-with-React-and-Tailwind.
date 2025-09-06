import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      period: "",
      features: [
        "Type of threat",
        "Online presence",
        "Access to all modules",
        "Notability"
      ],
      button: "Get Started",
      buttonClass: "btn btn-outline btn-md w-full",
      popular: false
    },
    {
      name: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      period: "",
      features: [
        "Type of threat",
        "Online presence", 
        "Access to all modules",
        "Notability",
        "Optimize existing websites"
      ],
      button: "Get Started",
      buttonClass: "btn btn-gradient btn-md w-full",
      popular: true
    },
    {
      name: "Enterprise",
      description: "AI chatbot, personalized recommendations",
      price: "20.99",
      period: "",
      features: [
        "Type of threat",
        "Online presence",
        "Access to all modules", 
        "Notability"
      ],
      button: "Get Started",
      buttonClass: "btn btn-outline btn-md w-full",
      popular: false
    }
  ];

  return (
    <section className="section bg-dark-900" id="pricing">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block text-sm text-gray-400 uppercase tracking-wider mb-4">
            PRICING
          </div>
          <h2 className="heading-section text-white">
            Our <span className="text-purple-gradient">Pricing</span> Package
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'featured' : ''} group`}
            >
              <div className="space-y-6">
                {/* Plan Name */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-gray-400 text-lg">$</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className={plan.buttonClass}>
                  {plan.button}
                </button>

                {/* Features */}
                <div className="space-y-3 pt-4 border-t border-gray-700">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-button text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
