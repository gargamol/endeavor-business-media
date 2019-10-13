const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/os/logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/pennwell/os/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/offshore-magazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/offshoremgzn', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/offshoremagazine', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-NFS8BVJ',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Offshore magazine covers the global trends and technologies for offshore oil and gas operations. Offshore covers the latest news, market trends, and products relative to oil and gas E&P operations. Each monthly issue contains current topics, special reports, in-depth interviews with industry executives, maps of the hottest offshore E&P areas and posters of important offshore technologies.',
  },
  contactUs: {
    branding: {
      bgColor: '#094e85',
      logo: 'https://base.imgix.net/files/base/pennwell/os/logo.png?h=60',
    },
    to: 'pwestervelt@pennwell.com',
  },
};
