import React from "react";
import "./main-content.scss";
import { TextPanel, ImagePanel } from "./main-content-panel/main-content-panel";

class HomepageMainContent extends React.Component {
  constructor() {
    super();

    this.state = {
      mainContentPanels: [
        {
          title: "Notebooks - Autumnal Collection",
          subtitle: "For Doodling & Scribbling",
          imageUrl: "",
          panelFormat: "text",
          panelId: "panel-1",
          linkId: "notebooks",
          colourScheme: "dark",
          backgroundColour:"red"
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
          title: "Notebooks - Autumnal Collection",
          subtitle: "For Doodling & Scribbling",
          imageUrl: "",
          panelFormat: "text",
          panelId: "panel-3",
          linkId: "archer-and-olive",
          colourScheme: "light",
          backgroundColour:""
        },
        {
          title: "Notebooks - Autumnal Collection",
          subtitle: "For Doodling & Scribbling",
          imageUrl: "",
          panelFormat: "text",
          panelId: "panel-4",
          linkId: "archer-and-olive",
          colourScheme: "light",
          backgroundColour:""
        },
        {
          title: "Notebooks - Autumnal Collection",
          subtitle: "For Doodling & Scribbling",
          imageUrl: "",
          panelFormat: "text",
          panelId: "panel-5",
          linkId: "archer-and-olive",
          colourScheme: "light",
          backgroundColour:""
        },
        {
          title: "Notebooks - Autumnal Collection",
          subtitle: "For Doodling & Scribbling",
          imageUrl: "",
          panelFormat: "text",
          panelId: "panel-6",
          linkId: "archer-and-olive",
          colourScheme: "light",
          backgroundColour:""
        },
      ],
    };
  }

  render() {
    return (
      <div className="main-content-wrapper">
        {this.state.mainContentPanels.map(({ title , subtitle, imageUrl, panelFormat, panelId, linkId, colourScheme, backgroundColour}) => (
          panelFormat === "text" ?
          <div>
          <TextPanel key={linkId} title={title} subtitle={subtitle} imageUrl={imageUrl} panelFormat={panelFormat} panelId={panelId} linkId={linkId} colourScheme={colourScheme} backgroundColour={backgroundColour} />
          </div>
          :
          <div>
          <ImagePanel key={linkId} title={title} subtitle={subtitle} imageUrl={imageUrl} panelFormat={panelFormat} panelId={panelId} linkId={linkId} colourScheme={colourScheme} backgroundColour={backgroundColour} />
          </div>
        ))}
      </div>
    );
  }
}

export default HomepageMainContent;

