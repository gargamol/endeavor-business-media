const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=45',
      srcset: [
        'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
      srcset: [
        'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/2233840', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/vendingmagazine', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/vendingmarket/', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-5J26FCD',
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
      logo: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
    },
    to: 'editors@vendingmarketwatch.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'editors@vendingmarketwatch.com',
    sendFrom: 'vendingmarketwatch.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.vendingmarketwatch.com/files/base/cygnus/vmw/image/static/logo/vending.png?h=60',
    bgColor: '#000',
  },
};
