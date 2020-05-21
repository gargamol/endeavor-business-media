const navigation = require('./navigation');
const gam = require('./gam');
const gcse = require('./gcse');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

module.exports = {
  navigation,
  gam,
  gcse,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=60',
      srcset: [
        'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=60',
      srcset: [
        'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/leds-magazine/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ledsmagazine', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/LEDsMagazine?fref=ts', target: '_blank' },
  ],
  identityX: {
    appId: '5e6947a687774fe0a8a7dce9',
    enabled: true,
  },
  gtm: {
    containerId: 'GTM-PLNZ46S',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#1371b8',
      logo: 'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'LEDsMagazine.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=60',
    bgColor: '#1371b8',
  },
};
