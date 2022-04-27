import React from "react";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/MyApplications.module.css";

const frame =
  '<iframe id="game_drop" frameborder="0" allowfullscreen="true" allowtransparency="true" webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" src="https://v6p9d9t4.ssl.hwcdn.net/html/5682702/index.html" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" style="border-style: none;width: 100%; height: 100%; object-fit: cover;"></iframe>';

function Iframe(props) {
  return (
    <div
      className={styles.Iframe}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        "& > iframe > html > body > div#unity-container > canvas#unityCanvas": {
          width: "100px",
          height: "100px",
          border: "5px solid #fff",
        },
        "& > iframe": {
          width: "100px",
          height: "100px",
          border: "20px solid #fff",
        },
      }}
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const MyApplications = () => {
  return (
    <div className={styles.MyApplications}>
      <Navbar />
      <Sidebar current={7} />
      <Content>
        <Iframe iframe={frame} />
      </Content>
    </div>
  );
};

export default MyApplications;
