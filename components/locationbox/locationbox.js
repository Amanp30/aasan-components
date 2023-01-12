import React from "react";
import css from "../../styles/locationbox.module.css";

function location({ city, address, phone, img }) {
  return (
    <>
      <div className={css.locationbox}>
        <div className={css.info}>
          <p className={css.city}>{city}</p>
          <p className={css.address}>{address}</p>
          <a className={css.phone} href={`tel:${phone}`}>
            {phone}
          </a>
        </div>
        <div className={css.imgs}>
          <img src={img} />
        </div>
      </div>
    </>
  );
}

export default location;
