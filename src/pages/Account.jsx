import React from "react";
import RegisterForm from "../components/Auth/Register";
import LoginForm from "../components/Auth/Login";
import { Container, Row, Col } from "react-bootstrap";
import "../styles.css"; // Asegúrate de tener este archivo para estilos personalizados

const Account = () => {
  return (
    <Container className="account-container mt-5">
      <Row className="justify-content-center align-items-start">
        <Col md={5} className="mb-4">
          <RegisterForm />
        </Col>
        <div className="vertical-line"></div>
        <Col md={5} className="mb-4">
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
