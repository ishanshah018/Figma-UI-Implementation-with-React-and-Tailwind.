import React from 'react';

const Features = () => {
  return (
    <section className="py-20 why-choose-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="section-badge">
            Features
          </div>
          <h2 className="section-title">
            Why <span className="text-purple-gradient">choose</span> us
          </h2>
          <p className="section-subtitle">
            We are the only service that provides all 3 services as 
            a packaged service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
          <div className="space-y-8 order-1 lg:order-2">
            {/* Protect Personal Information Visual */}
            <div className="mockup-container">
              <div className="space-y-4">
                <div className="mockup-element wide"></div>
                <div className="mockup-element medium"></div>
                <div className="flex items-center justify-between">
                  <div className="mockup-element narrow"></div>
                  <button className="delete-button">Delete</button>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {/* Detailed Reporting Visual */}
            <div className="mockup-container">
              <div className="grid grid-cols-2 gap-3">
                <div className="info-card">
                  <div className="info-card-content">
                    <div className="info-card-icon user">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="info-card-text">
                      <div className="info-card-label">Username</div>
                      <div className="info-card-value">+1 (456) 453-3456</div>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-content">
                    <div className="info-card-icon phone">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div className="info-card-text">
                      <div className="info-card-label">Phone numbers</div>
                      <div className="info-card-value">+1 (456) 453-3456</div>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-content">
                    <div className="info-card-icon email">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div className="info-card-text">
                      <div className="info-card-label">Email address</div>
                      <div className="info-card-value">+1 (456) 453-3456</div>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-content">
                    <div className="info-card-icon credit">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="info-card-text">
                      <div className="info-card-label">Credit card</div>
                      <div className="info-card-value">+1 (456) 453-3456</div>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-content">
                    <div className="info-card-icon password">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="info-card-text">
                      <div className="info-card-label">Password</div>
                      <div className="info-card-value">Ks@345-r32</div>
                    </div>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-content">
                    <div className="info-card-icon passcode">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="info-card-text">
                      <div className="info-card-label">One-time passcode</div>
                      <div className="info-card-value">Ks@345-r32</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secure All Data Visual */}
            <div className="security-shield">
              <div className="shield-bg">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <svg 
                      className="shield-icon" 
                      fill="white" 
                      viewBox="0 0 24 24"
                      style={{ 
                        width: '4rem', 
                        height: '4rem', 
                        margin: '0 auto',
                        display: 'block',
                        filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                      }}
                    >
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
                    </svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
                    <div className="info-card" style={{ display: 'inline-block', maxWidth: '240px' }}>
                      <div className="info-card-content">
                        <div className="info-card-icon email">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div className="info-card-text">
                          <div className="info-card-label">Email address</div>
                          <div className="info-card-value">rija@gmail.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="info-card" style={{ display: 'inline-block', maxWidth: '240px' }}>
                      <div className="info-card-content">
                        <div className="info-card-icon user">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="info-card-text">
                          <div className="info-card-label">User name</div>
                          <div className="info-card-value">tufayel nija</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
