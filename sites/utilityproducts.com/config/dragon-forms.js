const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterPref', { omedasite: 'UPPrefPage' })
  .addForm('newsletterSubscribe', { omedasite: 'UP_NewPref' })
  .addForm('newsletterSignup', { omedasite: 'UP_NewPref', query: { pk: 'ARTWEB' } });

module.exports = config;
