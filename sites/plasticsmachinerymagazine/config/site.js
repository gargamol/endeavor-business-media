const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/plastics-machinery-magazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/PlasticsMM', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-MWVRJBJ',
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
      logo: 'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
    },
    to: 'sales@plasticsmachinerymagazine.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'sales@plasticsmachinerymagazine.com',
    sendFrom: 'SecurityInfoWatch.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.plasticsmachinerymagazine.com/files/base/ebm/pmm/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
