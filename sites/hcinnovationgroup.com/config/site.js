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
      src: 'https://img.hcinnovationgroup.com/files/base/ebm/hci/image/static/logo/site_logo.png?h=70',
      srcset: [
        'https://img.hcinnovationgroup.com/files/base/ebm/hci/image/static/logo/site_logo.png?h=140 2x',
      ],
    },
    footer: {
      src: 'https://img.hcinnovationgroup.com/files/base/ebm/hci/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.hcinnovationgroup.com/files/base/ebm/hci/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/90501/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/HCInnovationGrp', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/HealthcareInnovationGroup', target: '_blank' },
  ],
  identityX: {
    appId: '5e69487b87774f43b7a7dced',
    enabled: false,
  },
  gtm: {
    containerId: 'GTM-WV5FMR3',
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
      logo: 'https://img.hcinnovationgroup.com/files/base/ebm/hci/image/static/logo/site_logo.png?h=60',
    },
    to: 'amularski@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'HCInnovationGroup.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.hcinnovationgroup.com/files/base/ebm/hci/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
