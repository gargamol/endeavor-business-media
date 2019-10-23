const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'FRN' });

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
  .setAliasAdUnits('distributed-energy', [
    { name: 'lb1', templateName: 'LB', path: 'distributed-energy/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'distributed-energy/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'distributed-energy/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'distributed-energy/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'distributed-energy/load-more' },
    { name: 'reskin', path: 'distributed-energy/reskin' },
    { name: 'wa', path: 'distributed-energy/wa' },
  ])
  .setAliasAdUnits('erosion-control', [
    { name: 'lb1', templateName: 'LB', path: 'erosion-control/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'erosion-control/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'erosion-control/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'erosion-control/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'erosion-control/load-more' },
    { name: 'reskin', path: 'erosion-control/reskin' },
    { name: 'wa', path: 'erosion-control/wa' },
  ])
  .setAliasAdUnits('grading-excavation-contractor', [
    { name: 'lb1', templateName: 'LB', path: 'grading-excavation-contractor/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'grading-excavation-contractor/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'grading-excavation-contractor/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'grading-excavation-contractor/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'grading-excavation-contractor/load-more' },
    { name: 'reskin', path: 'grading-excavation-contractor/reskin' },
    { name: 'wa', path: 'grading-excavation-contractor/wa' },
  ])
  .setAliasAdUnits('msw-management', [
    { name: 'lb1', templateName: 'LB', path: 'msw-management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'msw-management/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'msw-management/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'msw-management/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'msw-management/load-more' },
    { name: 'reskin', path: 'msw-management/reskin' },
    { name: 'wa', path: 'msw-management/wa' },
  ])
  .setAliasAdUnits('stormwater', [
    { name: 'lb1', templateName: 'LB', path: 'stormwater/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'stormwater/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'stormwater/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'stormwater/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'stormwater/load-more' },
    { name: 'reskin', path: 'stormwater/reskin' },
    { name: 'wa', path: 'stormwater/wa' },
  ])
  .setAliasAdUnits('water-efficiency', [
    { name: 'lb1', templateName: 'LB', path: 'water-efficiency/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'water-efficiency/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'water-efficiency/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'water-efficiency/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'water-efficiency/load-more' },
    { name: 'reskin', path: 'water-efficiency/reskin' },
    { name: 'wa', path: 'water-efficiency/wa' },
  ]);

module.exports = config;
