import React from 'react';
import { Card, SectionWrapper } from '../components';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Verified Identity",
      description: "Build trust with verified credentials and authentic professional profiles."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Recognition",
      description: "Stand out with a memorable digital presence that captures your unique value."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Global Network",
      description: "Connect with professionals worldwide and expand your opportunities."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analytics & Insights",
      description: "Track your professional growth with detailed analytics and insights."
    }
  ];

  return (
    <SectionWrapper id="about" background="gray">
      <div className="text-center space-y-16">
        {/* Header */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="heading-2">
            Your Identity, <span className="text-gradient">Amplified</span>
          </h2>
          <p className="body-large text-neutral-600">
            IdentityHub transforms how you present yourself professionally. 
            Create a compelling digital presence that opens doors and builds lasting connections.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center group"
              hover={true}
              padding="lg"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-xl gradient-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="heading-4">{feature.title}</h3>
                <p className="body-normal text-neutral-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-neutral-200">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-gradient">500+</div>
            <div className="text-lg font-medium text-neutral-900">Companies Trust Us</div>
            <div className="text-neutral-600">From startups to Fortune 500</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-gradient">2M+</div>
            <div className="text-lg font-medium text-neutral-900">Profile Views</div>
            <div className="text-neutral-600">Generated monthly</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-gradient">95%</div>
            <div className="text-lg font-medium text-neutral-900">Success Rate</div>
            <div className="text-neutral-600">In career advancement</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
