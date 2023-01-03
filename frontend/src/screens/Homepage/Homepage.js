import React from 'react';
import './Homepage.scss';
import {
  TextPanel,
  ImagePanel,
} from '../../components/homepage/HomepagePanels';

const homepagePanels = [
  {
    title: 'Notebooks',
    subtitle: 'For Doodling & Scribbling',
    imageUrl: '',
    panelFormat: 'text',
    panelId: 'panel-1',
    category: 'products',
    collectionId: 'notebooks',
    colourScheme: 'dark',
    backgroundColour: 'dark-blue',
  },
  {
    title: 'Archer & Olive',
    subtitle: '',
    imageUrl: 'https://i.ibb.co/61P4w7B/archer-and-olive.jpg',
    panelFormat: 'image',
    panelId: 'panel-2',
    category: 'products/brands',
    collectionId: 'archer-&-olive',
    colourScheme: 'light',
    backgroundColour: '',
  },
  {
    title: 'Tote Bags',
    subtitle: '',
    imageUrl: 'https://i.ibb.co/x1Gz6jM/greta-t-UVd-NPqo-WWo-E-unsplash.jpg',
    panelFormat: 'image',
    panelId: 'panel-3',
    category: 'products',
    collectionId: 'prints-accessories/tote-bags',
    colourScheme: 'dark',
    backgroundColour: '',
  },
  {
    title: 'Pencil Cases & Pouches',
    subtitle: '',
    imageUrl:
      'https://i.ibb.co/w761DL3/markus-spiske-f-WDZ2bhhuc8-unsplash.jpg',
    panelFormat: 'image',
    panelId: 'panel-4',
    category: 'products',
    collectionId: 'pencil-cases-pouches',
    colourScheme: 'light',
    backgroundColour: '',
  },
  {
    title: 'Sakura Pens',
    subtitle: '',
    imageUrl: 'https://i.ibb.co/tx0fqbs/Best-Black-Pens-Thumbnail.png',
    panelFormat: 'image',
    panelId: 'panel-5',
    category: 'products/brands',
    collectionId: 'sakura',
    colourScheme: 'light',
    backgroundColour: '',
  },
  {
    title: 'Sakura Pens',
    subtitle: "A Bullet Journaler's Must Have",
    imageUrl: '',
    panelFormat: 'text',
    panelId: 'panel-6',
    category: 'products/brands',
    collectionId: 'sakura',
    colourScheme: 'light',
    backgroundColour: 'brown',
  },
];

const Homepage = () => {
  return (
    <div className="homepage-wrapper">
      {homepagePanels.map(
        ({
          title,
          subtitle,
          imageUrl,
          panelFormat,
          panelId,
          category,
          collectionId,
          colourScheme,
          backgroundColour,
        }) =>
          panelFormat === 'text' ? (
            <TextPanel
              key={panelId}
              title={title}
              subtitle={subtitle}
              imageUrl={imageUrl}
              panelFormat={panelFormat}
              panelId={panelId}
              category={category}
              collectionId={collectionId}
              colourScheme={colourScheme}
              backgroundColour={backgroundColour}
            />
          ) : (
            <ImagePanel
              key={panelId}
              title={title}
              subtitle={subtitle}
              imageUrl={imageUrl}
              panelFormat={panelFormat}
              panelId={panelId}
              category={category}
              collectionId={collectionId}
              colourScheme={colourScheme}
              backgroundColour={backgroundColour}
            />
          )
      )}
    </div>
  );
};

export default Homepage;
