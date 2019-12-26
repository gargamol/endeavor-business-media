const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'VendingMarketWatch' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('MS', { size: [300, 50] })
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
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('beverage', [
    { name: 'lb1', templateName: 'LB', path: 'beverage/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'beverage/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'beverage/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'beverage/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'beverage/load-more' },
    { name: 'reskin', path: 'beverage/reskin' },
    { name: 'wa', path: 'beverage/wa' },
  ])
  .setAliasAdUnits('coffee-service', [
    { name: 'lb1', templateName: 'LB', path: 'coffee-service/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'coffee-service/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'coffee-service/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'coffee-service/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'coffee-service/load-more' },
    { name: 'reskin', path: 'coffee-service/reskin' },
    { name: 'wa', path: 'coffee-service/wa' },
  ])
  .setAliasAdUnits('technology', [
    { name: 'lb1', templateName: 'LB', path: 'technology/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'technology/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'technology/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'technology/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'technology/load-more' },
    { name: 'reskin', path: 'technology/reskin' },
    { name: 'wa', path: 'technology/wa' },
  ])
  .setAliasAdUnits('equipment', [
    { name: 'lb1', templateName: 'LB', path: 'equipment/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'equipment/load-more' },
    { name: 'reskin', path: 'equipment/reskin' },
    { name: 'wa', path: 'equipment/wa' },
  ])
  .setAliasAdUnits('healthy-convenience', [
    { name: 'lb1', templateName: 'LB', path: 'healthy-convenience/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'healthy-convenience/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'healthy-convenience/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'healthy-convenience/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'healthy-convenience/load-more' },
    { name: 'reskin', path: 'healthy-convenience/reskin' },
    { name: 'wa', path: 'healthy-convenience/wa' },
  ])
  .setAliasAdUnits('management', [
    { name: 'lb1', templateName: 'LB', path: 'management/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'management/load-more' },
    { name: 'reskin', path: 'management/reskin' },
    { name: 'wa', path: 'management/wa' },
  ])
  .setAliasAdUnits('micro-market', [
    { name: 'lb1', templateName: 'LB', path: 'micro-market/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'micro-market/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'micro-market/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'micro-market/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'micro-market/load-more' },
    { name: 'reskin', path: 'micro-market/reskin' },
    { name: 'wa', path: 'micro-market/wa' },
  ])
  .setAliasAdUnits('products', [
    { name: 'lb1', templateName: 'LB', path: 'products/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'products/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'products/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'products/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'products/load-more' },
    { name: 'reskin', path: 'products/reskin' },
    { name: 'wa', path: 'products/wa' },
  ]);

module.exports = config;
