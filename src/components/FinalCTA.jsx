import React from 'react';

const FinalCTA = () => {
  return (
    <section className="ocean-section py-12 sm:py-20 bg-dark-900">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
          <h2 
            className="text-white px-4"
            style={{
              width: '100%',
              maxWidth: '691px',
              height: 'auto',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: 'clamp(32px, 8vw, 60px)',
              lineHeight: '120%',
              letterSpacing: '0%',
              textAlign: 'center',
              background: '#FFFFFF',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0 auto'
            }}
          >
            Be part of the future of
            <br />
            IdentityHub
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg px-4">
            Unleash the power of AI within Brainwave. Upgrade your 
            productivity with Brainwave, the open AI chat app.
          </p>
          
          <button className="btn btn-gradient btn-lg w-full sm:w-auto max-w-xs mx-auto">
            Start free trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
