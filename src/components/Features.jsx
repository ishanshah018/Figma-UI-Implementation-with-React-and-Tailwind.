import React from 'react';
import protectImage from '../assets/protect.png';
import reportingImage from '../assets/reporting.png';
import shieldImage from '../assets/shield.png';

const Features = () => {
  return (
    <section className="py-12 sm:py-20 why-choose-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="section-badge">
            Features
          </div>
          <h2 className="section-title px-4">
            Why <span className="text-purple-gradient">choose</span> us
          </h2>
          <p className="section-subtitle px-4">
            We are the only service that provides all 3 services as 
            a packaged service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Timeline */}
          <div className="features-timeline order-2 lg:order-1">
            <div className="timeline-line"></div>
            
            {/* Feature 1 - Protect Personal Information */}
            <div className="timeline-item">
              <div className="timeline-indicator protect">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="feature-step">
                <h3>Protect Personal information</h3>
                <div className="feature-step-list">
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>The first step involves identifying all places where your personal information might be present.</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Once you've identified where your information is held, the next step is to contact the administrators of this platform</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Removing personal information is not a one-time task but requires ongoing vigilance.</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>There are professional services and tools available that specialize in personal information removal.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Detailed Reporting */}
            <div className="timeline-item">
              <div className="timeline-indicator report">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="feature-step">
                <h3>Detailed Reporting</h3>
                <div className="feature-step-list">
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>The first step involves identifying all places where your personal information might be present.</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Once you've identified where your information is held, the next step is to contact the administrators of this platform</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Removing personal information is not a one-time task but requires ongoing vigilance.</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>There are professional services and tools available that specialize in personal information removal.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Secure All Data */}
            <div className="timeline-item">
              <div className="timeline-indicator secure">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="feature-step">
                <h3>Secure All Data</h3>
                <div className="feature-step-list">
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>The first step involves identifying all places where your personal information might be present.</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Once you've identified where your information is held, the next step is to contact the administrators of this platform</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>Removing personal information is not a one-time task but requires ongoing vigilance.</p>
                  </div>
                  <div className="feature-step-item">
                    <div className="feature-step-icon">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>There are professional services and tools available that specialize in personal information removal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual mockups */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Protect Personal Information Visual */}
            <div className="mockup-container flex items-center justify-center p-4">
              <img 
                src={protectImage} 
                alt="Protect Personal Information" 
                className="w-full h-auto max-w-xs sm:max-w-md object-contain"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(67, 73, 255, 0.3))'
                }}
              />
            </div>

            {/* Detailed Reporting Visual */}
            <div className="mockup-container flex items-center justify-center p-4">
              <img 
                src={reportingImage} 
                alt="Detailed Reporting" 
                className="w-full h-auto max-w-xs sm:max-w-md object-contain"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.3))'
                }}
              />
            </div>

            {/* Secure All Data Visual */}
            <div className="mockup-container flex items-center justify-center p-4">
              <img 
                src={shieldImage} 
                alt="Secure All Data" 
                className="w-full h-auto max-w-xs sm:max-w-md object-contain"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(34, 197, 94, 0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
