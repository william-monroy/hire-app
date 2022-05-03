import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Grid,
  Input,
  Loading,
  Modal,
  Radio,
  Row,
  Spacer,
  Text,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUsers,
} from "react-icons/hi";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import positions from "../../data/Positions";
import styles from "../../styles/Posts.module.css";

const Posts = () => {
  const [puesto, setPuesto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [modalidad, setModalidad] = useState("Presencial");
  const [tipo, setTipo] = useState("Tiempo Completo");
  const [descripcion, setDescripcion] = useState("");

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const submitHandler = () => {
    if (
      puesto !== "" &&
      equipo !== "" &&
      ubicacion !== "" &&
      descripcion !== ""
    ) {
      positions.push({
        id: positions.length + 1,
        name: puesto,
        category: equipo,
        location: ubicacion,
        modality: modalidad,
        type: tipo,
        description: descripcion,
      });
      setPuesto("");
      setEquipo("");
      setUbicacion("");
      setModalidad("Presencial");
      setTipo("Tiempo Completo");
      setDescripcion("");
      closeHandler();
    } else {
      console.log("Faltan Datos");
    }
  };

  return (
    <div className={styles.Posts}>
      <Navbar />
      <Sidebar current={1} />
      <Content>
        <Row>
          <Text h1 size={26}>
            Administrar Empleos
          </Text>
        </Row>
        <Spacer />
        <Row justify="space-evenly" wrap="wrap">
          <Input
            clearable
            bordered
            color="primary"
            placeholder="Buscar Empleos"
            size="lg"
            width="60%"
            contentRight={<Loading size="xs" />}
          />
          <Button color="primary" size="lg" onClick={handler}>
            Crear nuevo Empleo
          </Button>
        </Row>
        <Modal
          width="600px"
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Crear nuevo&nbsp;
              <Text b size={18}>
                Empleo
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Nombre del Puesto"
              onChange={(e) => setPuesto(e.target.value)}
            />
            <Row>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Equipo/Área de Trabajo"
                onChange={(e) => setEquipo(e.target.value)}
              />
              <Spacer />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Ubicación"
                onChange={(e) => setUbicacion(e.target.value)}
              />
            </Row>
            <Row>
              <Col span={5} xs={12}>
                <Text b>Modalidad</Text>
              </Col>
              <Col span={7} xs={12}>
                <Text b>Tipo</Text>
              </Col>
            </Row>
            <Row>
              <Col span={5} xs={12}>
                <Radio.Group
                  row
                  value="primary"
                  onChange={(e) => setModalidad(e.target.value)}
                >
                  <Radio value="primary" color="primary" size="xs">
                    Presencial
                  </Radio>
                  <Spacer />
                  <Radio value="secondary" color="primary" size="xs">
                    Remoto
                  </Radio>
                </Radio.Group>
              </Col>
              <Col span={7} xs={12}>
                <Radio.Group
                  row
                  value="primary"
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <Radio value="primary" color="secondary" size="xs">
                    Tiempo Completo
                  </Radio>
                  <Spacer />
                  <Radio value="secondary" color="secondary" size="xs">
                    Medio Tiempo
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>
            <Textarea
              bordered
              color="primary"
              placeholder="Descripción del Puesto"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Cancelar
            </Button>
            <Button auto onClick={submitHandler}>
              Publicar
            </Button>
          </Modal.Footer>
        </Modal>
        <Spacer />
        <Row justify="center" wrap="wrap">
          <Grid.Container justify="center" alignItems="center" gap={2}>
            {positions.sort((item, item2) => item.id < item2.id ).map(
              ({ name, category, location, modality, type, description }) => (
                <Grid
                  xs={12}
                  md={6}
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDdirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <Card css={{ width: "100%" }}>
                    <Card.Header>
                      <Text b>{name}</Text>
                    </Card.Header>
                    <Divider />
                    <Card.Body css={{ py: "$10" }}>
                      <Row
                        css={{
                          margin: "0px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Row
                          css={{
                            margin: "0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Text
                            color="primary"
                            css={{
                              margin: "0px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <HiOutlineUsers />
                          </Text>
                          <Spacer x={0.3} />
                          <Text>{category}</Text>
                        </Row>
                        <Row
                          css={{
                            margin: "0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Text
                            color="primary"
                            css={{
                              margin: "0px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <HiOutlineLocationMarker />
                          </Text>
                          <Spacer x={0.3} />
                          <Text>{location}</Text>
                        </Row>
                      </Row>
                      <Row
                        css={{
                          margin: "0px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Row
                          css={{
                            margin: "0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Text
                            color="primary"
                            css={{
                              margin: "0px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <HiOutlineBriefcase />
                          </Text>
                          <Spacer x={0.3} />
                          <Text>{modality}</Text>
                        </Row>
                        <Row
                          css={{
                            margin: "0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Text
                            color="primary"
                            css={{
                              margin: "0px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <HiOutlineClock />
                          </Text>
                          <Spacer x={0.3} />
                          <Text>{type}</Text>
                        </Row>
                      </Row>
                      <Spacer />
                      <Text>{description}</Text>
                    </Card.Body>
                    <Divider />
                    <Card.Footer>
                      <Row justify="flex-end">
                        <Button size="sm" light auto>
                          Editar
                        </Button>
                        <Button size="sm">Cerrar Convocatoria</Button>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              )
            )}
          </Grid.Container>
        </Row>
      </Content>
    </div>
  );
};

export default Posts;
