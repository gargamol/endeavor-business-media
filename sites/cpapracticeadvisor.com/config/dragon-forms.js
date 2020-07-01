const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterSubscribe', { omedasite: 'CPAnewpref' })
  .addForm('newsletterManage', { omedasite: 'CPAprefpage' })
  .addForm('newsletterSignup', { omedasite: 'CPAnewpref', query: { pk: 'ARTWEB' } });
module.exports = config;
