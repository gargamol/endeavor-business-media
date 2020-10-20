const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/vehicles-fleet', label: 'Vehicles & Fleet' },
      { href: '/tactical', label: 'Tactical' },
      { href: '/training-careers', label: 'Training & Careers' },
      { href: '/on-the-street', label: 'On The Street' },
      { href: '/investigations', label: 'Investigations' },
      { href: '/command-hq', label: 'Command/HQ' },
      { href: '/directory', label: 'Product Guide' },
      { href: 'https://forum.officer.com/', label: 'Forums' },
    ],
  },
  secondary: {
    items: [
      { href: '/features/honoring-the-fallen', label: 'Honoring The Fallen' },
      { href: '/magazine', label: 'Publications' },
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/contact-us', label: 'Contact Us' },
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
        { href: '/vehicles-fleet', label: 'Vehicles & Fleet' },
        { href: '/covid-19', label: 'COVID-19' },
        { href: '/tactical', label: 'Tactical' },
        { href: '/training-careers', label: 'Training & Careers' },
        { href: '/on-the-street', label: 'On The Street' },
        { href: '/investigations', label: 'Investigations' },
        { href: '/command-hq', label: 'Command/HQ' },
        { href: '/directory', label: 'Product Guide' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: 'https://forum.officer.com/', label: 'Forums' },
        { href: '/directory', label: 'Product Guide' },
        { href: '/features/honoring-the-fallen', label: 'Honoring The Fallen' },
        { href: '/manufacturers-corner', label: 'Manufactures Corner' },
        { href: '/features/by-contributor', label: 'By Contributors' },
        { href: '/blogs/expert-insights', label: 'Expert Insights' },
        { href: '/magazine', label: 'Publications' },
        { href: '/whitepapers', label: 'Whitepapers' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/careers', label: 'Careers' },
        { href: '/events', label: 'Events' },
        { href: '/federal', label: 'Federal' },
        { href: '/videos', label: 'Videos' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
