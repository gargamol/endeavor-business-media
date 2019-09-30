const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/ias/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/intelligent-aerospace', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/intelligentaero', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/intelligentaerospace/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-K79SD2G',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
};
