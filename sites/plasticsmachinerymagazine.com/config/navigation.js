const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/additive-manufacturing', label: 'Additive Manufacturing' },
      { href: '/blow-molding', label: 'Blow Molding' },
      { href: '/thermoforming', label: 'Thermoforming' },
      { href: '/compounding', label: 'Compounding' },
      { href: '/injection-molding', label: 'Injection Molding' },
      { href: '/extrusion', label: 'Extrusion' },
      { href: '/recycling', label: 'Recycling' },
      { href: '/molds-tooling', label: 'Molds & Tooling' },
      { href: '/feature', label: 'Features' },
    ],
  },
  secondary: {
    items: [
      { href: '/magazine', label: 'Digital Edition' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/product-innovations', label: 'Product Innovations' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/whitepapers', label: 'White Papers' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
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
        { href: '/additive-manufacturing', label: 'Additive Manufacturing' },
        { href: '/blow-molding', label: 'Blow Molding' },
        { href: '/thermoforming', label: 'Thermoforming' },
        { href: '/compounding', label: 'Compounding' },
        { href: '/injection-molding', label: 'Injection Molding' },
        { href: '/extrusion', label: 'Extrusion' },
        { href: '/recycling', label: 'Recycling' },
        { href: '/molds-tooling', label: 'Molds & Tooling' },
        { href: '/feature', label: 'Features' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Digital Edition' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/product-innovations', label: 'Product Innovations' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/whitepapers', label: 'White Papers' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
