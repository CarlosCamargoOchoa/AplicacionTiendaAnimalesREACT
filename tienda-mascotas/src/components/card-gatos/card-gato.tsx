import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'; // Asegúrate de tener react-bootstrap instalado
import { fetchData } from '../../services/gatosService';
import { Modal, Button } from 'react-bootstrap';

const CardGatoComponent: React.FC<{ _imageUrl: string, _codigo: string, _description: string }> = ({ _imageUrl, _codigo, _description }) => {
  const [imageData, setImageData] = useState<string | null>(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageDataBlob = await fetchData(_imageUrl); 
        if(imageDataBlob){
          const imageUrl = URL.createObjectURL(imageDataBlob);
          setImageData(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [_imageUrl]);

  return (
    <>
    <Card style={{ width: '18rem', margin: '10px' }}>
      {imageData ? (
        <><Card.Img variant="top" src={imageData} alt="Image" />
        <Card.Body>
          <h5 className="card-title">{_codigo}</h5>
          <p className="card-text">{_description}</p>
          <a href="#" onClick={handleShow} className="btn btn-primary">Descargar</a>
        </Card.Body></>
      ) : (
        <Card.Body>
          <Card.Title>Loading Image...</Card.Title>
        </Card.Body>
      )}
    </Card>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Imagen</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {imageData && <img src={imageData} alt="Poster" className="img-fluid" />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        </>
  );
};

export default CardGatoComponent;
