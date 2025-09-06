import React from 'react';
import PropTypes from 'prop-types';

const SectionWrapper = ({ 
  children, 
  className = '', 
  containerClassName = '',
  background = 'default',
  padding = 'default',
  id,
  ...props 
}) => {
  const backgroundClasses = {
    default: 'bg-white',
    gray: 'bg-neutral-50',
    dark: 'bg-neutral-900 text-white',
    primary: 'gradient-primary text-white',
    secondary: 'gradient-secondary text-white',
    accent: 'gradient-accent text-white',
    glass: 'glass',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'py-8 lg:py-12',
    default: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
    xl: 'py-24 lg:py-40',
  };
  
  const sectionClasses = [
    paddingClasses[padding],
    backgroundClasses[background],
    className
  ].filter(Boolean).join(' ');
  
  const containerClasses = [
    'container',
    containerClassName
  ].filter(Boolean).join(' ');
  
  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  );
};

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  background: PropTypes.oneOf(['default', 'gray', 'dark', 'primary', 'secondary', 'accent', 'glass']),
  padding: PropTypes.oneOf(['none', 'sm', 'default', 'lg', 'xl']),
  id: PropTypes.string,
};

export default SectionWrapper;
