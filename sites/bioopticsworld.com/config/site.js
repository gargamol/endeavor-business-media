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
      src: 'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=60',
      srcset: [
        'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=60',
      srcset: [
        'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/biooptics-world/' },
    { provider: 'twitter', href: 'https://twitter.com/BioOptics' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/BioOptics-World/131802223749' },
  ],
  identityX: {
    appId: '5e693f6bfa46c41a1eeb29f3',
    enabled: false,
  },
  gtm: {
    containerId: 'GTM-53W9PRB',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'BioOptics World magzaine has merged with its sister publication, Laser Focus World, with coverage on optical technologies and instrumentation for the Life Sciences.',
  },
  contactUs: {
    branding: {
      bgColor: '#445b51',
      logo: 'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'BioOpticWorld.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.bioopticsworld.com/files/base/pennwell/bow/logo.png?h=60',
    bgColor: '#445b51',
  },
};
