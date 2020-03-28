const navigation = require('./navigation');
const gam = require('./gam');
const gcse = require('./gcse');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  gcse,
  nativeX,
  dragonForms,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=60',
      srcset: [
        'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=60',
      srcset: [
        'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/4000114/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/RDHmag', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/RDHMagazine', target: '_blank' },
  ],
  identityX: {
    appId: '5e69466987774f3141a7dcdb',
    enabled: false,
  },
  gtm: {
    containerId: 'GTM-5ZXPSXX',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'RDH is published monthly for dental hygienists committed to ongoing professional growth. Reporting on topics such as hygiene practice management, evidence-based periodontics, infection control, oral pathology, new product evaluations and continuing education, RDH covers crucial issues that affect hygienists every day.',
  },
  contactUs: {
    branding: {
      bgColor: '#8956a7',
      logo: 'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=60',
    },
    to: 'dental@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'zacharyk@pennwell.com',
    sendFrom: 'RDHMag.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=60',
    bgColor: '#8956a7',
  },
};
