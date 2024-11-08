import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BrandBanner = () => {
  const brands = [
    { src: 'https://via.placeholder.com/100?text=Marca1', alt: 'Marca 1' },
    { src: 'https://via.placeholder.com/100?text=Marca2', alt: 'Marca 2' },
    { src: 'https://via.placeholder.com/100?text=Marca3', alt: 'Marca 3' },
    { src: 'https://via.placeholder.com/100?text=Marca4', alt: 'Marca 4' },
    { src: 'https://via.placeholder.com/100?text=Marca5', alt: 'Marca 5' },
  ];

  return (
    <Container className="my-4 text-center">
      <h2>Marcas Asociadas</h2>
      <Row className="justify-content-center">
        {brands.map((brand, index) => (
          <Col xs={6} md={2} key={index} className="mb-3">
            <img src={brand.src} alt={brand.alt} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrandBanner;
