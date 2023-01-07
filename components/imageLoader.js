import React, { useState, useEffect } from "react";

const ImageLoader = (props) => {
  const [imageUrl, setImageUrl] = useState(props.src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageHeight(img.naturalHeight);
      setImageWidth(img.naturalWidth);
      setImageLoaded(true);
    };
  }, [imageUrl]);

  return (
    <>
      {!imageLoaded && (
        <div
          style={{
            background: "black",
            color: "blue",
            height: imageHeight,
            width: imageWidth,
          }}
        >
          Loading imae...
        </div>
      )}
      {imageLoaded && <img src={imageUrl} />}
    </>
  );
};

export default ImageLoader;
