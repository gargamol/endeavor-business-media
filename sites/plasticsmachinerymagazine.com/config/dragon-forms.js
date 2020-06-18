const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterPref', { omedasite: 'PMMPrefPage' })
  .addForm('newsletterSubscribe', { omedasite: 'PMMNewPref' })
  .addForm('newsletterSignup', { omedasite: 'PMMNewPref', query: { pk: 'ARTWEB' } });
module.exports = config;
