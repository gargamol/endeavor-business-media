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
      src: 'https://img.processingmagazine.com/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=60',
      srcset: [
        'https://img.processingmagazine.com/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.processingmagazine.com/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=60',
      srcset: [
        'https://img.processingmagazine.com/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4050058/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ProcessingMag', target: '_blank' },
    { provider: 'facebook', href: 'http://www.facebook.com/ProcessingMagazine', target: '_blank' },
  ],
  identityX: {
    appId: '5e6946ca87774f3ad8a7dcdf',
    enabled: true,
  },
  gtm: {
    containerId: 'GTM-T8FSMGJ',
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
      logo: 'https://img.processingmagazine.com/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=60',
    },
    to: 'contact@processingmagazine.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'ProcessingMagazine.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.processingmagazine.com/files/base/ebm/pcm/image/static/pcm_logo_white.png?h=60',
    bgColor: '#164f77',
  },
};
