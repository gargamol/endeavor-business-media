const navigation = require('./navigation');
const gam = require('./gam');
const gcse = require('./gcse');
const nativeX = require('./native-x');

module.exports = {
  navigation,
  gam,
  gcse,
  nativeX,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.broadbandtechreport.com/files/base/pennwell/btr/btr-logo-navbar.png?h=60',
      srcset: [
        'https://img.broadbandtechreport.com/files/base/pennwell/btr/btr-logo-navbar.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.broadbandtechreport.com/files/base/pennwell/btr/logo.png?h=60',
      srcset: [
        'https://img.broadbandtechreport.com/files/base/pennwell/btr/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/3998846' },
    { provider: 'twitter', href: 'http://twitter.com/BTReport' },
    { provider: 'facebook', href: 'https://www.facebook.com/BTReport' },
  ],
  gtm: {
    containerId: 'GTM-M2SKF2X',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#254497',
      logo: 'https://img.broadbandtechreport.com/files/base/pennwell/btr/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'BroadBandTechReport.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.broadbandtechreport.com/files/base/pennwell/btr/logo.png?h=60',
    bgColor: '#254497',
  },
};
