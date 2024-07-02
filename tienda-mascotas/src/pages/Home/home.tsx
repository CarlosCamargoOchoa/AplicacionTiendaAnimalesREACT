import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from 'react-bootstrap';;
//import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md="6" lg="4" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>Compra Perros</CardTitle>
              <CardText>Revisa nuestra tienda y encuentra la mejor compañia para llevar a casa</CardText>
              <Link to="/pages/catalogo" className="btn btn-primary">
                Visita la tienda
              </Link>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>Compra un poster</CardTitle>
              <CardText>Echale un ojo a los mejores posters de gatos para que adornes tu casa</CardText>
              <Link to="/pages/gatos-http-codigos" className="btn btn-primary">
                Echale un ojo
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
