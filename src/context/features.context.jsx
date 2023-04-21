import { createContext, useState } from 'react';
import feature1 from '../images/illustration-features-tab-1.svg';
import feature2 from '../images/illustration-features-tab-2.svg';
import feature3 from '../images/illustration-features-tab-3.svg';

const featuresData = [
  {
    id: 1,
    name: 'Simple Bookmarking',
    heading: 'Bookmark in one click',
    alt: 'drag and drop interface',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    img: feature1,
  },

  {
    id: 2,
    name: 'Speedy Searching',
    heading: 'Speedy Searching',
    alt: 'finding of websites',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    img: feature2,
  },

  {
    id: 3,
    name: 'Easy Sharing',
    heading: 'Sharing of bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    img: feature3,
  },
];

export const FeaturesContext = createContext({
  features: [],
  selectedIndexFeature: 0,
  setSelectedIndexFeature: () => {},
});

export const FeatureProvider = ({ children }) => {
  const [features] = useState(featuresData);
  const [selectedIndexFeature, setSelectedIndexFeature] = useState(0);

  const value = { features, selectedIndexFeature, setSelectedIndexFeature };

  return <FeaturesContext.Provider value={value}>{children}</FeaturesContext.Provider>;
};
