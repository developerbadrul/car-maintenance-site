import React from 'react';
import '../Service/Service.css'
const Service = ({ service }) => {
  const { title, img, price, description } = service;
  return (
    <div className='single-service'>
      <img src={img} alt="." />
      <title>{title}</title><br></br>
      <strong>Price: {price}</strong>
      <blockquote>{description}</blockquote>
    </div>
  );
};

export default Service;