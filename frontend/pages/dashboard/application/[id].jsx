import {
  Button,
  Card,
  Divider,
  Grid,
  Loading,
  Progress,
  Row,
  Spacer,
  Text,
  Col,
  User,
  Textarea,
} from "@nextui-org/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
  HiOutlineChevronLeft,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import Content from "../../../components/Content";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import styles from "../../../styles/Application.module.css";
import axios from "axios";
import AuthContext from "../../../context/authContext";
import Star from "../../../components/Star";
import { StyledBadge } from "../../../components/StyledBadge";
import { ChartP } from "../../../components/ChartP";
import Legend from "../../../components/Legend";

const Application = ({ id }) => {
  const { applicants } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  let results;

  const initialData = {
    labels: [
      "Habilidades de Supervisión",
      "Sentido común y tacto en las relaciones interpersonales",
      "Capacidad de desición",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [0, 0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [data, setData] = useState(initialData);

  const getResults = async () => {
    const userAPI = await axios.post("/api/get/results", { id });
    results = userAPI.data.data;
    console.log(results);
    const newData = {
      labels: [
        "Habilidades de Supervisión",
        "Sentido común y tacto en las relaciones interpersonales",
        "Capacidad de desición",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [results.test1, results.test2, results.test3],
          backgroundColor: [
            "rgba(220, 0, 50, 0.5)",
            "rgba(121, 40, 202, 0.5)",
            "rgba(245, 166, 35, 0.5)",
          ],
          borderWidth: 1,
        },
      ],
    };
    setData(newData);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    if (applicants[id - 1].status != "pendiente") {
      getResults();
    }
    // getApplicant();
  }, []);

  const statusValue = () => {
    const status = applicants[id - 1].status;
    console.log(status);
    switch (status) {
      case "pendiente":
        return 25;
      case "admitido":
        return 100;
      case "rechazado":
        return 100;
    }
  };

  return (
    <div className={styles.Application}>
      <Navbar />
      <Sidebar current={5} />
      <Content>
        <Row css={{ display: "flex", alignItems: "center" }}>
          <Link href="/dashboard/applicants">
            <Text
              size={26}
              color="primary"
              css={{
                cursor: "pointer",
                margin: "none",
                alignItems: "center",
                display: "flex",
              }}
            >
              <HiOutlineChevronLeft />
            </Text>
          </Link>
          <Spacer x={0.3} />
          <Text h1 size={24}>
            Detalles de Aplicante
          </Text>
        </Row>
        <Spacer />
        {loading ? (
          <Loading />
        ) : (
          <>
            <Row justify="space-between" wrap="wrap">
              <Grid.Container
                justify="space-around"
                alignItems="center"
                direction="row"
                gap={2}
              >
                <Grid xs={12} md={4} alignItems="center">
                  <Card css={{ width: "100%" }}>
                    <div className={styles.user}>
                      <div className={styles.userImage}>
                        <User
                          bordered
                          size={100}
                          src={applicants[id - 1].avatar}
                          alt="User"
                        />
                      </div>
                      <div className={styles.userInfo}>
                        <Text h1 size={24}>
                          {applicants[id - 1].name}
                        </Text>
                        <Text h2 size={14} color="gray">
                          Desarrollador Front-end
                        </Text>
                        <Star rating={applicants[id - 1].rating} size={18} />
                      </div>
                    </div>
                    <Spacer />
                    <Row justify="center">
                      <Card css={{ width: "100%" }} bordered>
                        <Card.Header>
                          <Row justify="space-between">
                            <Text b>Puestos Solicitados</Text>
                            <Text color="gray" size={14}>
                              hace 2 días
                            </Text>
                          </Row>
                        </Card.Header>
                        <Divider />
                        <Card.Body css={{ py: "$10" }}>
                          <Text h1 size={16}>
                            {applicants[id - 1].role}
                          </Text>
                          <Text h2 size={14}>
                            {applicants[id - 1].team} • Tiempo Completo
                          </Text>
                        </Card.Body>
                      </Card>
                    </Row>
                    <Spacer />
                    <Card css={{ width: "100%" }} bordered>
                      <Row justify="space-between">
                        <Text b>Estatus</Text>
                        <StyledBadge type={applicants[id - 1].status}>
                          {applicants[id - 1].status}
                        </StyledBadge>
                      </Row>
                      <Spacer y={0.5} />
                      <Progress color="primary" value={statusValue()} />
                    </Card>
                    <Spacer />
                    <Divider />
                    <Spacer />
                    <Text h1 size={20}>
                      Contacto
                    </Text>
                    <Spacer />
                    <Row>
                      <Col
                        span={1}
                        css={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <Text size={20} color="primary">
                          <HiOutlineMail />
                        </Text>
                      </Col>
                      <Col>
                        <Text color="gray">Correo</Text>
                        <Text>{applicants[id - 1].email}</Text>
                      </Col>
                    </Row>
                    <Spacer />
                    <Row>
                      <Col
                        span={1}
                        css={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <Text size={20} color="primary">
                          <HiOutlinePhone />
                        </Text>
                      </Col>
                      <Col>
                        <Text color="gray">Teléfono</Text>
                        <Text>{applicants[id - 1].phone}</Text>
                      </Col>
                    </Row>
                  </Card>
                </Grid>
                <Grid xs={12} md={8} alignItems="center" justify="center">
                  <Card css={{ width: "100%" }}>
                    <Spacer />
                    <Text h1 size={24}>
                      Resultados
                    </Text>
                    <Spacer />
                    {applicants[id - 1].status == "pendiente" ? (
                      <div className={styles.center__center}>
                        <Text h2 size={16} align="center">
                          El candidato aún no ha realizado la prueba.
                        </Text>
                      </div>
                    ) : (
                      <>
                        <Row justify="center">
                          <div className={styles.chart}>
                            <ChartP data={data} />
                          </div>
                        </Row>
                        <Spacer />
                        <Row justify="center">
                          <Spacer />
                          <Legend
                            color="#dc0032"
                            label="test1"
                            num={data.datasets[0].data[0]}
                          />
                          <Spacer />
                          <Legend
                            color="#7928ca"
                            label="test2"
                            num={data.datasets[0].data[1]}
                          />
                          <Spacer />
                          <Legend
                            color="#f5a623"
                            label="test3"
                            num={data.datasets[0].data[2]}
                          />
                        </Row>
                        <Spacer />
                        <Text h1 size={24}>
                          Comentarios
                        </Text>
                        <Spacer />
                        <Textarea bordered color="primary" />
                      </>
                    )}

                    <Spacer />
                  </Card>
                </Grid>
              </Grid.Container>
            </Row>
          </>
        )}
      </Content>
    </div>
  );
};

Application.getInitialProps = async ({ query }) => {
  return query;
};

export default Application;
