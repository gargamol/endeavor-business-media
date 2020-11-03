const navigation = require('./navigation');
const leaders = require('./leaders');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/grading-and-excavation-contractor/', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/gradingexcavationcontractor/', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/gxcontractor/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/TheGXMagazine', target: '_blank' },

  ],
  identityX: {
    appId: '5e69485787774f08c7a7dcec',
    enabled: true,
    comments: { enabled: true },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-55MWDH4',
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
      logo: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'GXContractor.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
