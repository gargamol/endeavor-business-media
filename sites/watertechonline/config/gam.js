const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'WTO' });

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
  .setAliasAdUnits('process-water', [
    { name: 'lb1', templateName: 'LB', path: 'process-water/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'process-water/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'process-water/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'process-water/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'process-water/load-more' },
    { name: 'reskin', path: 'process-water/reskin' },
  ])
  .setAliasAdUnits('wastewater', [
    { name: 'lb1', templateName: 'LB', path: 'wastewater/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'wastewater/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'wastewater/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'wastewater/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'wastewater/load-more' },
    { name: 'reskin', path: 'wastewater/reskin' },
  ])
  .setAliasAdUnits('water-reuse', [
    { name: 'lb1', templateName: 'LB', path: 'water-reuse/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'water-reuse/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'water-reuse/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'water-reuse/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'water-reuse/load-more' },
    { name: 'reskin', path: 'water-reuse/reskin' },
  ])
  .setAliasAdUnits('produced-water', [
    { name: 'lb1', templateName: 'LB', path: 'produced-water/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'produced-water/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'produced-water/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'produced-water/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'produced-water/load-more' },
    { name: 'reskin', path: 'produced-water/reskin' },
  ])
  .setAliasAdUnits('industry', [
    { name: 'lb1', templateName: 'LB', path: 'industry/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'industry/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'industry/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'industry/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'industry/load-more' },
    { name: 'reskin', path: 'industry/reskin' },
  ])
  .setAliasAdUnits('industry/food-beverage', [
    { name: 'lb1', templateName: 'LB', path: 'industry/food-beverage/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'industry/food-beverage/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'industry/food-beverage/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'industry/food-beverage/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'industry/food-beverage/load-more' },
    { name: 'reskin', path: 'industry/food-beverage/reskin' },
  ])
  .setAliasAdUnits('industry/chemical', [
    { name: 'lb1', templateName: 'LB', path: 'industry/chemical/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'industry/chemical/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'industry/chemical/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'industry/chemical/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'industry/chemical/load-more' },
    { name: 'reskin', path: 'industry/chemical/reskin' },
  ])
  .setAliasAdUnits('industy/power-generation', [
    { name: 'lb1', templateName: 'LB', path: 'industy/power-generation/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'industy/power-generation/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'industy/power-generation/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'industy/power-generation/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'industy/power-generation/load-more' },
    { name: 'reskin', path: 'industy/power-generation/reskin' },
  ])
  .setAliasAdUnits('industry/oil-gas', [
    { name: 'lb1', templateName: 'LB', path: 'industry/oil-gas/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'industry/oil-gas/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'industry/oil-gas/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'industry/oil-gas/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'industry/oil-gas/load-more' },
    { name: 'reskin', path: 'industry/oil-gas/reskin' },
  ])
  .setAliasAdUnits('directory', [
    { name: 'lb1', templateName: 'LB', path: 'directory/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'directory/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'directory/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'directory/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'directory/load-more' },
    { name: 'reskin', path: 'directory/reskin' },
  ]);

module.exports = config;
