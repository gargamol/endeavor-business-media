const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterSubscribe', { omedasite: 'OFFnewpref', query: { pk: 'HMWEB' } })
  .addForm('newsletterManage', { omedasite: 'OFFPrefPage' })
  .addForm('newsletterSignup', { omedasite: 'OFFnewpref', query: { pk: 'ARTWEB' } });

module.exports = config;
