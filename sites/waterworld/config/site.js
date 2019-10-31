const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.waterworld.com/files/base/ebm/stw/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.waterworld.com/files/base/ebm/stw/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.waterworld.com/files/base/ebm/stw/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.waterworld.com/files/base/ebm/stw/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/waterworld-magazine/about/' },
    { provider: 'twitter', href: 'https://twitter.com/WaterWorld' },
    { provider: 'facebook', href: 'https://www.facebook.com/waterworldmag' },
  ],
  gtm: {
    containerId: 'GTM-MXBGH3V',
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
      logo: 'https://img.waterworld.com/files/base/ebm/stw/image/static/logo/site_logo.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
};
