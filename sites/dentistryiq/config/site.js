const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/diq/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dentistry-iq' },
    { provider: 'twitter', href: 'https://twitter.com/dentistryiq' },
    { provider: 'facebook', href: 'https://www.facebook.com/DentistryIQ' },
  ],
  gtm: {
    containerId: 'GTM-WFGHPBF',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
};
