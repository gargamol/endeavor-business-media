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
      src: 'https://img.cablinginstall.com/files/base/pennwell/cim/cim-header-logo-2.png?h=60',
      srcset: [
        'https://img.cablinginstall.com/files/base/pennwell/cim/cim-header-logo-2.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.cablinginstall.com/files/base/pennwell/cim/logo.png?h=60',
      srcset: [
        'https://img.cablinginstall.com/files/base/pennwell/cim/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/3962332', target: '_blank' },
    { provider: 'twitter', href: 'http://twitter.com/CABLINGMAG', target: '_blank' },
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Cabling-Installation-and-Maintenance/298118662118', target: '_blank' },
  ],
  identityX: {
    appId: '5e69496bfa46c403f2eb2a18',
    enabled: true,
    comments: { enabled: true },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-5VGZZRL',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  contactUs: {
    branding: {
      bgColor: '#ee2e30',
      logo: 'https://img.cablinginstall.com/files/base/pennwell/cim/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'CablingInstall.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.cablinginstall.com/files/base/pennwell/cim/logo.png?h=60',
    bgColor: '#ffffff',
  },
  magazines: {
    description: '',
  },
};
