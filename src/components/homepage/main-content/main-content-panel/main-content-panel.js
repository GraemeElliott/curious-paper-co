import React from "react";
import { Link } from "react-router-dom";
import "./main-content-panel.scss";

const TextPanel = ({ title , subtitle, imageUrl, linkId, colourScheme, backgroundColour }) => {
  return (
    <Link className={`panel-wrapper text-panel ${backgroundColour}`} to={`products/${linkId}`}>
        <h3 className={`title text-subtitle ${colourScheme}`}>{subtitle}</h3>
        <h1 className={`title text-title ${colourScheme}`}> {title} </h1>

        <Link className={`button text-shop-button ${colourScheme}`} to={`products/${linkId}`}>SHOP NOW</Link>
    </Link>
  );
};

const ImagePanel = ({ title , subtitle, imageUrl, linkId, colourScheme }) => {
    return (
      <Link className="panel-wrapper image" style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      to={`products/${linkId}`}>
        <div className="titles">
          <h3 className={`title image-title ${colourScheme}`}>{title}</h3>
          <Link className={`title image-shop-link ${colourScheme}`} to={`products/${linkId}`}>SHOP NOW</Link>
        </div>
      </Link>
    );
  };

export {TextPanel, ImagePanel};