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
      src: 'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/plastics-machinery-magazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/PlasticsMM', target: '_blank' },
  ],
  identityX: {
    appId: '5e69468c87774f11bba7dcdd',
    enabled: false,
  },
  gtm: {
    containerId: 'GTM-MWVRJBJ',
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
      logo: 'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
    },
    to: 'sales@plasticsmachinerymagazine.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'sales@plasticsmachinerymagazine.com',
    sendFrom: 'SecurityInfoWatch.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
