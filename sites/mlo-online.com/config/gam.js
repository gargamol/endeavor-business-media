const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'MLO' });

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
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('information-technology', [
    { name: 'lb1', templateName: 'LB', path: 'information-technology/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'information-technology/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'information-technology/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'information-technology/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'information-technology/load-more' },
    { name: 'reskin', path: 'information-technology/reskin' },
  ])
  .setAliasAdUnits('molecular', [
    { name: 'lb1', templateName: 'LB', path: 'molecular/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'molecular/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'molecular/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'molecular/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'molecular/load-more' },
    { name: 'reskin', path: 'molecular/reskin' },
  ])
  .setAliasAdUnits('diagnostics', [
    { name: 'lb1', templateName: 'LB', path: 'diagnostics/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'diagnostics/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'diagnostics/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'diagnostics/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'diagnostics/load-more' },
    { name: 'reskin', path: 'diagnostics/reskin' },
  ])
  .setAliasAdUnits('disease', [
    { name: 'lb1', templateName: 'LB', path: 'disease/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'disease/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'disease/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'disease/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'disease/load-more' },
    { name: 'reskin', path: 'disease/reskin' },
  ])
  .setAliasAdUnits('management', [
    { name: 'lb1', templateName: 'LB', path: 'management/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'management/load-more' },
    { name: 'reskin', path: 'management/reskin' },
  ]);

module.exports = config;
