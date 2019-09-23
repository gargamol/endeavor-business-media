const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'UP' });

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
  .setAliasAdUnits('transmission-distribution', [
    { name: 'lb1', templateName: 'LB', path: 'trans-dist/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'trans-dist/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'trans-dist/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'trans-dist/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'trans-dist/load-more' },
  ])
  .setAliasAdUnits('vehicles-accessories', [
    { name: 'lb1', templateName: 'LB', path: 'vehicles-access/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'vehicles-access/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'vehicles-access/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'vehicles-access/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'vehicles-access/load-more' },
  ])
  .setAliasAdUnits('tools-supplies', [
    { name: 'lb1', templateName: 'LB', path: 'tools-supplies/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'tools-supplies/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'tools-supplies/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'tools-supplies/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'tools-supplies/load-more' },
  ])
  .setAliasAdUnits('safety', [
    { name: 'lb1', templateName: 'LB', path: 'safety/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'safety/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'safety/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'safety/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'safety/load-more' },
  ])
  .setAliasAdUnits('line-construction-maintenance', [
    { name: 'lb1', templateName: 'LB', path: 'line-const-maint/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'line-const-maint/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'line-const-maint/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'line-const-maint/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'line-const-maint/load-more' },
  ])
  .setAliasAdUnits('test-measurement', [
    { name: 'lb1', templateName: 'LB', path: 'test-measure/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'test-measure/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'test-measure/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'test-measure/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'test-measure/load-more' },
  ]);

module.exports = config;
