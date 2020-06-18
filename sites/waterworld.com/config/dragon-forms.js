const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterPref', { omedasite: 'WWPrefPage' })
  .addForm('newsletterSubscribe', { omedasite: 'WWNewPref' })
  .addForm('newsletterSignup', { omedasite: 'WWNewPref', query: { pk: 'ARTWEB' } });
module.exports = config;
