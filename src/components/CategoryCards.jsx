import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CategoryCards = () => {
  const categories = [
    {
      title: "Carpas",
      description: "Encuentra tu carpa.",
      imgSrc: "https://via.placeholder.com/150?text=Carpas",
    },
    {
      title: "Mochilas",
      description: "Equipate con la mochila ideal.",
      imgSrc: "https://via.placeholder.com/150?text=Mochilas",
    },
    {
      title: "Sacos & Colchonetas",
      description: "Todo para dormir.",
      imgSrc: "https://via.placeholder.com/150?text=Sacos & Colchonetas",
    },
    {
      title: "Accesorios",
      description: "Equipamiento para tus actividades.",
      imgSrc: "https://via.placeholder.com/150?text=Accesorios",
    },
  ];

  return (
    <Row className="mt-4">
      {categories.map((category, index) => (
        <Col md={3} key={index} className="mb-4">
          <Card>
            <Card.Img variant="top" src={category.imgSrc} />
            <Card.Body>
              <Card.Title>{category.title}</Card.Title>
              <Card.Text>{category.description}</Card.Text>
              <Card.Link href="#">Ver más</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CategoryCards;
