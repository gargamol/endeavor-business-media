const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=45',
      srcset: [
        'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=90 2x',
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
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'LEDsMagazine.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.ledsmagazine.com/files/base/pennwell/leds/logo.png?h=60',
    bgColor: '#1371b8',
  },
};
