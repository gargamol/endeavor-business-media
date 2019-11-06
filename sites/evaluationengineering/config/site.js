const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.evaluationengineering.com/files/base/ebm/ee/image/static/ee_logo.png?h=45',
      srcset: [
        'https://img.evaluationengineering.com/files/base/ebm/ee/image/static/ee_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.evaluationengineering.com/files/base/ebm/ee/image/static/ee_logo.png?h=60',
      srcset: [
        'https://img.evaluationengineering.com/files/base/ebm/ee/image/static/ee_logo.png?h=120 2x',
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
      logo: 'https://img.evaluationengineering.com/files/base/ebm/ee/image/static/ee_logo.png',
    },
    to: 'kcormier@evaluationengineering.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'kcormier@evaluationengineering.com',
    sendFrom: 'EvaluationEngineering.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.evaluationengineering.com/files/base/ebm/ee/image/static/ee_logo.png?h=60',
    bgColor: '#d71920',
  },
};
