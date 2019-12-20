const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'VSP' });

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
  .setAliasAdUnits('in-the-bay', [
    { name: 'lb1', templateName: 'LB', path: 'in-the-bay/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'in-the-bay/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/load-more' },
    { name: 'reskin', path: 'in-the-bay/reskin' },
  ])
  .setAliasAdUnits('shop-operations', [
    { name: 'lb1', templateName: 'LB', path: 'shop-operations/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'shop-operations/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'shop-operations/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'shop-operations/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'shop-operations/load-more' },
    { name: 'reskin', path: 'shop-operations/reskin' },
  ])
  .setAliasAdUnits('vehicles', [
    { name: 'lb1', templateName: 'LB', path: 'vehicles/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'vehicles/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vehicles/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'vehicles/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'vehicles/load-more' },
    { name: 'reskin', path: 'vehicles/reskin' },
  ])
  .setAliasAdUnits('distributors', [
    { name: 'lb1', templateName: 'LB', path: 'distributors/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'distributors/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'distributors/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'distributors/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'distributors/load-more' },
    { name: 'reskin', path: 'distributors/reskin' },
  ])
  .setAliasAdUnits('industry-news', [
    { name: 'lb1', templateName: 'LB', path: 'industry-news/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'industry-news/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'industry-news/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'industry-news/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'industry-news/load-more' },
    { name: 'reskin', path: 'industry-news/reskin' },
  ]);

module.exports = config;
