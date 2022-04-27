import { Row, Spacer, Text } from "@nextui-org/react";
import React from "react";
import styles from "./Legend.module.css";

const Legend = ({ color, label, num }) => {
  const colorStyle = {
    backgroundColor: color,
    width: "20px",
    height: "20px",
    borderRadius: "5px",
  };
  return (
    <div className={styles.Legend}>
      <Row>
        <div style={colorStyle} />
        <Spacer x={0.3}/>
        <Text h2 color="gray" size={14}>
          {label}:
        </Text>
        <Spacer x={0.2} />
        <Text h1 size={16}>
          {num}
        </Text>
      </Row>
    </div>
  );
};

export default Legend;
