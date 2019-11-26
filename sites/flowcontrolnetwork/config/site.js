const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.flowcontrolnetwork.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=45',
      srcset: [
        'https://img.flowcontrolnetwork.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.flowcontrolnetwork.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=60',
      srcset: [
        'https://img.flowcontrolnetwork.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4068011', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/flowcontrol_mag', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/FlowControlMagazine', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-MNTKWH8',
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
      logo: 'https://img.flowcontrolnetwork.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=60',
    },
    to: 'contact@flowcontrolnetwork.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@endeavorb2b.com',
    sendFrom: 'FlowControlNetwork.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@endeavorb2b.com',
    logo: 'https://img.flowcontrolnetwork.com/files/base/ebm/fcn/image/static/fcn_logo_og.png?h=60',
    bgColor: '#164f77',
  },
};
