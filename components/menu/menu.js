import React, { useEffect, useState } from "react";
import Link from "next/link";
import css from "../../styles/menu.module.css";
import link from "../../functions/thelinks";
function menu({ itemdata }) {
  const [isDropdown, setisDropdown] = useState({});
  const [mobileopen, setmobileopen] = useState(false);

  var menu = [
    {
      text: "Home",
      link: "/",
      logo: "/static/home.svg",
    },
    {
      text: "Components",
      logo: "/static/component.svg",
      link: link,
    },
    {
      text: "Github",
      link: "https://github.com/Amanp30/aasan-components",
      logo: "/static/github.svg",
    },
  ];

  // add click event listener to the document
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // function to handle clicks outside the menu
  function handleClickOutside(event) {
    // check if the click event target is the menu or a descendant of the menu
    if (typeof window !== "undefined") {
      if (!event.target.closest(".menu_menua__9Gukj")) {
        // if it's not, then close all of the submenus
        setisDropdown({});
      }
    }
  }

  function handleMouseEnter(id) {
    setisDropdown((prevState) => ({ ...prevState, [id]: true }));
  }
  function handleMouseLeave(id) {
    setisDropdown((prevState) => ({ ...prevState, [id]: false }));
  }
  function opensub(id) {
    const newIsDropdown = {};
    Object.keys(isDropdown).forEach((key) => {
      newIsDropdown[key] = false;
    });
    newIsDropdown[id] = !isDropdown[id];
    setisDropdown(newIsDropdown);

    //setisDropdown((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  }
  return (
    <>
      <div className={css.themenu}>
        <div className={css.logo}>
          <img src="/static/AASAN_COMPONENTS.svg" />
        </div>
        <div
          className={css.mobilemenubtn}
          onClick={() => setmobileopen(!mobileopen)}
        >
          {mobileopen ? (
            <img src="/static/menu1.svg" style={{ width: "1.5em" }} />
          ) : (
            <img src="/static/menu2.svg" style={{ width: "1.5em" }} />
          )}
        </div>
        <div
          className={
            mobileopen ? `${css.menu} ${css.open}` : `${css.menu} ${css.close}`
          }
        >
          <div className={css.nav}>
            {menu?.map((item, index) => {
              if (typeof item.link == "string") {
                return (
                  <div key={index} className={css.menua}>
                    <Link
                      href={item.link}
                      onClick={(e) => {
                        setmobileopen(false), setisDropdown({});
                      }}
                    >
                      {item?.logo ? (
                        <img src={item.logo} style={{ width: "1em" }} />
                      ) : null}{" "}
                      {item.text}
                    </Link>
                  </div>
                );
              } else if (Array.isArray(item.link)) {
                return (
                  <div
                    key={index}
                    /* onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)} */
                    onClick={(e) => opensub(index)}
                    className={`${css.dropdownlinks} ${css.menua}`}
                  >
                    {item?.logo ? (
                      <img src={item.logo} style={{ width: "1.2em" }} />
                    ) : null}{" "}
                    {item.text}{" "}
                    {isDropdown[index] ? (
                      <>
                        <span>
                          <img
                            src="/static/downarrow.svg"
                            style={{ width: "1em" }}
                          />
                        </span>
                      </>
                    ) : (
                      <>
                        <span>
                          <img
                            src="/static/rightarrow.svg"
                            style={{ width: "1em" }}
                          />
                        </span>
                      </>
                    )}
                    <div
                      className={
                        isDropdown[index] ? css.submenu_open : css.submenu_close
                      }
                    >
                      {item.link.map((subItem, subIndex) => (
                        <div key={subIndex} className={css.ohosublink}>
                          <Link
                            href={subItem.link}
                            onClick={(e) => {
                              setmobileopen(false), setisDropdown({});
                            }}
                          >
                            {subItem.text}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default menu;
