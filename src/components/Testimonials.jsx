import React from 'react';

const Testimonials = () => {
  return (
    <section className="section bg-dark-900" id="testimonials">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block text-sm text-gray-400 uppercase tracking-wider mb-4">
            TESTIMONIALS
          </div>
          <h2 className="heading-section text-white">
            What's our user <span className="text-purple-gradient">says</span>
            <br />
            about us
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-dark text-center">
            <div className="space-y-6">
              {/* User Avatar */}
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">DK</span>
                </div>
              </div>

              {/* User Info */}
              <div>
                <h3 className="text-xl font-bold text-white">David J. Karem</h3>
                <p className="text-gray-400">Team manager • 1 day ago</p>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp 
                Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances 
                can use the internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use 
                personal information numbers and other personal details."
              </blockquote>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2 pt-6">
                <button className="w-3 h-3 bg-purple-500 rounded-full"></button>
                <button className="w-3 h-3 bg-gray-600 rounded-full"></button>
                <button className="w-3 h-3 bg-gray-600 rounded-full"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
