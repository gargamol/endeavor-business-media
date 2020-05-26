const navigation = require('./navigation');
const gam = require('./gam');
const gcse = require('./gcse');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

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
      src: 'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=60',
      srcset: [
        'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=60',
      srcset: [
        'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000932', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/lightwaveonline', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/LightwaveOnline', target: '_blank' },
  ],
  identityX: {
    appId: '5e69478587774f677ea7dce7',
    enabled: false,
  },
  gtm: {
    containerId: 'GTM-5B8WRGS',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#000',
      logo: 'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'LightwaveOnline.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=60',
    bgColor: '#fff',
  },
};
