import React from "react";
import css from "../styles/notification.module.css";
import { Oval } from "react-loader-spinner";

function notification({
  icon,
  text,
  success,
  error,
  saving,
  state,
  setstate,
  time,
  close,
  stripe,
  mobile,
}) {
  if (!saving) {
    setTimeout(() => {
      setstate(false);
    }, time * 1000);
  }

  const handleClick = () => {
    setstate(false);
  };

  var noticlass =
    css.notification +
    (mobile ? " " + css.mobiletop + " " : " " + css.mobilebottom) +
    (success && success !== "" ? " " + css[success] : "") +
    (error && error !== "" ? " " + css[error] : "") +
    (saving && saving !== "" ? " " + css[saving] : "") +
    (stripe && success ? " " + css.stripe + " " + css.success : "") +
    (stripe && error ? " " + css.stripe + " " + css.error : "") +
    (stripe && saving ? " " + css.stripe + " " + css.saving : "");

  return (
    <>
      {success && state && (
        <div className={noticlass}>
          {icon && (
            <img
              src="/static/icons/success.svg"
              alt="Success Icon"
              className={css.notiimg}
            />
          )}
          <p
            className={stripe && !icon ? css.stripehere : ""}
            style={{ margin: "0 .6em 0 0", width: "100%" }}
          >
            {text}
          </p>
          {close && (
            <>
              <div onClick={handleClick} className={css.close_icon}></div>
            </>
          )}
        </div>
      )}

      {/* Error now */}
      {error && state && (
        <div className={noticlass}>
          {icon && (
            <img
              src="/static/icons/error.svg"
              alt="Error Icon"
              className={css.notiimg}
            />
          )}
          <p
            className={stripe && !icon ? css.stripehere : ""}
            style={{ margin: "0 .6em 0 0", width: "100%" }}
          >
            {text}
          </p>
          {close && (
            <>
              <div onClick={handleClick} className={css.close_icon}></div>
            </>
          )}
        </div>
      )}

      {/* saving now */}
      {saving && (
        <div className={noticlass}>
          {icon && (
            <Oval
              height={30}
              width={30}
              color="green"
              wrapperStyle={{}}
              wrapperClass={css.notiimg}
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="green"
              strokeWidth={10}
              strokeWidthSecondary={8}
            />
          )}
          <p
            className={stripe && !icon ? css.stripehere : ""}
            style={{ margin: "0 0 0 0", width: "100%" }}
          >
            {text}
          </p>
        </div>
      )}
    </>
  );
}

export default notification;
