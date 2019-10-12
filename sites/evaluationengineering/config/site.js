const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/2192877/profile' },
    { provider: 'twitter', href: 'https://twitter.com/EE_Engineers' },
    { provider: 'facebook', href: 'https://www.facebook.com/EvaluationEngineering' },
  ],
  gtm: {
    containerId: 'GTM-MKGZ9CS',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#d71920',
      logo: 'https://base.imgix.net/files/base/ebm/ee/image/static/ee_logo.png',
    },
    to: 'kcormier@evaluationengineering.com',
  },
};
