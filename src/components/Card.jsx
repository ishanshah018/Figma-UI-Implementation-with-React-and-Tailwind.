import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'default',
  ...props 
}) => {
  const baseClasses = 'card';
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : '';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };
  
  const classes = [
    baseClasses,
    hoverClasses,
    paddingClasses[padding],
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'sm', 'default', 'lg', 'xl']),
};

export default Card;
