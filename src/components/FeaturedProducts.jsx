import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const FeaturedProducts = () => {
  const products = [
    {
      title: "Producto 1",
      imgSrc: "https://via.placeholder.com/150?text=Producto+1",
    },
    {
      title: "Producto 2",
      imgSrc: "https://via.placeholder.com/150?text=Producto+2",
    },
    {
      title: "Producto 3",
      imgSrc: "https://via.placeholder.com/150?text=Producto+3",
    },
    {
      title: "Producto 4",
      imgSrc: "https://via.placeholder.com/150?text=Producto+4",
    },
    {
      title: "Producto 5",
      imgSrc: "https://via.placeholder.com/150?text=Producto+5",
    },
  ];

  return (
    <div className="mt-4 text-center">
      <h2>Productos Destacados</h2>
      <Row className="justify-content-center">
        {products.map((product, index) => (
          <Col md={2} key={index} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={product.imgSrc}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedProducts;
