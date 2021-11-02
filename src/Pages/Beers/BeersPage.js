import React from 'react';
import { Box } from '@chakra-ui/react';
import CardBeer from '../../Components/CardBeer/CardBeer';
import backgroundBeer from '../../Images/backgroundBeers.jpg';
import kolschimg from '../../Images/beerKolsch.png';
import scotchimg from '../../Images/beerScotch.png';
import porterimg from '../../Images/beerPorter.png';
import ipaimg from '../../Images/beerIpa.png';



const beers = [
  {
    id: 0,
    name: 'Kolsch',
    image: kolschimg,
    pleasures: 'GOLDEN, SOFT, FRESH, FRUIT',
    description: 'There are many refreshing golden beers. But fruity and with final hints of hops, there is only one style, the Kolsch. At Antares, we rescued the old recipe for the drinkers favorite beer in Cologne, Germany, and honor it since 1998. In our kitchen, its legacy remains intact.',
    features: { alcohol: '5', bitterness: 'Moderate', IBU: '22', OG:'1045'},
    accompany: 'Soft dishes, Cold cuts, Salads, German food, Chicken, Lemon Pie.'
  },
  {
    id: 1,
    name: 'Scotch',
    image: scotchimg,
    pleasures: 'RUBY, MALTOSE, SWEET, WITH BODY',
    description: 'Scotland is a land of barley and Scotch Ale carries that landscape steeped in its genetic code. Intense ruby. Six degrees of alcohol. Sweet and malty. The most widely served Antares in our Brewpub. A formula that will stand the test of time.',
    features: { alcohol: '6', bitterness: 'Low', IBU: '18', OG:'1056'},
    accompany: 'Sweet and sour dishes, Smoked dishes, Antares potatoes, Pork, Lamb'
  },
  {
    id: 2,
    name: 'Porter',
    image: porterimg,
    pleasures: 'DARK BROWN, ROASTED MALTA, CHOCOLATE, COFFEE',
    description: 'Dark malts. Pungent and nocturnal flavor and aroma. Chocolate, black sugar and coffee. Porter is Antares tribute beer to the culture of the first pubs in the port of London. Cheers.',
    features: { alcohol: '5,5', bitterness: 'Moderate', IBU: '27', OG:'1052'},
    accompany: 'Sausages, Seafood, Burgers, Grilled or smoked meats'
  },
  {
    id: 3,
    name: 'India Pale Ale',
    image: ipaimg,
    pleasures: 'AMBER, BITTER, HOPS, CITRUS',
    description: 'From England to India there is a long way. In 1780, Mr. Hodgson discovered that by raising the hops and the alcohol content, the beer reached its destination intact. He named his formula India Pale Ale. At Antares, we add American hops with the presence of flowers and citrus. Our traveling beer.',
    features: { alcohol: '6,6', bitterness: 'High', IBU: '58', OG:'1060'},
    accompany: 'Pizza, Spicy and spicy dishes, Indian food'
  }
];


const BeersPage = () => {
  return (
    <Box pt='7rem' backgroundImage={backgroundBeer} backgroundSize='cover' backgroundAttachment='fixed'>
      {beers.map((item)=> {
        return (<CardBeer key={item.id} beer={item}/>);
      })}
    </Box>
  );
};

export default BeersPage;

