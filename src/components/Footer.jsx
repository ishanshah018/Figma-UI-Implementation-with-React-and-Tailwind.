import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  const footerLinks = {
    features: ['FEATURES', 'SERVICES', 'PRICING', 'HOW TO USE'],
    company: ['Features', 'Services', 'Pricing', 'How to use']
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.017 0H7.983C3.579 0 0 3.579 0 7.983v4.034C0 16.421 3.579 20 7.983 20h4.034C16.421 20 20 16.421 20 12.017V7.983C20 3.579 16.421 0 12.017 0zM10 15A5 5 0 1010 5a5 5 0 000 10zm6.5-10.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.622 6.862l-1.446 6.817c-.109.491-.398.612-.807.381l-2.237-1.65-1.078 1.037c-.119.119-.22.22-.452.22l.161-2.286 4.166-3.764c.182-.161-.04-.251-.282-.09L8.904 9.868l-2.223-.695c-.483-.151-.492-.483.1-.715l8.683-3.346c.402-.151.755.09.624.715l.001.035z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Brand */}
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

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm">
              {footerLinks.company.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="footer-link text-gray-400 transition-colors duration-200 uppercase tracking-wider"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer-social text-gray-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} IdentityHub. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
