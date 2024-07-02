import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null;
}

interface ProductPopupProps {
  show: boolean;
  handleClose: () => void;
  product: Product;
}

const PerroPopup: React.FC<ProductPopupProps> = ({ show, handleClose, product }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.imageUrl?.toString()} alt={product.name} className="img-fluid mb-3" />
        <p>{product.description}</p>
        <h5>${product.price.toFixed(2)}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary">
          Comprar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PerroPopup;
