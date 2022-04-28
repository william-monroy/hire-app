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
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { fName, lName, email, telefono, password, birth };
    const userAPI = await axios.post("/api/auth/signup", body);
    if (userAPI.status === 200) {
      router.push("/dashboard/home");
      console.log(userAPI.data.data);
      login(userAPI.data.data);
    } else {
      console.log("error");
      setError("Datos incorrectos");
    }
  };

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
              onChange={(e) => {
                setFName(e.target.value);
              }}
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
              onChange={(e) => {
                setLName(e.target.value);
              }}
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Spacer x={2} />
            <Input
              bordered
              color="primary"
              width="186px"
              type="date"
              helperText="Fecha de Nacimiento"
              onChange={(e) => {
                setBirth(e.target.value);
              }}
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
          <Button auto onClick={handleSubmit}>
            Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUp;
