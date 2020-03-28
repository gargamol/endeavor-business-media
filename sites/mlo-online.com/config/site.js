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
      src: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/?home=&gid=2301731&trk=groups_guest_about-h-logo', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/MedicalLabMLO', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/MLOMedicalLaboratoryObserver', target: '_blank' },
  ],
  identityX: {
    appId: '5e69474987774f9568a7dce5',
    enabled: false,
  },
  gtm: {
    containerId: 'GTM-NBTQ9MW',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'mlo-online.com features online exclusive content as well as feature articles and stories from our print publications. Access digital editions and recent issues for our magazine here.',
  },
  contactUs: {
    branding: {
      bgColor: '#000000',
      logo: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=60',
    },
    to: 'krussell@mlo-online.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'krussell@mlo-online.com',
    sendFrom: 'Medical Laboratory Observer <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.mlo-online.com/files/base/ebm/mlo/image/static/logo/site_logo.png?h=60',
    bgColor: '#000000',
  },
};
