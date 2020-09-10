const navigation = require('./navigation');
const leaders = require('./leaders');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.vision-systems.com/files/base/pennwell/vsd/vsd-navbar-logo.png?h=60',
      srcset: [
        'https://img.vision-systems.com/files/base/pennwell/vsd/vsd-navbar-logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.vision-systems.com/files/base/pennwell/vsd/vsd-navbar-logo.png?h=60',
      srcset: [
        'https://img.vision-systems.com/files/base/pennwell/vsd/vsd-navbar-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/vision-systems-design', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/Vision_Systems', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/VisionSystemsDesign?ref=hl', target: '_blank' },
  ],
  identityX: {
    appId: '5e693fd8fa46c40ea6eb29f5',
    enabled: true,
    comments: { enabled: true },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-TMGQFQZ',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ed1b24',
      logo: 'https://img.vision-systems.com/files/base/pennwell/vsd/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'VisionSystems.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.vision-systems.com/files/base/pennwell/vsd/logo.png?h=60',
    bgColor: '#fff',
  },
};
