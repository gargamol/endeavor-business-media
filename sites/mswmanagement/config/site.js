const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [],
  gtm: {
    containerId: 'GTM-TRZPQ44',
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
      logo: 'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'MSWManagement.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
