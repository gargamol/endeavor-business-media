const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'WTO' });

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
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'default/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'default/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('process-water', [
    { name: 'lb1', templateName: 'LB1', path: 'process-water/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'process-water/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'process-water/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'process-water/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'process-water/load-more' },
    { name: 'reskin', path: 'process-water/reskin' },
  ])
  .setAliasAdUnits('wastewater', [
    { name: 'lb1', templateName: 'LB1', path: 'wastewater/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'wastewater/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'wastewater/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'wastewater/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'wastewater/load-more' },
    { name: 'reskin', path: 'wastewater/reskin' },
  ])
  .setAliasAdUnits('water-reuse', [
    { name: 'lb1', templateName: 'LB1', path: 'water-reuse/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'water-reuse/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'water-reuse/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'water-reuse/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'water-reuse/load-more' },
    { name: 'reskin', path: 'water-reuse/reskin' },
  ])
  .setAliasAdUnits('produced-water', [
    { name: 'lb1', templateName: 'LB1', path: 'produced-water/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'produced-water/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'produced-water/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'produced-water/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'produced-water/load-more' },
    { name: 'reskin', path: 'produced-water/reskin' },
  ])
  .setAliasAdUnits('industry', [
    { name: 'lb1', templateName: 'LB1', path: 'industry/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'industry/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'industry/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'industry/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'industry/load-more' },
    { name: 'reskin', path: 'industry/reskin' },
  ]);

module.exports = config;
