import React, { useEffect, useState } from "react";

function geolocation() {
  const [longitude, setlongitude] = useState("");
  const [latitude, setlatitude] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setlatitude(lat);
        setlongitude(lng);
      });
    }
  }, []);
  return (
    <>
      Latitude is - {latitude}
      <br />
      longitude is - {longitude}
    </>
  );
}

export default geolocation;
