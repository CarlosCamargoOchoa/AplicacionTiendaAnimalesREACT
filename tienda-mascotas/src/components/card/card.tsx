import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/perrosService';
import PerroPopup from "../VentaPerroPopup/perro-popup";
import { Button } from 'react-bootstrap';

interface ResponseHttpDogsService {
  id: string;
  url: string;
  width: string
  height: string
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null;
}

const CardComponent: React.FC = ({}) => {
  const [imageData, setImageData] = useState<string | null>(null);
  const [heightData, setHeightData] = useState<string | null>(null);
  const [widthtData, setWidthtData] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleShowPopup = (product: Product) => {
    product.imageUrl = imageData;
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  let sampleProduct: Product = {
    id: 1,
    name: 'Rocky',
    description: 'Todas las vacunas al día, esterilizado. Listo para dar amor.',
    price: 999.99,
    imageUrl: ''
  };
  
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageDataBlob: ResponseHttpDogsService[] = await fetchData(); 
        if(imageDataBlob){
          const _imageUrl = imageDataBlob[0].url;
          setImageData(_imageUrl);
          setHeightData(imageDataBlob[0].height);
          setWidthtData(imageDataBlob[0].width);
          sampleProduct.imageUrl = _imageUrl;
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
  
    fetchImage();
  }, []);

  return (
    <>
    <div className="card" style={{ width: widthtData?.toString(), height: heightData?.toString(), margin: '10px' }}>
      {imageData ? (<img src={imageData} className="card-img-top" />) :
      <img  className="card-img-top"  />
    }
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text"></p>
        <a href="#" onClick={() => handleShowPopup(sampleProduct)} className="btn btn-primary">Detalles</a>
      </div>
    </div>

      {selectedProduct && (
        <PerroPopup
          show={showPopup}
          handleClose={handleClosePopup}
          product={selectedProduct}
        />
      )}
    </>
  );
};

export default CardComponent;