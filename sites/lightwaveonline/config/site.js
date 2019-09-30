const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/lw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000932', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/lightwaveonline', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/LightwaveOnline', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5B8WRGS',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
};
