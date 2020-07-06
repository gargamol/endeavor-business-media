const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterSignup', { omedasite: 'MSWnewpref', query: { pk: 'ARTWEB' } })
  .addForm('newsletterSubscribe', { omedasite: 'MSWnewpref' })
  .addForm('newsletterManage', { omedasite: 'MSWprefpage' });

module.exports = config;
