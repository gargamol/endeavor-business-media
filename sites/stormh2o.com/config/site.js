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
      src: 'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=60',
      srcset: [
        'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=60',
      srcset: [
        'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/19195026' },
    { provider: 'twitter', href: 'https://twitter.com/stormwatermag?lang=en' },
    { provider: 'facebook', href: 'https://www.facebook.com/StormwaterMagazine' },
  ],
  identityX: {
    appId: '5e69463dfa46c45109eb2a0b',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-TLSVP6Q',
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
      logo: 'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'StormH2O.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
