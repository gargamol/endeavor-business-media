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
      src: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=60',
      srcset: [
        'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=60',
      srcset: [
        'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/intelligent-aerospace', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/intelligentaero', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/intelligentaerospace/', target: '_blank' },
  ],
  identityX: {
    appId: '5e694803fa46c4637beb2a11',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-K79SD2G',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#106d7d',
      logo: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'Intelligent-Aerospace.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.intelligent-aerospace.com/files/base/pennwell/ias/logo.png?h=60',
    bgColor: '#106d7d',
  },
};
