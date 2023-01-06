import React, { useState } from "react";
import css from "../../styles/actionsdropdown.module.css";
function actionsdropdown({ actions, index }) {
  const [isOpen, setisOpen] = useState(false);

  if (typeof window !== "undefined") {
    document.body;
  }
  return (
    <div className={css.actionbar}>
      <div className={css.bars} onClick={(e) => setisOpen(!isOpen)}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/smoothies-vector-icons-volume-2/48/143-512.png"
          width="20px"
        />
      </div>
      {isOpen && (
        <div className={css.listit}>
          {actions?.map((action) => {
            return (
              <>
                <div onClick={(e) => action.func(index)} width="fit-content">
                  {action.logo && <img src={action.logo} width="15px" />}
                  {action.name && action.name}
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default actionsdropdown;
