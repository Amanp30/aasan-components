import React, { useEffect, useState } from "react";
import Link from "next/link";

function menu({ itemdata }) {
  const [isDropdown, setisDropdown] = useState({});

  var menu = [
    { text: "Home", link: "/" },
    {
      text: "Products",
      link: [
        { text: "Product One", link: "/geolocation" },
        { text: "Product two", link: "/two" },
      ],
    },
    {
      text: "More",
      link: [
        { text: "Privacy", link: "/privacy" },
        { text: "T & C", link: "/termscondition" },
      ],
    },
    {
      text: "social",
      link: [
        { text: "facebook", link: "/privacy" },
        { text: "twitter", link: "/termscondition" },
        { text: "Youtube", link: "/termscondition" },
      ],
    },
    { text: "Setting", link: "/menu" },
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
    if (!event.target.closest(".menua")) {
      // if it's not, then close all of the submenus
      setisDropdown({});
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
      <div className="menu">
        <ul className="nav">
          {menu?.map((item, index) => {
            if (typeof item.link == "string") {
              return (
                <div key={index} className="menua">
                  <Link href={item.link} onClick={(e) => setisDropdown({})}>
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
                  className="dropdownlinks menua"
                >
                  {item.text}{" "}
                  {isDropdown[index] ? (
                    <>
                      <span>▼</span>
                    </>
                  ) : (
                    <>
                      <span>▲</span>
                    </>
                  )}
                  <div
                    className={
                      isDropdown[index] ? `submenu_open` : "submenu_close"
                    }
                  >
                    {item.link.map((subItem, subIndex) => (
                      <div key={subIndex} className="ohosublink">
                        <Link
                          href={subItem.link}
                          onClick={(e) => setisDropdown({})}
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
        </ul>
      </div>
    </>
  );
}

export default menu;
