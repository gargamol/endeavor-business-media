const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.cpapracticeadvisor.com/files/base/cygnus/cpa/image/static/logo/site_logo_white.png?h=60',
      srcset: [
        'https://img.cpapracticeadvisor.com/files/base/cygnus/cpa/image/static/logo/site_logo_white.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.cpapracticeadvisor.com/files/base/cygnus/cpa/image/static/logo/site_logo_white.png?h=60',
      srcset: [
        'https://img.cpapracticeadvisor.com/files/base/cygnus/cpa/image/static/logo/site_logo_white.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/in/cpapracticeadvisor', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/cpapracadvisor', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/cpapracticeadvisor', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-WKFS2G3',
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
      logo: 'https://img.cpapracticeadvisor.com/files/base/cygnus/cpa/image/static/logo/site_logo_white.png?h=60',
    },
    to: 'isaac.obannon@cpapracticeadvisor.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bstrobel@southcomm.com',
    sendFrom: 'SecurityInfoWatch.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.cpapracticeadvisor.com/files/base/cygnus/cpa/image/static/logo/site_logo_white.png?h=60',
    bgColor: '#164f77',
  },
};
