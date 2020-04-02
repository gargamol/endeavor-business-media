const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'UP' });

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
  .setAliasAdUnits('covid-19', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19/load-more' },
    { name: 'reskin', path: 'covid-19/reskin' },
  ])
  .setAliasAdUnits('transmission-distribution', [
    { name: 'lb1', templateName: 'LB1', path: 'trans-dist/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'trans-dist/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'trans-dist/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'trans-dist/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'trans-dist/load-more' },
  ])
  .setAliasAdUnits('vehicles-accessories', [
    { name: 'lb1', templateName: 'LB1', path: 'vehicles-access/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'vehicles-access/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vehicles-access/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'vehicles-access/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'vehicles-access/load-more' },
  ])
  .setAliasAdUnits('tools-supplies', [
    { name: 'lb1', templateName: 'LB1', path: 'tools-supplies/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tools-supplies/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tools-supplies/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tools-supplies/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tools-supplies/load-more' },
  ])
  .setAliasAdUnits('safety', [
    { name: 'lb1', templateName: 'LB1', path: 'safety/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'safety/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'safety/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'safety/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'safety/load-more' },
  ])
  .setAliasAdUnits('line-construction-maintenance', [
    { name: 'lb1', templateName: 'LB1', path: 'line-const-maint/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'line-const-maint/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'line-const-maint/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'line-const-maint/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'line-const-maint/load-more' },
  ])
  .setAliasAdUnits('test-measurement', [
    { name: 'lb1', templateName: 'LB1', path: 'test-measure/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'test-measure/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test-measure/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test-measure/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test-measure/load-more' },
  ]);

module.exports = config;
