const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const leaders = require('./leaders');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.militaryaerospace.com/files/base/pennwell/mae/mae-header-logo.png?h=60',
      srcset: [
        'https://img.militaryaerospace.com/files/base/pennwell/mae/mae-header-logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.militaryaerospace.com/files/base/pennwell/mae/mae-header-logo.png?h=60',
      srcset: [
        'https://img.militaryaerospace.com/files/base/pennwell/mae/mae-header-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'http://www.linkedin.com/groups/PennWell-Aerospace-Defense-Media-Group-2448878', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MilAero', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/pages/Military-Aerospace-Electronics/174732214480', target: '_blank' },
  ],
  identityX: {
    appId: '5e69476e87774f53aaa7dce6',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-N3KJF35',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Since the beginning, Military & Aerospace Electronics has been on top of COTS issues and continues to be the clear leader when it comes to coverage of COTS success stories, COTS failures, and COTS trends. Articles focus on how and when designers should use mil-spec, non-developmental-item, or commercial off-the-shelf (COTS) equipment and components. Feature articles cover timely issues of design trends, emerging standards, programs, budgets, contracts, and application success stories.',
  },
  contactUs: {
    branding: {
      bgColor: '#00417e',
      logo: 'https://img.militaryaerospace.com/files/base/pennwell/mae/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'MilitaryAerospace.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.militaryaerospace.com/files/base/pennwell/mae/logo.png?h=60',
    bgColor: '#00417e',
  },
};
