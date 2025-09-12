import React, { useRef } from 'react';

const Services = () => {
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const services = [
    {
      title: "Personal Information removal",
      description: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Cloaking Alias Profiles", 
      description: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Virtual identities Security",
      description: "Lets users quickly find answers to their questions without having to search through multiple sources.", 
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      gradient: "from-green-500 to-green-700"
    }
  ];

  return (
    <section 
      id="services"
      className="ocean-section py-12 sm:py-20"
      style={{
        background: 'linear-gradient(135deg, #16213E 0%, #1A1A2E 50%, #0A0A0F 100%)'
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div 
            className="inline-flex items-center justify-center text-sm text-gray-300 mb-6"
            style={{
              width: '84px',
              height: '26px',
              gap: '10px',
              borderRadius: '38px',
              border: '1px solid',
              borderImage: 'linear-gradient(87.49deg, #090EDB 32.4%, #8D1EA2 90.21%) 1',
              background: '#0F0B15',
              boxShadow: '0px 4px 50px 0px rgba(159, 100, 239, 0.4), inset 0px 0px 12px 0px rgba(255, 255, 255, 0.2)'
            }}
          >
            Services
          </div>
          <h2 
            className="mb-4 px-4"
            style={{
              width: '100%',
              maxWidth: '430px',
              height: 'auto',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: 'clamp(28px, 6vw, 40px)',
              lineHeight: '120%',
              letterSpacing: '0%',
              textAlign: 'center',
              margin: '0 auto',
              color: 'white',
            }}
          >
            See our services for<br />
            secure your <span 
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '40px',
                lineHeight: '120%',
                letterSpacing: '0%',
                textAlign: 'center',
                background: 'linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >Data</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
          </p>
        </div>

        {/* Services grid - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative mx-auto">
              <div 
                ref={cardRefs[index]}
                className="service-card relative p-6 sm:p-8 transition-all duration-300"
                style={{
                  width: '100%',
                  maxWidth: '424px',
                  height: 'auto',
                  minHeight: '370px',
                  borderRadius: '32px',
                  border: '2px solid',
                  borderImage: 'linear-gradient(87.95deg, rgba(9, 14, 219, 0.66) -15.78%, rgba(231, 61, 196, 0.66) 102.06%) 1',
                }}
                onMouseMove={(e) => handleMouseMove(e, cardRefs[index])}
              >
                <div className={`service-icon w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                
                <h3 className="service-title text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="service-text text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <button className="service-button inline-flex items-center text-purple-400 hover:text-purple-300 font-medium">
                  Explore More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
