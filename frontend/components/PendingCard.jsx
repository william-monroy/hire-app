import React from "react";
import { Card, Spacer, Text, Grid } from "@nextui-org/react";
import styles from "./PendingCard.module.css";
import { HiOutlineChevronRight } from "react-icons/hi";

const PendingCard = ({ color, number, text }) => {
  return (
    <div className={styles.PendingCard}>
      <Card
        color={color}
        bordered
        hoverable
        clickable
        // shadow={false}
        css={{ minWidth: "310px", width: "20vw" }}
      >
        <Grid.Container gap={.5} justify="center" alignItems="center">
          <Grid xs={11} alignItems="center">
            <Text h1 size={24} color="white" margin="0px">
              {number}
            </Text>
            <Spacer />
            <Text size={18} color="white">{text}</Text>
          </Grid>
          <Grid xs={1} alignItems="center">
            <HiOutlineChevronRight style={{ fontSize: 18 }} />
          </Grid>
        </Grid.Container>
      </Card>
    </div>
  );
};

export default PendingCard;
