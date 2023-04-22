import { createContext, useState } from 'react';

const faqsData = [
  {
    id: 1,
    Q: 'What is Bookmark?',
    A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?',
  },

  {
    id: 2,
    Q: 'How can i request a new browser?',
    A: 'Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.',
  },

  {
    id: 3,
    Q: 'Is there a mobile app?',
    A: 'Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.',
  },
  {
    id: 4,
    Q: 'What about other Chromium browsers?',
    A: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.',
  },
];

export const FaqsContext = createContext({
  faqs: [],
});

export const FaqsProvider = ({ children }) => {
  const [faqs] = useState(faqsData);

  const value = { faqs };

  return <FaqsContext.Provider value={value}>{children}</FaqsContext.Provider>;
};
