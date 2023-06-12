import React from 'react';
import './../styles/_discover-item-skeleton.scss';

const Skeleton = () => {
  // This component renders a div container with the class 'skeleton-grid'. 
  // Inside this container, six child divs are rendered with the class 'skeleton-item'.
  // These divs will be styled as per '_discover-item-skeleton.scss' to represent loading placeholders or "skeleton screens".
  return (
    <div className="skeleton-grid">
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
    </div>
  );
};

export default Skeleton;
