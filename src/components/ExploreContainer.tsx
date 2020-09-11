import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <h1>Cross-Platform Ionic ReactJS Content Management System (CMS)</h1>
      <h3>React Version: 16.13.1</h3>
    </div>
  );
};

export default ExploreContainer;
