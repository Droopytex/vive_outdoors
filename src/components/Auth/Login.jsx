import React, { useContext, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login(email, password);
    console.log('Login:', formData);
  };

  return (
    <Card className="card-custom">
      <Card.Body>
        <Card.Title className="text-center">Ya Tengo Cuenta</Card.Title>
        <Form onSubmit={handleSubmitLogin}>
          {/* Campos del formulario */}
          <Form.Group controlId="formEmailLogin" className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Ingresa tu correo electrónico"
              className="border-lila"
            />
          </Form.Group>
          {/* Agrega los demás campos */}
          <Button variant="dark" type="submit" className="button-custom mt-3">
            Iniciar Sesión
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
