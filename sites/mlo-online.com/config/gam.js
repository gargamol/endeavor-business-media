const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'MLO' });

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
  .setTemplate('MS', { size: [300, 50] })
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
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('information-technology', [
    { name: 'lb1', templateName: 'LB1', path: 'information-technology/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'information-technology/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'information-technology/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'information-technology/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'information-technology/load-more' },
    { name: 'reskin', path: 'information-technology/reskin' },
  ])
  .setAliasAdUnits('molecular', [
    { name: 'lb1', templateName: 'LB1', path: 'molecular/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'molecular/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'molecular/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'molecular/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'molecular/load-more' },
    { name: 'reskin', path: 'molecular/reskin' },
  ])
  .setAliasAdUnits('diagnostics', [
    { name: 'lb1', templateName: 'LB1', path: 'diagnostics/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'diagnostics/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'diagnostics/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'diagnostics/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'diagnostics/load-more' },
    { name: 'reskin', path: 'diagnostics/reskin' },
  ])
  .setAliasAdUnits('disease', [
    { name: 'lb1', templateName: 'LB1', path: 'disease/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'disease/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'disease/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'disease/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'disease/load-more' },
    { name: 'reskin', path: 'disease/reskin' },
  ])
  .setAliasAdUnits('management', [
    { name: 'lb1', templateName: 'LB1', path: 'management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'management/load-more' },
    { name: 'reskin', path: 'management/reskin' },
  ]);

module.exports = config;
