const DragonFormsConfig = require('@endeavor-business-media/package-shared/config/dragon-forms');

const config = new DragonFormsConfig({ url: 'https://endeavor.dragonforms.com' });

config
  .addForm('doNotSell', { omedasite: 'EBM_DoNotSell' })
  .addForm('newsletterSignup', { omedasite: 'END14_PBnew' })
  .addForm('newsletterSubscribe', { omedasite: 'PROCnewpref' })
  .addForm('newsletterManage', { omedasite: 'PROCPrefPage' });

module.exports = config;
