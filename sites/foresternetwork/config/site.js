const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/forester_media_inc-/' },
    { provider: 'twitter', href: 'https://twitter.com/foresternetwork' },
    { provider: 'facebook', href: 'https://www.facebook.com/foresternetwork' },
  ],
  gtm: {
    gtmContainer: 'GTM-TNFLPD9',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://base.imgix.net/files/base/ebm/frn/image/static/logo/site_logo.png?h=60',
    },
    // to: '',
  },
};
