import React, { ReactNode } from 'react';

interface GapComponentProps {
  children: ReactNode;        
  className?: string;       
}

const GapComponent: React.FC<GapComponentProps> = ({ children, className = "" }) => {

    const baseClasses = "py-16 px-4 mx-auto max-w-7xl w-full items-center justify-center flex";

  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default GapComponent;
