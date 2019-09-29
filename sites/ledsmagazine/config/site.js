const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/leds/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/leds-magazine/' },
    { provider: 'twitter', href: 'https://twitter.com/ledsmagazine' },
    { provider: 'facebook', href: 'https://www.facebook.com/LEDsMagazine?fref=ts' },
  ],
  gtm: {
    containerId: 'GTM-T29NVLB',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
};
