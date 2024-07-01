// src/components/CardComponent.tsx
import React from 'react';

interface CardComponentProps {
  title: string;
  text: string;
  imageUrl: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, text, imageUrl }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default CardComponent;