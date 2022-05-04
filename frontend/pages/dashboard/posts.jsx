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
  Tooltip,
} from "@nextui-org/react";
import React, { useContext, useState } from "react";
import {
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUsers,
} from "react-icons/hi";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/Posts.module.css";
import { SiGlassdoor, SiIndeed, SiLinkedin, SiSap } from "react-icons/si";
import AuthContext from "../../context/authContext";

const Posts = () => {
  // const { jobs, setJobs } = useContext(AuthContext);
  const [jobs, setJobs] = useState(
    localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem("jobs")) : []
  );

  const [puesto, setPuesto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [modalidad, setModalidad] = useState("Presencial");
  const [tipo, setTipo] = useState("Tiempo Completo");
  const [descripcion, setDescripcion] = useState("");

  const [selected, setSelected] = useState(["LinkedIn"]);
  const [linkedin, setLinkedin] = useState(true);
  const [glassdoor, setGlassdoor] = useState(false);
  const [sap, setSap] = useState(false);
  const [indeed, setIndeed] = useState(false);

  const handleLinkedin = () => setLinkedin(!linkedin);
  const handleGlassdoor = () => setGlassdoor(!glassdoor);
  const handleSap = () => setSap(!sap);
  const handleIndeed = () => setIndeed(!indeed);

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
      jobs.push({
        id: jobs.length + 1,
        name: puesto,
        category: equipo,
        location: ubicacion,
        modality: modalidad,
        type: tipo,
        description: descripcion,
      });
      localStorage.setItem("jobs", JSON.stringify(jobs));
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
                <Radio.Group row value="Presencial">
                  <Radio
                    value="Presencial"
                    color="primary"
                    size="xs"
                    onChange={() => setModalidad("Presencial")}
                  >
                    Presencial
                  </Radio>
                  <Spacer />
                  <Radio
                    value="Remoto"
                    color="primary"
                    size="xs"
                    onChange={() => setModalidad("Remoto")}
                  >
                    Remoto
                  </Radio>
                </Radio.Group>
              </Col>
              <Col span={7} xs={12}>
                <Radio.Group row value="TiempoCompleto">
                  <Radio
                    value="TiempoCompleto"
                    color="primary"
                    size="xs"
                    onChange={() => setTipo("Tiempo Completo")}
                  >
                    Tiempo Completo
                  </Radio>
                  <Spacer />
                  <Radio
                    value="MedioTiempo"
                    color="primary"
                    size="xs"
                    onChange={() => setTipo("Medio Tiempo")}
                  >
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
            <Text b>Publicar en:</Text>
            <Checkbox.Group
              row
              color="primary"
              value={selected}
              onChange={setSelected}
            >
              <Tooltip content={"LinkedIn"}>
                <Checkbox value="LinkedIn" onChange={handleLinkedin}>
                  <Text color={linkedin ? "primary" : "gray"} size={30}>
                    <SiLinkedin />
                  </Text>
                </Checkbox>
              </Tooltip>
              <Checkbox value="Indeed" onChange={handleIndeed}>
                <Tooltip content={"Developers love Next.js"}>
                  <Text color={indeed ? "primary" : "gray"} size={30}>
                    <SiIndeed />
                  </Text>
                </Tooltip>
              </Checkbox>
              <Checkbox value="SAP" onChange={handleSap}>
                <Tooltip content={"Developers love Next.js"}>
                  <Text color={sap ? "primary" : "gray"} size={35}>
                    <SiSap />
                  </Text>
                </Tooltip>
              </Checkbox>
              <Checkbox value="Glassdoor" onChange={handleGlassdoor}>
                <Tooltip content={"Developers love Next.js"}>
                  <Text color={glassdoor ? "primary" : "gray"} size={30}>
                    <SiGlassdoor />
                  </Text>
                </Tooltip>
              </Checkbox>
            </Checkbox.Group>
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
            {jobs
              // .reverse()
              .map(
                ({
                  id,
                  name,
                  category,
                  location,
                  modality,
                  type,
                  description,
                }) => (
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
                        <Row justify="space-between">
                          <Col>
                            <Text
                              color="primary"
                              size={20}
                            >
                              <SiLinkedin />
                            </Text>
                          </Col>
                          <Col css={{ d: "flex", justifyContent: "flex-end"}}>
                            <Button size="sm" light auto>
                              Editar
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => {
                                var positions = jobs.filter(
                                  (item) => item.id !== id
                                );
                                setJobs(positions);
                                localStorage.setItem(
                                  "jobs",
                                  JSON.stringify(positions)
                                );
                              }}
                            >
                              Cerrar Convocatoria
                            </Button>
                          </Col>
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
