import React from "react";
import "./main-content.scss";
import { TextPanel, ImagePanel } from "./main-content-panel/main-content-panel";

class HomepageMainContent extends React.Component {
  constructor() {
    super();

    this.state = {
      mainContentPanels: [
        {
          title: "Notebooks",
          subtitle: "For Doodling & Scribbling",
          imageUrl: "",
          panelFormat: "text",
          panelId: "panel-1",
          linkId: "notebooks",
          colourScheme: "dark",
          backgroundColour:"dark-blue"
        },
        {
          title: "Archer & Olive",
          subtitle: "",
          imageUrl: "https://i.ibb.co/61P4w7B/archer-and-olive.jpg",
          panelFormat: "image",
          panelId: "panel-2",
          linkId: "archer-and-olive",
          colourScheme: "light",
          backgroundColour:""
        },
        {
          title: "Tote Bags",
          subtitle: "",
          imageUrl: "https://i.ibb.co/x1Gz6jM/greta-t-UVd-NPqo-WWo-E-unsplash.jpg",
          panelFormat: "image",
          panelId: "panel-3",
          linkId: "tote-bags",
          colourScheme: "dark",
          backgroundColour:""
        },
        {
          title: "Pencil Cases & Pouches",
          subtitle: "",
          imageUrl: "https://i.ibb.co/w761DL3/markus-spiske-f-WDZ2bhhuc8-unsplash.jpg",
          panelFormat: "image",
          panelId: "panel-4",
          linkId: "pencil-cases-pouches",
          colourScheme: "light",
          backgroundColour:""
        },
        {
          title: "Sakura Pens",
          subtitle: "",
          imageUrl: "https://i.ibb.co/tx0fqbs/Best-Black-Pens-Thumbnail.png",
          panelFormat: "image",
          panelId: "panel-5",
          linkId: "sakura",
          colourScheme: "light",
          backgroundColour:""
        },
        {
          title: "Sakura Pens",
          subtitle: "A Bullet Journaler's Must Have",
          imageUrl: "",
          panelFormat: "text",
          panelId: "panel-6",
          linkId: "sakura",
          colourScheme: "light",
          backgroundColour:"brown"
        },
      ],
    };
  }

  render() {
    return (
      <div className="main-content-wrapper">
        {this.state.mainContentPanels.map(({ title , subtitle, imageUrl, panelFormat, panelId, linkId, colourScheme, backgroundColour}) => (
          panelFormat === "text" ?
          <TextPanel key={panelId} title={title} subtitle={subtitle} imageUrl={imageUrl} panelFormat={panelFormat} panelId={panelId} linkId={linkId} colourScheme={colourScheme} backgroundColour={backgroundColour} />
          :
          <ImagePanel key={panelId} title={title} subtitle={subtitle} imageUrl={imageUrl} panelFormat={panelFormat} panelId={panelId} linkId={linkId} colourScheme={colourScheme} backgroundColour={backgroundColour} />
        ))}
      </div>
    );
  }
}

export default HomepageMainContent;

