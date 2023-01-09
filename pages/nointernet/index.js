import React, { useEffect, useState } from "react";
import { onlinecheck } from "../../functions/checkonline";
import Noconnection from "../../components/internetconnection/noconnection";

function index() {
  const [isOnline, setisOnline] = useState();
  const checkConnection = setInterval(() => {
    setisOnline(onlinecheck());
  }, 5000);
  useEffect(() => {
    setisOnline(onlinecheck());
    checkConnection;
  }, []);

  return (
    <>
      {isOnline ? (
        <>
          <h1>Hey just turn of your internet connection now </h1>
        </>
      ) : (
        <Noconnection />
      )}
    </>
  );
}

export default index;
