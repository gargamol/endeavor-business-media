const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/in/watertechnology', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/WaterTechOnline', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/WaterTechnology', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-T8FSMGJ',
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
      logo: 'https://base.imgix.net/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=60',
    },
    // to: '',
  },
};
