const navigation = require('./navigation');
const leaders = require('./leaders');
const gam = require('./gam');
const gcse = require('./gcse');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  gcse,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.mswmanagement.com/files/base/ebm/msw/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/msw-management/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/mswmanagement', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/MSWManagement/', target: '_blank' },
  ],
  identityX: {
    appId: '5e69472787774f797ba7dce4',
    enabled: true,
    comments: { enabled: true },
  },
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
