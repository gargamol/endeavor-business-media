const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
      srcset: [
        'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
      srcset: [
        'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/8244648/profile', target: '_blank' },
    { provider: 'twitter', href: 'http://www.twitter.com/SecInfoWatch', target: '_blank' },
    { provider: 'facebook', href: 'http://www.facebook.com/SecInfoWatch', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-KMZ7FHS',
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
      logo: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
    },
    to: 'nbrokamp@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'nbrokamp@endeavorb2b.com',
    sendFrom: 'SecurityInfoWatch.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
    bgColor: '#164f77',
  },
};
