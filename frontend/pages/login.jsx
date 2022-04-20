import React, { useState, useContext, useEffect } from "react";
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
import styles from "../styles/Login.module.css";
import { Password } from "../components/Password";
import { Mail } from "../components/Mail";
import Link from "next/link";
import AuthContext from "../stores/authContext";

const Login = () => {
  const {user, login, logout} = useContext(AuthContext);

  const [visible, setVisible] = useState(false);
  const [viewLoader, setViewLoader] = useState(true);

  setTimeout(() => {
    setVisible(true);
    setViewLoader(false);
  }, 1500);

  return (
    <div className={styles.Login}>
      {viewLoader ? <Loading type="points-opacity" size="xl" /> : null}
      <Modal blur preventClose aria-labelledby="modal-title" open={visible}>
        <Modal.Header>
          <img src="assets/denso-logo.png" alt="Denso logo" width="150px" />
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
          <Link href="/signup" style={{textDecoration: 'none'}} passHref>
            <Button auto flat color="error">
            Regístrate
            </Button>
          </Link>
          <Link href="/" style={{textDecoration: 'none'}} passHref>
            <Button auto onClick={login}>Iniciar Sesión</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Login