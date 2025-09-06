import React from 'react';
import manImage from '../assets/man.png';

const Testimonials = () => {
  return (
    <section 
      className="py-12 sm:py-20"
      style={{
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #16213E 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
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
            Testimonials
          </div>
          <h2 
            className="mb-4 px-4"
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: 'clamp(28px, 6vw, 40px)',
              lineHeight: '120%',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'white'
            }}
          >
            What's our user <span 
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '40px',
                lineHeight: '120%',
                letterSpacing: '0%',
                background: 'linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >says</span>
            <br />
            about us
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Arrows - responsive */}
          <button 
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899)',
              border: 'none'
            }}
          >
            <svg className="w-4 sm:w-6 h-4 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899)',
              border: 'none'
            }}
          >
            <svg className="w-4 sm:w-6 h-4 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card - responsive */}
          <div 
            className="mx-6 sm:mx-12 lg:mx-16 p-6 sm:p-8 lg:p-12 text-left"
            style={{
              background: 'rgba(30, 30, 50, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              {/* User Avatar */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div 
                  className="w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <img 
                    src={manImage} 
                    alt="David J. Karem" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                {/* User Info */}
                <div className="mb-4 sm:mb-6">
                  <h3 
                    className="text-white mb-1"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 600,
                      fontSize: 'clamp(18px, 4vw, 24px)',
                      lineHeight: '130%'
                    }}
                  >
                    David J. Karem
                  </h3>
                  <p 
                    className="text-gray-400"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 3vw, 16px)',
                      lineHeight: '150%'
                    }}
                  >
                    Businessmen • 1 day ago
                  </p>
                </div>

                {/* Testimonial Text */}
                <blockquote 
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 3.5vw, 18px)',
                    lineHeight: '160%',
                    letterSpacing: '0.02em'
                  }}
                >
                  Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.
                </blockquote>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-3 mt-6 sm:mt-8">
              <button className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-500 rounded-full opacity-60"></button>
              <button 
                className="w-2 sm:w-3 h-2 sm:h-3 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899)'
                }}
              ></button>
              <button className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-500 rounded-full opacity-60"></button>
              <button className="w-2 sm:w-3 h-2 sm:h-3 bg-gray-500 rounded-full opacity-60"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
