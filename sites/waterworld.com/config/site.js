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
      src: 'https://img.waterworld.com/files/base/ebm/ww/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.waterworld.com/files/base/ebm/ww/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.waterworld.com/files/base/ebm/ww/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.waterworld.com/files/base/ebm/ww/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/waterworld-magazine/about/' },
    { provider: 'twitter', href: 'https://twitter.com/WaterWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/waterworldmag' },
  ],
  identityX: {
    appId: '5e693f8afa46c473a7eb29f4',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-TC76RXH',
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
      logo: 'https://img.waterworld.com/files/base/ebm/ww/image/static/logo/site_logo.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'WaterWorld.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.waterworld.com/files/base/ebm/ww/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
