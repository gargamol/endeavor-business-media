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
      src: 'https://img.masstransitmag.com/files/base/cygnus/mass/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.masstransitmag.com/files/base/cygnus/mass/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.masstransitmag.com/files/base/cygnus/mass/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.masstransitmag.com/files/base/cygnus/mass/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://www.twitter.com/MassTransitMag', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/MassTransit', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/masstransit', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a5db58e67b5d6b55ae57',
    enabled: true,
  },
  radix: {
    enabled: true,
    appId: 'd1e4f8c6-656d-4fd7-807c-3fe704ff27a6',
    submissionFieldIds: [
      { name: 'comments', id: '5be3510eadff35d1547a2ab9' },
    ],
  },
  gtm: {
    containerId: 'GTM-PR268NB',
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
      logo: 'https://img.masstransitmag.com/files/base/cygnus/mass/image/static/logo/site_logo.png?h=60',
    },
    to: 'contact@masstransitmag.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'sales@masstransitmag.com',
    sendFrom: 'MassTransitMag.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.masstransitmag.com/files/base/cygnus/mass/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
  transitBids: {
    headerImage: {
      src: 'https://img.masstransitmag.com/files/base/cygnus/mass/image/2020/01/New_RFP.5e2f210df31bf.png',
      alt: 'Promote RFPs, RFQs and Bids',
    },
    contact: {
      name: 'Jesse Gonzalez',
      email: 'jgonzalez@masstransitmag.com',
    },
  },
};
