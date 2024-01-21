import React from "react";
import util from "../styles/util.module.css";

const generateImageComponents = (path, imageCount, imageNameFormat) => {
  const imageComponents = [];

  for (let index = 1; index <= imageCount; index++) {
    const imageName = `${imageNameFormat} ${index}.png`;
    const imagePath = `/project-page${path}/${imageName}`;

    // Add the Image component
    imageComponents.push(
      <img
        className={util.imageBg}
        src={imagePath}
        width="100%"
        alt={`project image ${index}`}
        key={`${imageNameFormat}${index}`}
      />
    );
  }

  return imageComponents;
};

export default generateImageComponents;
