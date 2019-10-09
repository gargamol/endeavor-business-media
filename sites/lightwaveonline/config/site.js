const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=45',
      srcset: [
        'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=60',
      srcset: [
        'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000932', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/lightwaveonline', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/LightwaveOnline', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5B8WRGS',
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
      logo: 'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'LightwaveOnline.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.lightwaveonline.com/files/base/pennwell/lw/logo.png?h=60',
    bgColor: '#fff',
  },
};
