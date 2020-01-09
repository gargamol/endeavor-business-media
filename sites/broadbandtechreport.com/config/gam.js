const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'BTR' });

config
  .setTemplate('LB1', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('LB2', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50]] },
    ],
  })
  .setTemplate('RAIL1', { size: [300, 250] })
  .setTemplate('RAIL2', { size: [300, 600] })
  .setTemplate('LM', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('docsis', [
    { name: 'lb1', templateName: 'LB1', path: 'docsis/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'docsis/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'docsis/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'docsis/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'docsis/load-more' },
    { name: 'reskin', path: 'docsis/reskin' },
  ])
  .setAliasAdUnits('fiber', [
    { name: 'lb1', templateName: 'LB1', path: 'fiber/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'fiber/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'fiber/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'fiber/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'fiber/load-more' },
    { name: 'reskin', path: 'fiber/reskin' },
  ])
  .setAliasAdUnits('in-the-home', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-home/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-home/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-home/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-home/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-home/load-more' },
    { name: 'reskin', path: 'in-the-home/reskin' },
  ])
  .setAliasAdUnits('wireless', [
    { name: 'lb1', templateName: 'LB1', path: 'wireless/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'wireless/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'wireless/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'wireless/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'wireless/load-more' },
    { name: 'reskin', path: 'wireless/reskin' },
  ])
  .setAliasAdUnits('video', [
    { name: 'lb1', templateName: 'LB1', path: 'video/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'video/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'video/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'video/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'video/load-more' },
    { name: 'reskin', path: 'video/reskin' },
  ])
  .setAliasAdUnits('business-services', [
    { name: 'lb1', templateName: 'LB1', path: 'business-services/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'business-services/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'business-services/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'business-services/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'business-services/load-more' },
    { name: 'reskin', path: 'business-services/reskin' },
  ])
  .setAliasAdUnits('back-office', [
    { name: 'lb1', templateName: 'LB1', path: 'back-office/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'back-office/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'back-office/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'back-office/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'back-office/load-more' },
    { name: 'reskin', path: 'back-office/reskin' },
  ])
  .setAliasAdUnits('test', [
    { name: 'lb1', templateName: 'LB1', path: 'test/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'test/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test/load-more' },
    { name: 'reskin', path: 'test/reskin' },
  ])
  .setAliasAdUnits('btr-america-latina', [
    { name: 'lb1', templateName: 'LB1', path: 'btr-america-latina/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'btr-america-latina/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'btr-america-latina/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'btr-america-latina/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'btr-america-latina/load-more' },
    { name: 'reskin', path: 'btr-america-latina/reskin' },
  ]);

module.exports = config;
