const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterPref', { omedasite: 'AUTMPrefPage' })
  .addForm('newsletterSubscribe', { omedasite: 'AUTMNewPref' })
  .addForm('newsletterSignup', { omedasite: 'AUTMNewPref', query: { pk: 'ARTWEB' } });

module.exports = config;
