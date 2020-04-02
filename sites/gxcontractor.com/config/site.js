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
  socialMediaLinks: [],
  identityX: {
    appId: '5e69485787774f08c7a7dcec',
    enabled: false,
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
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
