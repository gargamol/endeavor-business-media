const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterSubscribe', { omedasite: 'DE_eNLshort' })
  // .addForm('newsletterManage', { omedasite: 'DEprefpage' });
  .addForm('newsletterSignup', { omedasite: 'DE_eNLshort' });

module.exports = config;
