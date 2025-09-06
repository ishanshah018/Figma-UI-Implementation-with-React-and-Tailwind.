import React from 'react';

const Services = () => {
  return (
    <section 
      className="section"
      style={{
        background: 'linear-gradient(135deg, #16213E 0%, #1A1A2E 50%, #0A0A0F 100%)'
      }}
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-purple-500/50 text-sm text-gray-300 mb-6">
            Services
          </div>
          <h2 className="heading-section mb-4">
            See our services for<br />
            secure your <span className="text-purple-gradient">Data</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Personal Information removal */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-900/90 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                Personal Information removal
              </h3>
              
              <p className="text-gray-400 mb-6">
                Lets users quickly find answers to their questions without having to search through multiple sources.
              </p>
              
              <button className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium">
                Explore More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cloaking Alias Profiles */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-900/90 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                Cloaking Alias Profiles
              </h3>
              
              <p className="text-gray-400 mb-6">
                Lets users quickly find answers to their questions without having to search through multiple sources.
              </p>
              
              <button className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium">
                Explore More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Virtual identities Security */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-900/90 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                Virtual identities Security
              </h3>
              
              <p className="text-gray-400 mb-6">
                Lets users quickly find answers to their questions without having to search through multiple sources.
              </p>
              
              <button className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium">
                Explore More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
