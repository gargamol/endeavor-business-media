const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/covid-19', label: 'COVID-19' },
      { href: '/whats-trending', label: "What's Trending" },
      { href: '/ergonomics', label: 'Ergonomics' },
      { href: '/infection-control', label: 'Infection Control' },
      { href: '/patient-care', label: 'Patient Care' },
      { href: '/pathology', label: 'Pathology' },
      { href: '/career-profession', label: 'Career & Profession' },
    ],
  },
  secondary: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/job-postings', label: 'Career Center' },
      { href: 'https://www.rdhunderoneroof.com/', label: 'Conference', target: '_blank' },
      { href: 'https://dentalacademyofce.com/default.aspx', label: 'Earn CE', target: '_blank' },
      { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples', target: '_blank' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/subscribe', label: 'Subscribe' },
      { href: '/videos', label: 'Videos' },
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
      { href: 'https://www.dentistryiq.com/page/advertise', label: 'Advertise', target: '_blank' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/covid-19', label: 'COVID-19' },
        { href: '/whats-trending', label: "What's Trending" },
        { href: '/ergonomics', label: 'Ergonomics' },
        { href: '/infection-control', label: 'Infection Control' },
        { href: '/patient-care', label: 'Patient Care' },
        { href: '/pathology', label: 'Pathology' },
        { href: '/career-profession', label: 'Career & Profession' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: 'https://www.rdhunderoneroof.com/', label: 'Conference', target: '_blank' },
        { href: 'https://dentalacademyofce.com/default.aspx', label: 'Earn CE', target: '_blank' },
        { href: 'https://www.dentistryiq.com/products/free-samples', label: 'Free Samples', target: '_blank' },
        { href: '/job-postings', label: 'Career Center' },
        { href: '/magazine', label: 'Magazine' },
        { href: '/page/submission-guidelines', label: 'Submission Guidelines' },
        { href: '/videos', label: 'Videos' },
        { href: '/webcasts', label: 'Webcasts' },
        { href: '/white-papers', label: 'White Papers' },
        { href: dragonForms.getFormUrl('newsletterSubscribe'), label: 'eNewsletter', target: '_blank' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/page/about-us', label: 'About Us' },
        { href: 'https://www.dentistryiq.com/page/advertise', label: 'Advertise', target: '_blank' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: '/subscribe', label: 'Subscribe' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
