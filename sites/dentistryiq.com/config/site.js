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
      src: 'https://img.dentistryiq.com/files/base/pennwell/diq/logo.png?h=60',
      srcset: [
        'https://img.dentistryiq.com/files/base/pennwell/diq/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.dentistryiq.com/files/base/pennwell/diq/logo.png?h=60',
      srcset: [
        'https://img.dentistryiq.com/files/base/pennwell/diq/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dentistry-iq' },
    { provider: 'twitter', href: 'https://twitter.com/dentistryiq' },
    { provider: 'facebook', href: 'https://www.facebook.com/DentistryIQ' },
  ],
  identityX: {
    appId: '5e694932fa46c4abbaeb2a16',
    enabled: false,
  },
  gtm: {
    containerId: 'GTM-WFGHPBF',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#0f4069',
      logo: 'https://img.dentistryiq.com/files/base/pennwell/diq/logo.png?h=60',
    },
    to: 'dental@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'zkulsrud@endeavorb2b.com',
    sendFrom: 'DentistryIQ.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.dentistryiq.com/files/base/pennwell/diq/logo.png?h=60',
    bgColor: '#0f4069',
  },
};
