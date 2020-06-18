const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterPref', { omedasite: 'LWPrefPage' })
  .addForm('newsletterSubscribe', { omedasite: 'LWNewPref' })
  .addForm('newsletterSignup', { omedasite: 'LWNewPref', query: { pk: 'ARTWEB' } });

module.exports = config;
