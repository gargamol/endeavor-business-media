const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'STW' });

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
  .setAliasAdUnits('bmps', [
    { name: 'lb1', templateName: 'LB', path: 'bmps/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'bmps/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'bmps/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'bmps/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'bmps/load-more' },
    { name: 'reskin', path: 'bmps/reskin' },
    { name: 'wa', path: 'bmps/wa' },
  ])
  .setAliasAdUnits('green-infrastructure', [
    { name: 'lb1', templateName: 'LB', path: 'green-infrastructure/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'green-infrastructure/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'green-infrastructure/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'green-infrastructure/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'green-infrastructure/load-more' },
    { name: 'reskin', path: 'green-infrastructure/reskin' },
    { name: 'wa', path: 'green-infrastructure/wa' },
  ])
  .setAliasAdUnits('program-management', [
    { name: 'lb1', templateName: 'LB', path: 'program-management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'program-management/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'program-management/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'program-management/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'program-management/load-more' },
    { name: 'reskin', path: 'program-management/reskin' },
    { name: 'wa', path: 'program-management/wa' },
  ])
  .setAliasAdUnits('compliance', [
    { name: 'lb1', templateName: 'LB', path: 'compliance/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'compliance/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'compliance/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'compliance/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'compliance/load-more' },
    { name: 'reskin', path: 'compliance/reskin' },
    { name: 'wa', path: 'compliance/wa' },
  ])
  .setAliasAdUnits('erosion-control', [
    { name: 'lb1', templateName: 'LB', path: 'erosion-control/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'erosion-control/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'erosion-control/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'erosion-control/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'erosion-control/load-more' },
    { name: 'reskin', path: 'erosion-control/reskin' },
    { name: 'wa', path: 'erosion-control/wa' },
  ]);

module.exports = config;
