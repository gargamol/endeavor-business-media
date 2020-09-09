const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/top-tax-news', label: 'Top Tax News' },
      { href: '/individual-income-taxes', label: 'Individual Income Taxes' },
      { href: '/business-income-taxes', label: 'Business Income Taxes' },
      { href: '/payroll-taxes', label: 'Payroll Taxes' },
      { href: '/sales-use-taxes', label: 'Sales and Use Taxes' },
      { href: '/practice-management', label: 'Practice Management' },
    ],
  },
  secondary: {
    items: [
      { href: 'https://www.ensuringsuccess.com/', label: 'Ensuring Success', target: '_blank' },
      { href: '/webinars', label: 'Webinars' },
      { href: '/tax-resources', label: 'Tax Resources' },
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
        { href: '/top-tax-news', label: 'Top Tax News' },
        { href: '/individual-income-taxes', label: 'Individual Income Taxes' },
        { href: '/business-income-taxes', label: 'Business Income Taxes' },
        { href: '/payroll-taxes', label: 'Payroll Taxes' },
        { href: '/sales-use-taxes', label: 'Sales and Use Taxes' },
        { href: '/practice-management', label: 'Practice Management' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: 'https://www.ensuringsuccess.com/', label: 'Ensuring Success', target: '_blank' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/tax-resources', label: 'Tax Resources' },
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
