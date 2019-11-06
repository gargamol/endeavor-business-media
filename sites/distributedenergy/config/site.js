const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.distributedenergy.com/files/base/ebm/dte/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.distributedenergy.com/files/base/ebm/dte/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.distributedenergy.com/files/base/ebm/dte/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.distributedenergy.com/files/base/ebm/dte/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [],
  gtm: {
    containerId: 'GTM-K7P6D3Z',
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
      logo: 'https://img.distributedenergy.com/files/base/ebm/dte/image/static/logo/site_logo.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'DistributedEnergy.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.distributedenergy.com/files/base/ebm/dte/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
