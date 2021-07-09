import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button type="button" className="btn btn-success" {...props}>
      {children}
    </button>
  );
};

export default Button;
