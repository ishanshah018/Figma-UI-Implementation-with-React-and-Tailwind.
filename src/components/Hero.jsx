import React from 'react';
import cubeImage from '../assets/hero.png';

const Hero = () => {
return (
  <section 
    className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    style={{
      paddingTop: '100px',
      paddingBottom: '0px',
      background: 'linear-gradient(135deg, #0A0A0F 0%, #1A1A2E 50%, #16213E 100%)'
    }}
  >
    {/* Background circular elements - responsive positioning */}
    <div className="absolute top-32 left-4 sm:left-16 w-6 sm:w-8 h-6 sm:h-8 rounded-full opacity-80"
          style={{
            background: '#FF6B35',
          }}></div>
    
    <div className="absolute top-20 right-8 sm:right-32 w-4 sm:w-6 h-4 sm:h-6 rounded-full opacity-85"
          style={{
            background: '#4ECDC4',
          }}></div>
    
    <div className="absolute bottom-40 left-4 sm:left-20 w-8 sm:w-10 h-8 sm:h-10 rounded-full opacity-70"
          style={{
            background: '#45B7D1',
          }}></div>
    
    <div className="absolute bottom-32 right-6 sm:right-24 w-5 sm:w-7 h-5 sm:h-7 rounded-full opacity-75"
          style={{
            background: '#96CEB4',
          }}></div>
    
    <div className="absolute top-1/2 left-2 sm:left-8 w-4 sm:w-5 h-4 sm:h-5 rounded-full opacity-80"
          style={{
            background: '#FFEAA7',
          }}></div>
    
    <div className="absolute top-1/3 right-3 sm:right-12 w-7 sm:w-9 h-7 sm:h-9 rounded-full opacity-70"
          style={{
            background: '#DDA0DD',
          }}></div>

    {/* Blue glow effects around the center area - responsive */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #4349FF 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}></div>
    
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #7C3AED 0%, transparent 60%)',
            filter: 'blur(30px)'
          }}></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center text-sm text-gray-300 mb-8 relative"
          style={{
            width: '140px',
            height: '26px',
            borderRadius: '38px',
            background: 'linear-gradient(87.49deg, #090EDB 32.4%, #8D1EA2 90.21%)',
            padding: '1px'
          }}
        >
          <div
            className="inline-flex items-center w-full h-full"
            style={{
              borderRadius: '37px',
              background: '#0F0B15',
              gap: '10px',
              justifyContent: 'center',
              boxShadow: '0px 4px 50px 0px rgba(159, 100, 239, 0.4), inset 0px 0px 12px 0px rgba(255, 255, 255, 0.2)'
            }}
          >
            Secure your data
          </div>
        </div>

        {/* Main heading - responsive */}
        <h1 
          className="mb-6 text-center px-4"
          style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: 'clamp(32px, 8vw, 60px)',
            lineHeight: '120%',
            letterSpacing: '0%'
          }}
        >
          <span style={{color: '#F33CC0'}}>Identity-hub is a better way to</span><br />
          <span style={{color: '#4349FF'}}>achieve</span> <span 
            style={{
              color: '#4349FF',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            privacy
            <span 
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: '0',
                right: '0',
                height: '3px',
                background: 'linear-gradient(90deg, #4349FF 0%, #F33CC0 100%)',
                borderRadius: '2px'
              }}
            ></span>
          </span>
        </h1>

        {/* Subheading - responsive */}
        <p 
          className="mb-8 max-w-2xl mx-auto text-gray-400 px-4"
          style={{
            fontFamily: 'Poppins',
            fontWeight: 900,
            fontSize: 'clamp(16px, 4vw, 24px)',
            lineHeight: '140%',
            letterSpacing: '0%',
            textAlign: 'center'
          }}
        >
          Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
        </p>

        {/* CTA Buttons - responsive */}
        <div className="flex flex-col sm:flex-row justify-center mb-8 sm:mb-16 px-4 gap-4 sm:gap-2">
          <button 
            className="inline-flex items-center justify-center text-white transition-all duration-300 hover:scale-105 relative w-full sm:w-auto mx-auto sm:mx-0"
            style={{
              width: '100%',
              maxWidth: '150px',
              height: '48px',
              borderRadius: '15px',
              background: 'rgba(30, 30, 50, 0.8)',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(rgba(30, 30, 50, 0.8), rgba(30, 30, 50, 0.8)), linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Start free trial
          </button>
          <button 
            className="inline-flex items-center justify-center text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto mx-auto sm:mx-0"
            style={{
              width: '100%',
              maxWidth: '150px',
              height: '48px',
              borderRadius: '15px',
              background: 'linear-gradient(90deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
              border: 'none',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Use it Now
          </button>
        </div>

        {/* Main illustration - responsive */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Blue glow effects specifically around the cube - responsive */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 rounded-full opacity-25"
                style={{
                  background: 'radial-gradient(circle, #4349FF 0%, #7C3AED 30%, transparent 70%)',
                  filter: 'blur(50px)',
                  zIndex: 1
                }}></div>
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 h-40 sm:h-60 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, #8B5CF6 0%, transparent 60%)',
                  filter: 'blur(25px)',
                  zIndex: 2
                }}></div>

          {/* Central cube image with enhanced glow - responsive */}
          <div className="relative mx-auto w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 flex items-center justify-center z-10">
            <div className="absolute inset-0 rounded-lg opacity-30"
                  style={{
                    background: 'radial-gradient(circle, rgba(67, 73, 255, 0.3) 0%, transparent 70%)',
                    filter: 'blur(20px)'
                  }}></div>
            <img 
              src={cubeImage} 
              alt="3D Cube Illustration" 
              className="relative w-full h-full object-contain z-20"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(67, 73, 255, 0.5))'
              }}
            />
          </div>
          
          {/* Floating cards positioned responsively */}
          {/* One-time passcode - top left */}
          <div className="absolute top-8 sm:top-16 left-2 sm:left-8 backdrop-blur-md rounded-xl p-3 sm:p-4 text-xs sm:text-sm z-30"
                style={{
                  background: 'rgba(30, 30, 50, 0.85)',
                  border: '1px solid rgba(67, 73, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(67, 73, 255, 0.2)',
                  maxWidth: '200px'
                }}>
            <div className="flex items-center text-green-400 mb-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3"></span>
              <span className="text-xs sm:text-sm">One-time passcode</span>
            </div>
            <div className="text-gray-300 font-mono font-semibold text-xs sm:text-base">Kas3345-r32</div>
          </div>
          
          {/* Phone numbers - top right */}
          <div className="absolute top-12 sm:top-20 right-2 sm:right-8 backdrop-blur-md rounded-xl p-3 sm:p-4 text-xs sm:text-sm z-30"
                style={{
                  background: 'rgba(30, 30, 50, 0.85)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
                  maxWidth: '200px'
                }}>
            <div className="flex items-center text-purple-400 mb-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 sm:mr-3"></span>
              <span className="text-xs sm:text-sm">Phone numbers</span>
            </div>
            <div className="text-gray-300 font-mono font-semibold text-xs sm:text-base">+1 (456) 453-3456</div>
          </div>
          
          {/* Credit card - bottom left */}
          <div className="absolute bottom-8 sm:bottom-16 left-1 sm:left-4 backdrop-blur-md rounded-xl p-3 sm:p-4 text-xs sm:text-sm z-30"
                style={{
                  background: 'rgba(30, 30, 50, 0.85)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  boxShadow: '0 8px 32px rgba(245, 158, 11, 0.2)',
                  maxWidth: '200px'
                }}>
            <div className="flex items-center text-yellow-400 mb-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 sm:mr-3"></span>
              <span className="text-xs sm:text-sm">Credit card</span>
            </div>
            <div className="text-gray-300 font-mono font-semibold text-xs sm:text-base">123 456 789 1243</div>
          </div>
          
          {/* Email address - bottom right */}
          <div className="absolute bottom-12 sm:bottom-20 right-1 sm:right-4 backdrop-blur-md rounded-xl p-3 sm:p-4 text-xs sm:text-sm z-30"
                style={{
                  background: 'rgba(30, 30, 50, 0.85)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)',
                  maxWidth: '200px'
                }}>
            <div className="flex items-center text-blue-400 mb-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 sm:mr-3"></span>
              <span className="text-xs sm:text-sm">Email address</span>
            </div>
            <div className="text-gray-300 font-mono font-semibold text-xs sm:text-base">davidh@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Hero;
