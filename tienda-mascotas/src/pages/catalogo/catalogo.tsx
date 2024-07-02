// src/pages/CardsPage.tsx
import React from 'react';
import CardComponent from '../../components/card/card';

const URL_PERROS = "https://cataas.com/cat";
const cardData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const Catalogo: React.FC = () => {
  return (
    <>
    <h1>Lleva un amigo canino a casa</h1>
<figure className="text-end">
  <blockquote className="blockquote">
    <p>"El perro es el único ser en el mundo que te ama más de lo que se ama a sí mismo."</p>
  </blockquote>
  <figcaption className="blockquote-footer">
  Josh Billings <cite title="Source Title">(humorista y escritor estadounidense)</cite>
  </figcaption>
</figure>
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4" key={index}>
            <CardComponent />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Catalogo;
