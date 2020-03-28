const navigation = require('./navigation');
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
    enabled: false,
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
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.cablinginstall.com/files/base/pennwell/cim/logo.png?h=60',
    bgColor: '#ee2e30',
  },
  magazines: {
    description: '',
  },
};
