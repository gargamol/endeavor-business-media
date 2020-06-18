const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/collection', label: 'Collection' },
      { href: '/landfills', label: 'Landfills' },
      { href: '/maintenance', label: 'Maintenance' },
      { href: '/recycling', label: 'Recycling' },
      { href: '/technology', label: 'Technology' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazine ' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/white-papers', label: 'Free Reports' },
      { href: '/supplements', label: 'Supplements' },
      { href: '/leaders', label: 'Leaders' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/collection', label: 'Collection' },
        { href: '/landfills', label: 'Landfills' },
        { href: '/maintenance', label: 'Maintenance' },
        { href: '/recycling', label: 'Recycling' },
        { href: '/technology', label: 'Technology' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Magazine' },
        { href: '/white-papers', label: 'Free Reports' },
        { href: '/supplements', label: 'Supplements' },
        { href: '/leaders', label: 'Leaders' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
