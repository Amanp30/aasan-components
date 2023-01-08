import React from "react";
import styles from "../../styles/noconnection.module.css";

function noconnection() {
  return (
    <div className={styles.sorrynoconnection}>
      <div className={styles.moji}>
        <h2>Network Error</h2>
        <p>
          We are trying to reconnect. Check your connection anyway, incase
          something (Or somebody) got to it.
        </p>
      </div>
    </div>
  );
}

export default noconnection;
