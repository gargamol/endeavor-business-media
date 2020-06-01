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
      src: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=45',
      srcset: [
        'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
      srcset: [
        'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/2233840', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/vendingmagazine', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/vendingmarket/', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a61658e67b865e55ae5b',
    enabled: true,
    comments: { enabled: false },
  },
  radix: {
    enabled: true,
    appId: 'a6537ea9-0f1c-4c6f-a9e4-411cdf348a8e',
    submissionFieldIds: [
      { name: 'comments', id: '5be35119adff35d1547a4f7f' },
    ],
  },
  gtm: {
    containerId: 'GTM-MH74BHQ',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#000',
      logo: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
    },
    to: 'editors@vendingmarketwatch.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'editors@vendingmarketwatch.com',
    sendFrom: 'vendingmarketwatch.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
    bgColor: '#000',
  },
};
