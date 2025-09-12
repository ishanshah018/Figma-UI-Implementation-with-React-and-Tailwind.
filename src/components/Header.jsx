import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Partners', href: '#testimonials' },
    { name: 'About us', href: '#about' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-sm border-b border-gray-800 w-full"
      style={{
        height: '80px'
      }}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="navbar-logo flex items-center"
            style={{
              width: '196px',
              height: '32px',
              gap: '8px'
            }}
          >
            <img 
              src={logo} 
              alt="IdentityHub Logo" 
              className="logo-image"
              style={{
                width: '32px',
                height: '32px'
              }}
            />
            <span 
              className="logo-text"
              style={{
                width: '156px',
                height: '24px',
                fontFamily: 'Source Code Pro',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '-0.27px',
                color: '#CAD1E9'
              }}
            >
              IdentityHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="navbar-link text-gray-300 transition-colors duration-200 text-sm relative"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button 
              className="navbar-cta inline-flex items-center justify-center text-white transition-all duration-300"
              style={{
                width: '155px',
                height: '40px',
                gap: '6px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '10px',
                paddingRight: '20px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                background: 'rgba(255, 255, 255, 0.004)',
                backdropFilter: 'blur(48px)',
                boxShadow: 'inset 0px 0px 12px 0px rgba(255, 255, 255, 0.2)',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              <span>Start free trial</span>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800 border-t border-gray-700">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link block px-3 py-2 text-gray-300 hover:text-white rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="btn btn-gradient btn-sm w-full">
                  Start free trial
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
