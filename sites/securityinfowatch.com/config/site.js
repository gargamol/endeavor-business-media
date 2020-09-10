const navigation = require('./navigation');
const leaders = require('./leaders');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
      srcset: [
        'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
      srcset: [
        'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/5113743/', target: '_blank' },
    { provider: 'twitter', href: 'http://www.twitter.com/SecInfoWatch', target: '_blank' },
    { provider: 'facebook', href: 'http://www.facebook.com/SecInfoWatch', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a5f258e67bcde455ae58',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: '378a77a4-aac4-492d-a625-a608d958e587',
    submissionFieldIds: [
      { name: 'comments', id: '5be350daadff35d154799025' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: '54e907df9d8e8e66dbaf63ac1938c740',
  },
  gtm: {
    containerId: 'GTM-KMZ7FHS',
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
      logo: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
    },
    to: 'nbrokamp@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'nbrokamp@endeavorb2b.com',
    sendFrom: 'SecurityInfoWatch.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
    bgColor: '#164f77',
  },
};
