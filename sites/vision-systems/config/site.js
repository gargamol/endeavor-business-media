const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/vsd/vsd-navbar-logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/vsd/vsd-navbar-logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/vsd/vsd-navbar-logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/vsd/vsd-navbar-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/vision-systems-design', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/Vision_Systems', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/VisionSystemsDesign?ref=hl', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-TMGQFQZ',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ed1b24',
      logo: 'https://base.imgix.net/files/base/pennwell/vsd/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
};
