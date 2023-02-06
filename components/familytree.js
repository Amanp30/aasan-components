import React from "react";
import css from "../styles/familytree.module.css";

function FamilyMember({ name, wife, children, depth = 0 }) {
  return (
    <div
      className={css.family_member} /* style={{ marginLeft: depth + "em" }} */
    >
      <div className={css.person}>
        {/*  {depth > 0 && (
          <div className="arrow-down" style={{ left: depth - 1 + "em" }} />
        )} */}
        {name} {wife ? <span style={{ color: "red" }}>({wife})</span> : ""}
      </div>
      {children && (
        <div className={css.children}>
          {children.map((child, index) => (
            <FamilyMember key={index} depth={depth + 2} {...child} />
          ))}
        </div>
      )}
    </div>
  );
}

function FamilyTree({ data }) {
  return (
    <div className={css.family_tree}>
      {data.map((member, index) => (
        <FamilyMember key={index} {...member} />
      ))}
    </div>
  );
}

export default FamilyTree;
