import { useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ username, password, rol: "cliente" });
    console.log('Register:', { username, email, password, rol });
  };

  return (
    <Card className="card-custom">
      <Card.Body>
        <Card.Title className="text-center">Nuevo Cliente</Card.Title>
        <Form onSubmit={handleSubmitRegister}>
          <Form.Group controlId="formNombre" className="mb-3">
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Ingresa tu nombre"
              className="border-lila"
            />
          </Form.Group>
          <Form.Group controlId="formApellido" className="mb-3">
            <Form.Control
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              placeholder="Ingresa tu apellido"
              className="border-lila"
            />
          </Form.Group>
          <Form.Group controlId="formTelefono" className="mb-3">
            <Form.Control
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              placeholder="Ingresa tu teléfono"
              className="border-lila"
            />
          </Form.Group>
          <Form.Group controlId="formEmailRegister" className="mb-3">
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
          <Form.Group controlId="formPasswordRegister" className="mb-3">
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Crea una contraseña"
              className="border-lila"
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirma tu contraseña"
              className="border-lila"
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="button-custom mt-3">
            Registrar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};