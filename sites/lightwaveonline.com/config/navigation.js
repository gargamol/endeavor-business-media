const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/network-design', label: 'Network Design' },
      { href: '/fttx', label: 'FTTX' },
      { href: '/network-automation', label: 'Network Automation' },
      { href: '/data-center', label: 'Data Center' },
      { href: '/5g-mobile', label: '5G Mobile' },
      { href: '/test', label: 'Test' },
      { href: '/optical-tech', label: 'Optical Tech' },
      { href: '/business', label: 'Business' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/videos', label: 'Videos' },
      { href: '/white-papers', label: 'White Papers' },
      { href: '/webcasts', label: 'Webcasts' },
      { href: '/directory', label: 'Buyer\'s Guide' },
      { href: 'https://lightwavereviews.secure-platform.com/a/organizations/main/home', label: 'Innovation Reviews', target: '_blank' },
      { href: '/on-topic', label: 'On Topic' },
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
        { href: '/network-design', label: 'Network Design' },
        { href: '/fttx', label: 'FTTX' },
        { href: 'https://endeavor.swoogo.com/2020-fttxcellence-awards', label: '2020 FTTXcellence Award', target: '_blank' },
        { href: '/network-automation', label: 'Network Automation' },
        { href: '/data-center', label: 'Data Center' },
        { href: '/5g-mobile', label: '5G Mobile' },
        { href: '/test', label: 'Test' },
        { href: '/optical-tech', label: 'Optical Tech' },
        { href: '/business', label: 'Business' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/videos', label: 'Videos' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: '/events', label: 'Events' },
        { href: '/on-topic', label: 'On Topic' },
        { href: '/directory', label: 'Buyer\'s Guide' },
        { href: 'https://lightwavereviews.secure-platform.com/a/organizations/main/home', label: 'Innovation Reviews', target: '_blank' },
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
