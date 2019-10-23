const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'MSW' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('LB2', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('CONTENT', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'default/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'default/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('collection', [
    { name: 'lb1', templateName: 'LB', path: 'collection/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'collection/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'collection/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'collection/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'collection/load-more' },
    { name: 'reskin', path: 'collection/reskin' },
    { name: 'wa', path: 'collection/wa' },
  ])
  .setAliasAdUnits('landfills', [
    { name: 'lb1', templateName: 'LB', path: 'landfills/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'landfills/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'landfills/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'landfills/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'landfills/load-more' },
    { name: 'reskin', path: 'landfills/reskin' },
    { name: 'wa', path: 'landfills/wa' },
  ])
  .setAliasAdUnits('maintenance', [
    { name: 'lb1', templateName: 'LB', path: 'maintenance/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'maintenance/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'maintenance/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'maintenance/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'maintenance/load-more' },
    { name: 'reskin', path: 'maintenance/reskin' },
    { name: 'wa', path: 'maintenance/wa' },
  ])
  .setAliasAdUnits('recycling', [
    { name: 'lb1', templateName: 'LB', path: 'recycling/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'recycling/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'recycling/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'recycling/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'recycling/load-more' },
    { name: 'reskin', path: 'recycling/reskin' },
    { name: 'wa', path: 'recycling/wa' },
  ])
  .setAliasAdUnits('technology', [
    { name: 'lb1', templateName: 'LB', path: 'technology/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'technology/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'technology/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'technology/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'technology/load-more' },
    { name: 'reskin', path: 'technology/reskin' },
    { name: 'wa', path: 'technology/wa' },
  ]);

module.exports = config;
