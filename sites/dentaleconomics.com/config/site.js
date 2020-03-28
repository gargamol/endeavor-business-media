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
      src: 'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=60',
      srcset: [
        'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=60',
      srcset: [
        'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/dental-economics?trk=biz-brand-tree-co-name', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/dentalmagazine', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/DentalEconomics', target: '_blank' },
  ],
  identityX: {
    appId: '5e69494987774f276ba7dcf4',
    enabled: false,
  },
  gtm: {
    containerId: 'GTM-58C63G3',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Dental Economics is the leading business journal for the dental profession. For more than 100 years, DE has helped dentists improve their practices through sound business advice and updates on new products, techniques, and technologies. Magazine subscriptions are free to dentists and select groups of dental professionals. Each month, DE also publishes e-newsletters on specialized topics. DE partners with DentistryIQ.com to deliver current information on practice management, dental products, and clincial improvement.',
  },
  contactUs: {
    branding: {
      bgColor: '#285923',
      logo: 'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=60',
    },
    to: 'dental@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'zacharyk@pennwell.com',
    sendFrom: 'DentalEconomics.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.dentaleconomics.com/files/base/pennwell/de/logo.png?h=60',
    bgColor: '#285923',
  },
};
