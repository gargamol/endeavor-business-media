const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/3287176/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/officercom', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/officercom', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a80658e67b295255ae5d',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: 'b105cce3-d815-4347-9ae4-b203d58347a4',
    submissionFieldIds: [
      { name: 'comments', id: '57e55318bcf2d6f3c30e0833' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-PXB3XNX',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#222222',
      logo: 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=60',
    },
    to: 'support@officer.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'notifications@officer.com',
    sendFrom: 'Officer.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=60',
    bgColor: '#222222',
  },
};
