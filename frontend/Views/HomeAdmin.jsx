import React from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { Chart } from "../components/Chart";
import PendingCard from "../components/PendingCard";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { HiOutlineEye, HiOutlineClipboardList } from "react-icons/hi";
import { ChartH } from "../components/ChartH";
import styles from "./HomeAdmin.module.css";

const HomeAdmin = ({ user }) => {
  return (
    <>
      {user != null ? (
        <>
          <Row>
            <Text h1 size={26}>
              ¡Bienvenido, {user.fname}!
            </Text>
          </Row>
          <Row>
            {user.admin ? (
              <Text size={18}>
                Aquí está el informe de las listas de empleo
              </Text>
            ) : (
              <Text size={18}>
                Aquí está el informe de tus solicitudes de empleo
              </Text>
            )}
          </Row>
          <Spacer />
          <Row justify="space-around" wrap="wrap">
            <PendingCard
              color="primary"
              number={76}
              text="Solicitudes por revisar"
            />
            <PendingCard
              color="secondary"
              number={3}
              text="Agendadas para hoy"
            />
            <PendingCard
              color="warning"
              number={24}
              text="Mensajes Recibidos"
            />
          </Row>
          <Spacer y={2} />
          <Row justify="space-between" wrap="wrap">
            <Grid.Container
              justify="space-around"
              alignItems="center"
              direction="row"
            >
              <Grid xs={12} md={8} alignItems="center">
                <Card css={{ mw: "100%" }}>
                  <Card.Header>
                    <div className={styles.header}>
                      <Row justify="space-between" align="center" wrap="wrap">
                        <Text h1 size={20} margin="0px">
                          Estadísticas de Trabajos
                        </Text>
                        <Button.Group color="primary" ghost>
                          <Button>Semana</Button>
                          <Button>Mes</Button>
                          <Button>Año</Button>
                        </Button.Group>
                      </Row>
                    </div>
                    <div className={styles.headerSm}>
                      <Row justify="space-around" align="center" wrap="wrap">
                        <Text h1 size={20} margin="0px">
                          Estadísticas de Trabajos
                        </Text>
                        <Button.Group color="primary" ghost>
                          <Button>Semana</Button>
                          <Button>Mes</Button>
                          <Button>Año</Button>
                        </Button.Group>
                      </Row>
                    </div>
                  </Card.Header>
                  <Card.Body css={{ m: "0" }}>
                    <Grid.Container
                      gap={0.5}
                      justify="center"
                      alignItems="center"
                    >
                      <Grid xs={12} md={8} alignItems="center">
                        {/* Grafica */}
                        <Chart />
                      </Grid>
                      <Grid
                        xs={10}
                        md={4}
                        alignItems="center"
                        direction="column"
                      >
                        <Card bordered shadow={false} css={{ mw: "100%" }}>
                          <Row justify="space-between">
                            <Text h1 size={18} margin="0px">
                              Vistas
                            </Text>
                            <div
                              style={{
                                color: "white",
                                backgroundColor: "#f5a623",
                                borderRadius: "50%",
                                width: "25px",
                                height: "25px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <HiOutlineEye />
                            </div>
                          </Row>
                          <Text h1 size={24} margin="0px">
                            2,342
                          </Text>
                          <Row>
                            <Text h2 size={16} margin="0px" color="gray">
                              Esta semana
                            </Text>
                            <Spacer x={0.3} />
                            <Text
                              h1
                              size={16}
                              margin="0px"
                              color="secondary"
                              css={{ display: "flex", alignItems: "center" }}
                            >
                              6.4%
                              <BsFillCaretUpFill />
                            </Text>
                          </Row>
                        </Card>
                        <Spacer />
                        <Card bordered shadow={false} css={{ mw: "100%" }}>
                          <Row justify="space-between">
                            <Text h1 size={18} margin="0px">
                              Solicitudes
                            </Text>
                            <div
                              style={{
                                color: "white",
                                backgroundColor: "#7928ca",
                                borderRadius: "50%",
                                width: "25px",
                                height: "25px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <HiOutlineClipboardList />
                            </div>
                          </Row>
                          <Text h1 size={24} margin="0px">
                            2,342
                          </Text>
                          <Row>
                            <Text h2 size={16} margin="0px" color="gray">
                              Esta semana
                            </Text>
                            <Spacer x={0.3} />
                            <Text
                              h1
                              size={16}
                              margin="0px"
                              color="error"
                              css={{ display: "flex", alignItems: "center" }}
                            >
                              0.5%
                              <BsFillCaretDownFill />
                            </Text>
                          </Row>
                        </Card>
                      </Grid>
                    </Grid.Container>
                  </Card.Body>
                  <Divider />
                </Card>
              </Grid>
              <Spacer />
              <Grid
                xs={12}
                md={3}
                alignItems="stretch"
                direction="column"
                justify="center"
              >
                <Card shadow={true} css={{ mw: "100%" }}>
                  <Row>
                    <Text h1 size={18} margin="0px">
                      Trabajos disponibles
                    </Text>
                  </Row>
                  <Row align="baseline">
                    <Text h1 size={40} margin="0px">
                      12
                    </Text>
                    <Spacer x={0.3} />
                    <Text h2 size={18} margin="0px" color="gray">
                      Publicados
                    </Text>
                  </Row>
                </Card>
                <Spacer />
                <Card shadow={true} css={{ mw: "100%" }}>
                  <Row>
                    <Text h1 size={18} margin="0px">
                      Resumen de Aplicantes
                    </Text>
                  </Row>
                  <Row align="baseline">
                    <Text h1 size={40} margin="0px">
                      67
                    </Text>
                    <Spacer x={0.3} />
                    <Text h2 size={18} margin="0px" color="gray">
                      Aplicantes
                    </Text>
                  </Row>
                  <Row>
                    <ChartH />
                  </Row>
                </Card>
              </Grid>
            </Grid.Container>
          </Row>
        </>
      ) : null}
    </>
  );
};

export default HomeAdmin;
