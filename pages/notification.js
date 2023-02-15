import React, { useState } from "react";
import Notification from "../components/notification";

function index() {
  const [notifysuccess, setnotifysuccess] = useState(true);
  const [notifyerror, setnotifyerror] = useState(true);

  return (
    <div>
      <Notification
        text="Saving Data Please Wait"
        saving="topleft"
        icon
        close
        stripe
      />
      <Notification
        text="Data Saved"
        success="bottomcenter"
        icon
        state={notifysuccess}
        setstate={setnotifysuccess}
        time={20}
        close
        stripe
        mobile
      />
      <Notification
        text="Data Not saved Successfully"
        error="topright"
        icon
        state={notifyerror}
        setstate={setnotifyerror}
        time={25}
        close
        stripe
        mobile
      />
    </div>
  );
}

export default index;
