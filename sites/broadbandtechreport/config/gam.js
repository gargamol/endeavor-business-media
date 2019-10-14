const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'BTR' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('CONTENT', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'default/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'default/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'default/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('docsis', [
    { name: 'lb1', templateName: 'LB', path: 'docsis/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'docsis/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'docsis/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'docsis/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'docsis/load-more' },
    { name: 'reskin', path: 'docsis/reskin' },
  ])
  .setAliasAdUnits('fiber', [
    { name: 'lb1', templateName: 'LB', path: 'fiber/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'fiber/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'fiber/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'fiber/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'fiber/load-more' },
    { name: 'reskin', path: 'fiber/reskin' },
  ])
  .setAliasAdUnits('in-the-home', [
    { name: 'lb1', templateName: 'LB', path: 'in-the-home/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'in-the-home/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'in-the-home/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'in-the-home/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'in-the-home/load-more' },
    { name: 'reskin', path: 'in-the-home/reskin' },
  ])
  .setAliasAdUnits('wireless', [
    { name: 'lb1', templateName: 'LB', path: 'wireless/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'wireless/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'wireless/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'wireless/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'wireless/load-more' },
    { name: 'reskin', path: 'wireless/reskin' },
  ])
  .setAliasAdUnits('video', [
    { name: 'lb1', templateName: 'LB', path: 'video/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'video/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'video/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'video/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'video/load-more' },
    { name: 'reskin', path: 'video/reskin' },
  ])
  .setAliasAdUnits('business-services', [
    { name: 'lb1', templateName: 'LB', path: 'business-services/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'business-services/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'business-services/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'business-services/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'business-services/load-more' },
    { name: 'reskin', path: 'business-services/reskin' },
  ])
  .setAliasAdUnits('back-office', [
    { name: 'lb1', templateName: 'LB', path: 'back-office/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'back-office/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'back-office/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'back-office/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'back-office/load-more' },
    { name: 'reskin', path: 'back-office/reskin' },
  ])
  .setAliasAdUnits('test', [
    { name: 'lb1', templateName: 'LB', path: 'test/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'test/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'test/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'test/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'test/load-more' },
    { name: 'reskin', path: 'test/reskin' },
  ])
  .setAliasAdUnits('btr-america-latina', [
    { name: 'lb1', templateName: 'LB', path: 'btr-america-latina/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'btr-america-latina/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'btr-america-latina/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'btr-america-latina/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'btr-america-latina/load-more' },
    { name: 'reskin', path: 'btr-america-latina/reskin' },
  ]);

module.exports = config;
