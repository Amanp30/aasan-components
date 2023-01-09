import React, { useState } from "react";

function instagramexplore() {
  const [showlikes, setshowlikes] = useState({});

  const imgarray = [
    { img: "/static/putin.jpg", likes: 2, views: 4 },
    { img: "/static/putin.jpg", likes: 2, views: 4 },
    { img: "/static/putin.jpg", likes: 2, views: 4 },
    { img: "/static/putin.jpg", likes: 2, views: 4 },
    { img: "/static/putin.jpg", likes: 2, views: 4 },
    { img: "/static/putin.jpg", likes: 2, views: 4 },
    { img: "/static/putin.jpg", likes: 2, views: 4 },
  ];
  function handleMouseEnter(id) {
    setshowlikes((prevState) => ({ ...prevState, [id]: true }));
  }
  function handleMouseLeave(id) {
    setshowlikes((prevState) => ({ ...prevState, [id]: false }));
  }
  return (
    <>
      <div className="instagramlayout">
        <div className="instagrid">
          <div className="one">
            <div
              className={showlikes[1] ? "imgshort itstrue" : "imgshort"}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              <img src="/static/putin.jpg" />
              <div className="stats">
                <span>2 likes 4 views</span>
              </div>
            </div>
            <div
              className={showlikes[2] ? "imgshort itstrue" : "imgshort"}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              <img src="/static/putin.jpg" />
              <div className="stats">
                <span>2 likes 4 views</span>
              </div>
            </div>
          </div>
          <div className="two">
            <div
              className={showlikes[3] ? "imgshort itstrue" : "imgshort"}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              <img src="/static/putin.jpg" />
              <div className="stats">
                <span>2 likes 4 views</span>
              </div>
            </div>
            <div
              className={showlikes[4] ? "imgshort itstrue" : "imgshort"}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeave(4)}
            >
              <img src="/static/putin.jpg" />
              <div className="stats">
                <span>2 likes 4 views</span>
              </div>
            </div>
          </div>
          <div className="two">
            <img src="/static/putin2.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default instagramexplore;
