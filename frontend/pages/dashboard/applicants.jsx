import {
  Col,
  Grid,
  Input,
  Loading,
  Row,
  Spacer,
  Table,
  Text,
  Tooltip,
  User,
} from "@nextui-org/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Content from "../../components/Content";
import { DeleteIcon } from "../../components/DeleteIcon";
import { EditIcon } from "../../components/EditIcon";
import { EyeIcon } from "../../components/EyeIcon";
import { IconButton } from "../../components/IconButton";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Star from "../../components/Star";
import { StyledBadge } from "../../components/StyledBadge";
import styles from "../../styles/Applicants.module.css";
import AuthContext from "../../context/authContext";
import { getCandidates } from "../../utils/getCandidates";
import Link from 'next/link'

const Applicants = () => {
  const { applicants } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.SECRET;

  const columns = [
    { name: "CANDIDATO", uid: "name" },
    { name: "PUNTUACIÓN", uid: "rating" },
    { name: "PUESTO", uid: "role" },
    { name: "ESTADO", uid: "status" },
    { name: "ACCIONES", uid: "actions" },
  ];

  const renderCell = (applicants, columnKey) => {
    const cellValue = applicants[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={applicants.avatar} name={cellValue} css={{ p: 0 }}>
            {applicants.email}
          </User>
        );
      case "rating":
        return <Star rating={applicants.rating} size={18} />;
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents3" }}>
                {applicants.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={applicants.status}>{cellValue}</StyledBadge>;
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Ver Solicitud">
                <Link href={`/dashboard/application/${applicants.id}`} >
                  <IconButton
                    onClick={() => console.log("View user", applicants.id)}
                  >
                    <EyeIcon size={20} fill="#979797" />
                  </IconButton>
                </Link>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Editar Estado">
                <IconButton
                  onClick={() => console.log("Edit user", applicants.id)}
                >
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Eliminar Solicitud"
                color="error"
                onClick={() => console.log("Delete user", applicants.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <div className={styles.Applicants}>
      <Navbar />
      <Sidebar current={4} />
      <Content>
        {!(applicants.length>0) ? (
          <Loading />
        ) : (
          <>
            <Row>
              <Grid.Container
                justify="space-around"
                alignItems="center"
                direction="row"
              >
                <Grid xs={12} md={8} alignItems="center">
                  <Text h1 size={26}>
                    Total de Postulaciones: {applicants.length}
                  </Text>
                </Grid>
                <Grid xs={12} md={4} alignItems="center">
                  <Input
                    clearable
                    bordered
                    color="primary"
                    placeholder="Buscar Aplicantes"
                    size="lg"
                    fullWidth={true}
                    contentRight={<Loading size="xs" />}
                  />
                </Grid>
              </Grid.Container>
            </Row>
            <Spacer />
            <Grid.Container xs={12} md={12} alignItems="center">
              <Grid justify="center" wrap="wrap">
                <Table
                  aria-label="Example table with custom cells"
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                  selectionMode="none"
                >
                  <Table.Header columns={columns}>
                    {(column) => (
                      <Table.Column
                        key={column.uid}
                        hideHeader={column.uid === "actions" || column.uid === "rating"}
                        align={column.uid === "actions" ? "center" : "start"}
                      >
                        {column.name}
                      </Table.Column>
                    )}
                  </Table.Header>
                  <Table.Body items={applicants}>
                    {(item) => (
                      <Table.Row>
                        {(columnKey) => (
                          <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                        )}
                      </Table.Row>
                    )}
                  </Table.Body>
                  <Table.Pagination
                    shadow
                    noMargin
                    align="center"
                    rowsPerPage={10}
                    onPageChange={(page) => console.log({ page })}
                  />
                </Table>
              </Grid>
            </Grid.Container>
          </>
        )}
      </Content>
    </div>
  );
};

export default Applicants;
