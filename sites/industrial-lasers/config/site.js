const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=45',
      srcset: [
        'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=60',
      srcset: [
        'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/4000113', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ILS_for_Mfg', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/industriallasersolutions', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-K9WQRTW',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Lasers for Manufacturing Industrial Laser Solutions has one focus, industrial laser materials processing. We are devoted exclusively to global coverage of industrial laser applications, technology, and the people and companies who participate in this, the largest commercial portion of the global laser market. Our uniquely qualified international editorial staff has accumulated experience in this technology field exceeding 100 years.',
  },
  contactUs: {
    branding: {
      bgColor: '#106d7d',
      logo: 'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'IndustrialLasers.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=60',
    bgColor: '#106d7d',
  },
};
