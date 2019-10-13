const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/biooptics-world/' },
    { provider: 'twitter', href: 'https://twitter.com/BioOptics' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/BioOptics-World/131802223749' },
  ],
  gtm: {
    containerId: 'GTM-53W9PRB',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'BioOptics World magzaine has merged with its sister publication, Laser Focus World, with coverage on optical technologies and instrumentation for the Life Sciences.',
  },
  contactUs: {
    branding: {
      bgColor: '#445b51',
      logo: 'https://base.imgix.net/files/base/pennwell/bow/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
};
