const navigation = require('./navigation');

module.exports = {
  navigation,
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
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/VehicleServicePros.com-4056085/about', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/VehicleSrvcPros', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/VehicleServicePros', target: '_blank' },
  ],
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
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.vehicleservicepros.com/files/base/cygnus/vspc/image/static/logo/vsp.png?h=60',
    bgColor: '#164f77',
  },
};
