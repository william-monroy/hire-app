import { Row, Spacer, Text } from "@nextui-org/react";
import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const Star = ({ rating = 0, size = 18 }) => {
  return (
    <Row align="center" justifyContent="center">
      {rating > 0 ? (
        <HiStar style={{ color: "#ffb836", fontSize: size }} />
      ) : (
        <HiOutlineStar style={{ color: "gray", fontSize: size }} />
      )}
      <Spacer x={0.3}/>
      <Text hp size={size}>
        {rating}
      </Text>
    </Row>
  );
};

export default Star;
