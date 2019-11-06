const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=45',
      srcset: [
        'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [],
  gtm: {
    containerId: 'GTM-55MWDH4',
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
      logo: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=60',
    },
    to: 'adsales@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'adsales@endeavorb2b.com',
    sendFrom: 'GXContractor.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.gxcontractor.com/files/base/ebm/gxc/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
