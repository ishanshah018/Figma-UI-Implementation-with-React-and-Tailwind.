import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ 
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  error = false,
  errorMessage = '',
  label = '',
  id,
  className = '',
  ...props 
}) => {
  const inputClasses = [
    'w-full px-3 py-2 border rounded-lg text-sm placeholder-neutral-400',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
    'transition-colors duration-200',
    error 
      ? 'border-error bg-red-50 text-error' 
      : 'border-neutral-300 bg-white text-neutral-900 hover:border-neutral-400',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="space-y-1">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-neutral-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {error && errorMessage && (
        <p className="text-xs text-error">{errorMessage}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
