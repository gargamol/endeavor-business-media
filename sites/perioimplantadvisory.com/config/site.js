const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.perioimplantadvisory.com/files/base/pennwell/pia/logo.png?h=60',
      srcset: [
        'https://img.perioimplantadvisory.com/files/base/pennwell/pia/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.perioimplantadvisory.com/files/base/pennwell/pia/logo.png?h=60',
      srcset: [
        'https://img.perioimplantadvisory.com/files/base/pennwell/pia/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/surgical-restorative-resource?trk=other_brands_name' },
    { provider: 'twitter', href: 'https://twitter.com/PI_Advisory' },
    { provider: 'facebook', href: 'https://www.facebook.com/SurgicalRR' },
  ],
  identityX: {
    appId: '5e6946b0fa46c443e6eb2a0c',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-T972GJR',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#000',
      logo: 'https://img.perioimplantadvisory.com/files/base/pennwell/pia/logo.png?h=60',
    },
    to: 'dental@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'zacharyk@pennwell.com',
    sendFrom: 'PerioImpantAdvisory.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.perioimplantadvisory.com/files/base/pennwell/pia/logo.png?h=60',
    bgColor: '#000',
  },
};
