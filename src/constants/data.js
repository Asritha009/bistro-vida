import images from './images';

const wines = [
  {
    title: 'Wheat Beer',
    price: '₹1549',
    tags: 'AU | Bottle',
  },
  {
    title: 'Porter',
    price: '₹1649',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Rose',
    price: '₹1749',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Pale Ale',
    price: '₹1899',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Guinness',
    price: '₹1999',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹349',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹449',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Sidecar',
    price: '₹599',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹699',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Martini',
    price: '₹799',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Sense of satisfaction, at having eaten so well.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'New phase of the culinary .',
  },
  {
    imgUrl: images.award05,
    title: 'Best Multi-Cuisine Restaurant',
    subtitle: 'The restaurant chain that serves the best explored food.',
  },
  {
    imgUrl: images.award03,
    title: 'Best Chef led Restaurant of the Year',
    subtitle: 'A chef led restaurant serving delectable dishes',
  },
];

export default { wines, cocktails, awards };