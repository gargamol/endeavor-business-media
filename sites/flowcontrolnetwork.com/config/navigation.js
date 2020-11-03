const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/instrumentation', label: 'Instrumentation & Measurement' },
      { href: '/valves-actuators', label: 'Valves & Actuators' },
      { href: '/bearings-seals', label: 'Bearings & Seals' },
      { href: '/piping-tubing-hosing', label: 'Piping, Tubing & Hosing' },
      { href: '/process-control-automation', label: 'Process Control' },
      { href: '/pumps-motors-drives', label: 'Pumps, Motors & Drives' },
    ],
  },
  secondary: {
    items: [
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/events', label: 'Events' },
      { href: '/news-reports', label: 'News & Reports' },
      { href: '/innovation-awards', label: 'Innovation Awards' },
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
      { href: 'https://industrial.endeavorb2b.com/p-i', label: 'Advertise', target: '_blank' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/instrumentation', label: 'Instrumentation & Measurement' },
        { href: '/valves-actuators', label: 'Valves & Actuators' },
        { href: '/bearings-seals', label: 'Bearings & Seals' },
        { href: '/piping-tubing-hosing', label: 'Piping, Tubing & Hosing' },
        { href: '/process-control-automation', label: 'Process Control & Automation' },
        { href: '/pumps-motors-drives', label: 'Pumps, Motors & Drives' },
        { href: '/maintenance-safety', label: 'Maintenance & Safety' },
        { href: '/industry-applications', label: 'Industry Applications' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Magazine' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/events', label: 'Events' },
        { href: '/news-reports', label: 'News & Reports' },
        { href: '/innovation-awards', label: 'Innovation Awards' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://industrial.endeavorb2b.com/p-i', label: 'Advertise', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
