const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
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
  identityX: {
    appId: '5e28a5a358e67b178d55ae54',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: '3356a6f6-3a09-4e7e-89cc-cc0a6bce87d3',
    submissionFieldIds: [
      { name: 'comments', id: '5be350f5adff35d15479db56' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
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
    sendFrom: 'CPAPracticeAdvisor.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.cpapracticeadvisor.com/files/base/cygnus/cpa/image/static/logo/site_logo_white.png?h=60',
    bgColor: '#164f77',
  },
};
