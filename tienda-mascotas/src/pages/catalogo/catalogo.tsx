// src/pages/CardsPage.tsx
import React from 'react';
import CardComponent from '../../components/card/card';


const cardData = [
  {
    title: 'Card 1',
    text: 'This is the first card.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Card 2',
    text: 'This is the second card.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Card 3',
    text: 'This is the third card.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Catalogo: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4" key={index}>
            <CardComponent title={card.title} text={card.text} imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
