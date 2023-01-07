import React, { useState, useEffect } from "react";
import css from "../../styles/pinterestgrid.module.css";

function pinterestgrid() {
  var imgarray = [
    "https://i.pinimg.com/564x/50/4f/2a/504f2a1354e46a9d8df0621c3e748c01.jpg",
    "https://i.pinimg.com/564x/95/1d/29/951d29b116bca5a0af6081d0f89956b1.jpg",
    "https://i.pinimg.com/736x/80/e8/36/80e836d3fa531bf33412cab9f505ba8e.jpg",
    "https://i.pinimg.com/736x/27/66/d1/2766d1ce71b173d6949775804a38563f.jpg",
    "https://i.pinimg.com/564x/18/89/5d/18895d24a5a0cac292d56418364eac58.jpg",
    "https://i.pinimg.com/736x/2a/10/6b/2a106bd608e7740b79033cfe8320f9a3.jpg",
    "https://i.pinimg.com/564x/60/12/01/601201e79492a04613dbd6266d0b32cd.jpg",
    "https://i.pinimg.com/736x/59/02/2c/59022c19b045d81f137f089d142245a1.jpg",
    "https://i.pinimg.com/564x/66/b5/14/66b514611b7ca0bffccfc052e1698791.jpg",
    "https://i.pinimg.com/564x/a5/87/bb/a587bb1d7b030df82d2d8121cb0eaf0a.jpg",
    "https://i.pinimg.com/564x/3d/5a/75/3d5a758924358b087092012f7808a2bd.jpg",
    "https://i.pinimg.com/564x/3c/9f/d7/3c9fd781eca8c486f76f0cfe82f4cce7.jpg",
    "https://i.pinimg.com/736x/b5/09/db/b509db7a9719532c4d5a77b75e8a3605.jpg",
    "https://i.pinimg.com/564x/e6/e2/02/e6e2024bda77ce6b59508eae9c08d411.jpg",
    "https://i.pinimg.com/564x/37/a5/7f/37a57f2cf0b4120e4fabb7e60f87870d.jpg",
    "https://i.pinimg.com/564x/87/47/db/8747db036fe7c57d906ccf65daff4026.jpg",
    "https://i.pinimg.com/564x/7e/d0/60/7ed060c2830f1f1ee1c5d274270057d7.jpg",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  function getImageSize(imageUrl) {
    if (typeof window !== "undefined") {
      var size = [];
      imageUrl.forEach((element) => {
        const img = new Image();
        img.src = element;
        img.onload = () => {
          const height = img.naturalHeight;
          const width = img.naturalWidth;

          size.push({ height: height, width: width });
          //console.log(size);
        };
      });

      return size;
    }
  }

  var sizes = [];
  useEffect(() => {
    console.log(getImageSize(imgarray));
    sizes = getImageSize(imgarray);
  }, []);

  return (
    <>
      <div className={css.grid}>
        {imgarray.map((item, index) => {
          return (
            <>
              <div
                className={css.grid_item}
                style={{ height: sizes?.[index] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <img src={item} />
                {/* <ImageLoader src={item} /> */}{" "}
                <div
                  className={css.showinneritems}
                  style={{
                    display: hoveredIndex === index ? "block" : "none",
                  }}
                >
                  <div className={css.save}>Save</div>
                  <div className={css.bottomgroup}>
                    <div className={css.Link}>
                      <img src="https://www.svgrepo.com/show/471027/arrow-up-right.svg" />{" "}
                      Website
                    </div>
                    <div className={css.childDiv}>
                      <div className={css.share}>
                        <img src="https://www.svgrepo.com/show/471877/share-01.svg" />
                      </div>
                      <div className={css.more}>
                        <img src="https://cdn0.iconfinder.com/data/icons/smoothies-vector-icons-volume-2/48/143-512.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default pinterestgrid;
