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
      src: 'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=60',
      srcset: [
        'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=60',
      srcset: [
        'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/vehicleservicepros/', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/VehicleSrvcPros', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/VehicleServicePros', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCoU05FUN1AdvXj5AjyfX83Q?view_as=subscriber', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/vehiclesrvcpros/', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a60658e67bec4255ae5a',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: '97b09a4b-8eb8-475f-b72f-19d0f2073256',
    submissionFieldIds: [
      { name: 'comments', id: '57e55318bcf2d6f3c30e0833' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-KVJDNC9',
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
      logo: 'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=60',
    },
    to: 'contact@vehicleservicepros.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'sales@vehicleservicepros.com',
    sendFrom: 'VehicleServicePros.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=60',
    bgColor: '#164f77',
  },
};
