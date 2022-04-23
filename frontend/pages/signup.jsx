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
  useInput,
} from "@nextui-org/react";
import { Mail } from "../components/Mail";
import { Password } from "../components/Password";
import Link from "next/link";
import styles from "../styles/SignUp.module.css";

const SignUp = () => {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Email correcto" : "Introduce un email válido",
      color: isValid ? "default" : "secondary",
    };
  }, [value]);

  const [visible, setVisible] = useState(false);
  const [viewLoader, setViewLoader] = useState(true);

  setTimeout(() => {
    setVisible(true);
    setViewLoader(false);
  }, 1500);

  return (
    <div className={styles.SignUp}>
      {viewLoader ? <Loading type="points-opacity" size="xl" /> : null}
      <Modal
        width="500px"
        blur
        preventClose
        aria-labelledby="modal-title"
        open={visible}
      >
        <Modal.Header>
          <img src="assets/denso-logo.png" alt="Desno logo" width="150px" />
          <Spacer y={3} />
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Nombres"
              helperText="Requerido"
            />
            <Spacer x={2} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Apellidos"
              helperText="Requerido"
            />
          </Row>
          <Spacer y={0.2} />
          <Input
            {...bindings}
            clearable
            shadow={false}
            onClearClick={reset}
            status={helper.color}
            color={helper.color}
            helperColor={helper.color}
            helperText={helper.text}
            type="email"
            placeholder="Email"
            bordered
            color="primary"
          />
          <Spacer y={0.2} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Teléfono"
            helperText="Requerido"
          />
          <Spacer y={0.2} />
          <Row>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Contraseña"
              helperText="Requerido"
              type={["password"]}
              contentLeft={<Password fill="currentColor" />}
            />
            <Spacer x={2} />
            <Input
              bordered
              color="primary"
              width="186px"
              type="date"
              helperText="Fecha de Nacimiento"
            />
          </Row>
          <Spacer y={0.5} />
          {/* <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Recuérdame</Text>
            </Checkbox>
            <Text size={14}>¿Olvidaste tu contraseña?</Text>
          </Row> */}
        </Modal.Body>
        <Modal.Footer>
          <Link href="/login" style={{ textDecoration: "none" }} passHref>
            <Button auto flat color="error">
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/home" style={{ textDecoration: "none" }} passHref>
            <Button auto>Registrarse</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUp;
