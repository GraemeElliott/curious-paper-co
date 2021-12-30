import React from "react";
import "./homepage.component.scss";
import { TextPanel, ImagePanel } from "./panels/panels.component";

class HomepageComponent extends React.Component {
    constructor() {
      super();
  
      this.state = {
        homepagePanels: [
            {
                title: "Notebooks",
                subtitle: "For Doodling & Scribbling",
                imageUrl: "",
                panelFormat: "text",
                panelId: "panel-1",
                category: "products",
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
                category: "brands",
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
                category: "products",
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
                category: "products",
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
                category: "brands",
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
                category: "brands",
                linkId: "sakura",
                colourScheme: "light",
                backgroundColour:"brown"
              },
        ],
      };
    }
  
    render() {
      return (
        <div className="homepage-content-wrapper">
          {this.state.homepagePanels.map(({ title , subtitle, imageUrl, panelFormat, panelId, category, linkId, colourScheme, backgroundColour}) => (
            panelFormat === "text" ?
            <TextPanel key={panelId} title={title} subtitle={subtitle} imageUrl={imageUrl} panelFormat={panelFormat} panelId={panelId} category={category} linkId={linkId} colourScheme={colourScheme} backgroundColour={backgroundColour} />
            :
            <ImagePanel key={panelId} title={title} subtitle={subtitle} imageUrl={imageUrl} panelFormat={panelFormat} panelId={panelId} category={category} linkId={linkId} colourScheme={colourScheme} backgroundColour={backgroundColour} />
          ))}
        </div>
      );
    }
  }

export default HomepageComponent;