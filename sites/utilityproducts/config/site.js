const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/up/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/up/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/up/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/utility-products?trk=other_brands_logo' },
    { provider: 'twitter', href: 'http://twitter.com/UtilityProducts' },
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Utility-Products-Magazine/133739816672957' },
  ],
  gtm: {
    containerId: 'GTM-52ZXGBW',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Utility Products serves readers who work in electric, cable and telecom utilities, as well as contractors, manufacturers, suppliers and other service companies who support these utilities. ',
  },
};
