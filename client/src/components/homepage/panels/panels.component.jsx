import React from "react";
import { Link } from "react-router-dom";
import "./panels.component.scss";

const TextPanel = ({ title , subtitle, imageUrl, collectionId, colourScheme, backgroundColour }) => {
  return (
    <Link className={`panel-wrapper text-panel ${backgroundColour}`} to={`collection/${collectionId}`}>
        <h3 className={`title text-subtitle ${colourScheme}`}>{subtitle}</h3>
        <h1 className={`title text-title ${colourScheme}`}> {title} </h1>

        <div className={`button text-shop-button ${colourScheme}`}>SHOP NOW</div>
    </Link>
  );
};

const ImagePanel = ({ title , subtitle, imageUrl, collectionId, colourScheme }) => {
    return (
      <Link className="panel-wrapper image" style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      to={`collection/${collectionId}`}>
        <div className="image-panel-titles">
          <h3 className={`title image-title ${colourScheme}`}>{title}</h3>
          <h3 className={`title image-shop-link ${colourScheme}`}>SHOP NOW</h3>
        </div>
      </Link>
    );
  };

export {TextPanel, ImagePanel};