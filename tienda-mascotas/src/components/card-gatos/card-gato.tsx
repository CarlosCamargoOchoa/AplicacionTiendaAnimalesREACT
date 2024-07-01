import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'; // Asegúrate de tener react-bootstrap instalado
import { fetchData } from '../../services/gatosService';

const CardGatoComponent: React.FC<{ _imageUrl: string }> = ({ _imageUrl }) => {
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageDataBlob = await fetchData(_imageUrl); 
        const imageUrl = URL.createObjectURL(imageDataBlob);
        setImageData(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [_imageUrl]);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {imageData ? (
        <Card.Img variant="top" src={imageData} alt="Image" />
      ) : (
        <Card.Body>
          <Card.Title>Loading Image...</Card.Title>
        </Card.Body>
      )}
    </Card>
  );
};

export default CardGatoComponent;
