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
      src: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/1938315/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/FirehouseNews', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/firehousecom', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a5b558e67b455855ae55',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: 'de0a0c07-a04d-444d-a5bf-4212f9df63a3',
    submissionFieldIds: [
      { name: 'comments', id: '5a81ed3f74265bb4c80b1aca' },
    ],
  },
  gtm: {
    containerId: 'GTM-WZWBT3Q',
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
      logo: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
    },
    to: 'websupport@firehouse.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'rmi@firehouse.com',
    sendFrom: 'Firehouse.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
