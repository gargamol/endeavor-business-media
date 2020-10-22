const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/security-executives', label: 'Security Executives' },
      { href: '/integrators', label: 'Integrators' },
      { href: '/video-surveillance', label: 'Video Surveillance' },
      { href: '/access-identity', label: 'Access & Identity' },
      { href: '/residential-technologies', label: 'Residential Tech' },
      { href: '/alarms-monitoring', label: 'Alarms & Monitoring' },
      { href: '/cybersecurity', label: 'Cybersecurity' },
      { href: '/perimeter-security', label: 'Perimeter Security' },
    ],
  },
  secondary: {
    items: [
      { href: '/advertise', label: 'Advertise' },
      { href: '/subscribe', label: 'Subscribe' },
      { href: 'https://forums.securityinfowatch.com', label: 'Forums', target: '_blank' },
      { href: '/directory', label: 'Buyer\'s Guide' },
      { href: '/cannabis-security', label: 'Cannabis Security' },
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
        { href: '/security-executives', label: 'Security Executives' },
        { href: '/integrators', label: 'Integrators' },
        { href: '/video-surveillance', label: 'Video Surveillance' },
        { href: '/access-identity', label: 'Access & Identity' },
        { href: '/residential-technologies', label: 'Residential Technologies' },
        { href: '/alarms-monitoring', label: 'Alarms & Monitoring' },
        { href: '/cybersecurity', label: 'Cybersecurity' },
        { href: '/covid-19', label: 'COVID-19' },
        { href: '/perimeter-security', label: 'Perimeter Security' },
        { href: '/cannabis-security', label: 'Cannabis Security' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine/5447e151c99db54158d9e7e1', label: 'Security Business Magazine' },
        { href: '/magazine/5447e204c99db54158d9e809', label: 'Security Technology Executive Magazine' },
        { href: 'https://forums.securityinfowatch.com', label: 'Forums', target: '_blank' },
        { href: '/directory', label: 'Buyer\'s Guide' },
        { href: '/government', label: 'Government' },
        { href: '/critical-infrastructure', label: 'Critical Infrastructure' },
        { href: '/retail', label: 'Retail' },
        { href: '/education', label: 'Education' },
        { href: '/healthcare', label: 'Healthcare' },
        { href: '/whitepapers', label: 'Whitepapers' },
        { href: '/webinars', label: 'Webinars' },
      ],
    },
    {
      label: 'Events',
      items: [
        { href: '/events', label: 'Calendar' },
        { href: '/secured-cities', label: 'Secured Cities' },
        { href: '/11713862', label: 'Fast50' },
        { href: '/isc-west', label: 'ISC West' },
        { href: '/gsx', label: 'GSX' },
        { href: '/ces', label: 'CES' },
        { href: '/21121461', label: 'Vanguard Awards' },
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
