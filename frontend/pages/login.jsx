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
import AuthContext from "../context/authContext";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { getCandidates } from "../utils/getCandidates";

const Login = () => {
  const { user, login, setApplicants } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [viewLoader, setViewLoader] = useState(true);
  const [error, setError] = useState("");

  const router = useRouter();

  setTimeout(() => {
    setVisible(true);
    setViewLoader(false);
  }, 1500);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { username, password };
    const userAPI = await axios.post("/api/auth/login", credentials);
    if (userAPI.status === 200) {
      let candidates = await getCandidates();
      setApplicants(candidates);
      console.log(candidates)
      router.push("/dashboard/home");
      console.log(userAPI.data.data);
      login(userAPI.data.data);
    } else {
      console.log("error");
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={styles.Login}>
      <Head>
        <title>Login | Denso</title>
        <meta name="description" content="Login Denso hire-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            // Para recibir como json
            name="email"
            contentLeft={<Mail fill="currentColor" />}
            aria-label="Correo"
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Contraseña"
            // Para recibir como json
            name="password"
            type={["password"]}
            contentLeft={<Password fill="currentColor" />}
            aria-label="Contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          {error != "" ? (
            <Text size={14} color="primary">
              {error}
            </Text>
          ) : null}
          <Spacer y={0.5} />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Recuérdame</Text>
            </Checkbox>
            <Text size={14}>¿Olvidaste tu contraseña?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Link href="/signup" style={{ textDecoration: "none" }} passHref>
            <Button auto flat color="error">
              Regístrate
            </Button>
          </Link>
          <Button auto onClick={handleSubmit}>
            Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
