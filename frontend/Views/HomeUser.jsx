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
import PendingCard from "../components/PendingCard";


const HomeUser = ({user}) => {
  return (
    <>
      <Row>
        <Text h1 size={26}>
          ¡Bienvenido, {user.fname}!
        </Text>
      </Row>
      <Row>
        <Text size={18}>Aquí está el informe de tus solicitudes de empleo</Text>
      </Row>
      <Spacer />
      <Row justify="space-around" wrap="wrap">
        <PendingCard
          color="primary"
          number={76}
          text="Solicitudes por revisar"
        />
        <PendingCard color="secondary" number={3} text="Agendadas para hoy" />
        <PendingCard color="warning" number={24} text="Mensajes Recibidos" />
      </Row>
      <Spacer y={2} />
      
    </>
  );
};

export default HomeUser;
