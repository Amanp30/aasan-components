import React from "react";
import { Oval } from "react-loader-spinner";
import Router from "next/router";
import { useState } from "react";

function loader() {
  const [loading, setloading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    console.log(56);
    setloading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    console.log(65);
    setloading(false);
  });

  return (
    <>
      {loading && (
        <div
          style={{
            zIndex: "10000",
            position: "absolute",
            width: "100%",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            background: "white",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </>
  );
}

export default loader;
