import React, { useState } from "react";
import {
  Modal,
  Input,
  Row,
  Checkbox,
  Button,
  Text,
  Spacer,
  Loading,
} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [viewLoader, setViewLoader] = useState(true);

  setTimeout(() => {
    setVisible(true);
    setViewLoader(false);
  }, 1500);

  return (
    <div className="Login">
      {viewLoader ? <Loading type="points-opacity" size="xl" /> : null}
      <Modal blur preventClose aria-labelledby="modal-title" open={visible}>
        <Modal.Header>
          <img src="assets/denso-logo.png" alt="Desno logo" width="150px" />
          <Spacer y={3} />
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Correo"
            contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Contraseña"
            type={["password"]}
            contentLeft={<Password fill="currentColor" />}
          />
          {/* <Spacer />
          <Input underlined labelPlaceholder="Correo" color="primary" />
          <Spacer />
          <Input underlined labelPlaceholder="Contraseña" color="primary" /> */}
          <Spacer y={0.5} />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Recuérdame</Text>
            </Checkbox>
            <Text size={14}>¿Olvidaste tu contraseña?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/signup" style={{textDecoration: 'none'}}>
            <Button auto flat color="error">
            Regístrate
            </Button>
          </Link>
          <Link to="/home" style={{textDecoration: 'none'}}>
            <Button auto>Iniciar Sesión</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
