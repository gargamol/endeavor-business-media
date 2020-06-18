const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterPref', { omedasite: 'LEDPrefPage' })
  .addForm('newsletterSubscribe', { omedasite: 'LEDNewPref' })
  .addForm('newsletterSignup', { omedasite: 'LEDNewPref', query: { pk: 'ARTWEB' } });

module.exports = config;
