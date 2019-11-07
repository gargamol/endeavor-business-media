const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'Officer' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('RAIL1', { size: [300, 250] })
  .setTemplate('RAIL2', { size: [300, 600] })
  .setTemplate('LM', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'Officer_BS' },
    { name: 'lb2', templateName: 'LB', path: 'Officer_LB' },
    { name: 'rail1', templateName: 'RAIL1', path: 'Officer_MR' },
    { name: 'rail2', templateName: 'RAIL2', path: 'Officer_HP' },
    { name: 'load-more', templateName: 'LM', path: 'Officer_FL' },
    { name: 'reskin', path: 'Officer_Reskin' },
    { name: 'wa', path: 'Officer_WA' },
  ]);

module.exports = config;
