const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/btr/btr-logo-navbar.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/btr/btr-logo-navbar.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/3998846' },
    { provider: 'twitter', href: 'http://twitter.com/BTReport' },
    { provider: 'facebook', href: 'https://www.facebook.com/BTReport' },
  ],
  gtm: {
    containerId: 'GTM-T3RWG44',
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
      logo: 'https://base.imgix.net/files/base/pennwell/btr/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
};
