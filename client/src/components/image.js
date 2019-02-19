import React from "react";

// Functional component that takes an image through props and displays it
export default function Image({ image }) {
  return (
    <img className="single-photo" src={image.urls.thumb} alt={image.title} />
  );
}
