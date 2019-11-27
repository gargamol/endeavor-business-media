const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/3287176/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/officercom', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/officercom', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-TZNC8W8',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#222222',
      logo: 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=60',
    },
    to: 'support@officer.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jsimon@southcomm.com',
    sendFrom: 'LaserFocusWorld.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.officer.com/files/base/cygnus/ofcr/image/static/logo/site_logo.png?h=60',
    bgColor: '#222222',
  },
};
