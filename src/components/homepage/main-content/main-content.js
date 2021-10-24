import React from "react";
import "./main-content.scss";
import { TextPanel, ImagePanel } from "./main-content-panel/main-content-panel";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectHomepagePanels } from "../../../redux/homepage/homepage.selectors";

const HomepageMainContent = ({ mainContentPanels }) => {
  return (
      <div className="main-content-wrapper">
        {mainContentPanels.map(({ title , subtitle, imageUrl, panelFormat, panelId, linkId, colourScheme, backgroundColour}) => (
          panelFormat === "text" ?
          <TextPanel key={panelId} title={title} subtitle={subtitle} imageUrl={imageUrl} panelFormat={panelFormat} panelId={panelId} linkId={linkId} colourScheme={colourScheme} backgroundColour={backgroundColour} />
          :
          <ImagePanel key={panelId} title={title} subtitle={subtitle} imageUrl={imageUrl} panelFormat={panelFormat} panelId={panelId} linkId={linkId} colourScheme={colourScheme} backgroundColour={backgroundColour} />
        ))}
      </div>
  )};

  const mapStateToProps = createStructuredSelector ({
    mainContentPanels: selectHomepagePanels
  });

export default connect(mapStateToProps)(HomepageMainContent);

