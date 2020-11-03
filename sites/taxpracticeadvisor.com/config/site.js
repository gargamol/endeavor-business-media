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
      src: 'https://img.taxpracticeadvisor.com/files/base/cygnus/tpa/image/static/tpa-logo.jpg?h=60',
      srcset: [
        'https://img.taxpracticeadvisor.com/files/base/cygnus/tpa/image/static/tpa-logo.jpg?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.taxpracticeadvisor.com/files/base/cygnus/tpa/image/static/tpa-logo.jpg?h=60',
      srcset: [
        'https://img.taxpracticeadvisor.com/files/base/cygnus/tpa/image/static/tpa-logo.jpg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
  ],
  identityX: {
    appId: '5e28a62858e67bff3455ae5c',
    enabled: false,
    comments: { enabled: false },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-KBBG9FZ',
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
      logo: 'https://img.taxpracticeadvisor.com/files/base/cygnus/tpa/image/static/tpa-logo.jpg?h=60',
    },
    to: 'isaac.obannon@cpapracticeadvisor.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bstrobel@southcomm.com',
    sendFrom: 'CPAPracticeAdvisor.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.taxpracticeadvisor.com/files/base/cygnus/tpa/image/static/tpa-logo.jpg?h=60',
    bgColor: '#164f77',
  },
};
