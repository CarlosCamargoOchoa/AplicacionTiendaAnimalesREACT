import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import CardGatoComponent from '../../components/card-gatos/card-gato';
const URL_GATOS = "https://cataas.com/cat";
const cardData = [
    {
        "codigo": 100,
        "descripcion": "Continue: El servidor ha recibido la solicitud y el cliente puede continuar con la solicitud."
      },
      {
        "codigo": 101,
        "descripcion": "Switching Protocols: El servidor está cambiando los protocolos según la solicitud del cliente."
      },
      {
        "codigo": 200,
        "descripcion": "OK: La solicitud ha tenido éxito."
      },
      {
        "codigo": 201,
        "descripcion": "Created: La solicitud ha sido cumplida y se ha creado un nuevo recurso."
      },
      {
        "codigo": 202,
        "descripcion": "Accepted: La solicitud ha sido aceptada para procesamiento, pero puede no haberse completado."
      },
      {
        "codigo": 204,
        "descripcion": "No Content: La solicitud se ha completado correctamente, pero no devuelve ningún contenido."
      },
      {
        "codigo": 300,
        "descripcion": "Multiple Choices: Indica opciones múltiples para el URI solicitado."
      },
      {
        "codigo": 301,
        "descripcion": "Moved Permanently: La página solicitada ha sido movida permanentemente a una nueva ubicación."
      },
      {
        "codigo": 302,
        "descripcion": "Found: La página solicitada ha sido movida temporalmente a una nueva ubicación."
      },
      {
        "codigo": 304,
        "descripcion": "Not Modified: La página solicitada no ha sido modificada desde la última vez que se solicitó."
      },
      {
        "codigo": 400,
        "descripcion": "Bad Request: La solicitud no pudo ser interpretada debido a una sintaxis incorrecta."
      },
      {
        "codigo": 401,
        "descripcion": "Unauthorized: El cliente debe autenticarse para obtener la respuesta solicitada."
      },
      {
        "codigo": 403,
        "descripcion": "Forbidden: El servidor ha entendido la solicitud, pero no la puede llevar a cabo."
      },
      {
        "codigo": 404,
        "descripcion": "Not Found: El servidor no puede encontrar el recurso solicitado."
      },
      {
        "codigo": 405,
        "descripcion": "Method Not Allowed: El método especificado en la solicitud no está permitido para el recurso identificado."
      },
      {
        "codigo": 500,
        "descripcion": "Internal Server Error: El servidor encontró una situación inesperada que le impidió completar la solicitud."
      },
      {
        "codigo": 502,
        "descripcion": "Bad Gateway: El servidor actuó como una puerta de enlace o proxy y recibió una respuesta no válida desde el servidor ascendente."
      },
      {
        "codigo": 503,
        "descripcion": "Service Unavailable: El servidor no está listo para manejar la solicitud."
      },
      {
        "codigo": 504,
        "descripcion": "Gateway Timeout: El servidor estaba actuando como una puerta de enlace o proxy y no recibió una respuesta oportuna desde el servidor ascendente."
      },
];

const CardsPage: React.FC = () => {
  return (
    <div className="container">
      <Row xs={1} md={2} lg={3}>
        {cardData.map((card, index) => (
          <Col key={index}>
            <CardGatoComponent _imageUrl={URL_GATOS} _codigo={card.codigo.toString()} _description={card.descripcion}  />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsPage;
