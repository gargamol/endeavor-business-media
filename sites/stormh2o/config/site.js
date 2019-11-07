const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green_green.png?h=45',
      srcset: [
        'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=60',
      srcset: [
        'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/19195026' },
    { provider: 'twitter', href: 'https://twitter.com/stormwatermag?lang=en' },
    { provider: 'facebook', href: 'https://www.facebook.com/StormwaterMagazine' },
  ],
  gtm: {
    containerId: 'GTM-TLSVP6Q',
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
      logo: 'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo_green.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'StormH2O.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.stormh2o.com/files/base/ebm/stw/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
