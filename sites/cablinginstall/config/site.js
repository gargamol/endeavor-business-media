const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.cablinginstall.com/files/base/pennwell/cim/cim-header-logo-2.png?h=45',
      srcset: [
        'https://img.cablinginstall.com/files/base/pennwell/cim/cim-header-logo-2.png?h=90 2x',
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
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'CablingInstall.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.cablinginstall.com/files/base/pennwell/cim/logo.png?h=60',
    bgColor: '#ee2e30',
  },
  magazines: {
    description: '',
  },
};
