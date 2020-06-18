const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterPref', { omedasite: 'OfficerPrefPage' })
  .addForm('newsletterSubscribe', { omedasite: 'OfficerNewPref' })
  .addForm('newsletterSignup', { omedasite: 'OfficerNewPref', query: { pk: 'ARTWEB' } });
module.exports = config;
