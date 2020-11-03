const navigation = require('./navigation');
const leaders = require('./leaders');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=60',
      srcset: [
        'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=60',
      srcset: [
        'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/water-technology-magazine/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/WaterTechOnline', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/WaterTechnology', target: '_blank' },
  ],
  identityX: {
    appId: '5e693fa987774f4b11a7dcd1',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-TSPJXZ4',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=60',
    },
    to: 'jsemple@endeavorbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsemple@endeavorbusinessmedia.com',
    sendFrom: 'WaterTechOnline.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=60',
    bgColor: '#164f77',
  },
};
