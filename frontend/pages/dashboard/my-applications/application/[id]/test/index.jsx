import React, { useState } from "react";
import Content from "../../../../../../components/Content";
import Navbar from "../../../../../../components/Navbar";
import Sidebar from "../../../../../../components/Sidebar";
import styles from "../../../../../../styles/Test.module.css";

const frame =
  '<iframe id="game_drop" frameborder="0" allowfullscreen="true" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" src="https://v6p9d9t4.ssl.hwcdn.net/html/5713116/index.html" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" style="border-style: none;width: 100%; height: 100%; object-fit: cover;"></iframe>';

function Iframe(props) {
  return (
    <div
      className={styles.Iframe}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const Test = ({id}) => {

  const [done, setDone] = useState(false);

  return (
    <div className={styles.Test}>
      <Navbar />
      <Sidebar current={7} />
      <Content>

        <Iframe iframe={frame} />
      </Content>
    </div>
  );
};

export default Test;
