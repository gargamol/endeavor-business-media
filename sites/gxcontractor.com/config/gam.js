const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'GXC' });

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
  .setTemplate('LB2', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
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
  .setAliasAdUnits('attachments', [
    { name: 'lb1', templateName: 'LB1', path: 'attachments/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'attachments/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'attachments/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'attachments/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'attachments/load-more' },
    { name: 'reskin', path: 'attachments/reskin' },
    { name: 'wa', path: 'attachments/wa' },
  ])
  .setAliasAdUnits('equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'equipment/load-more' },
    { name: 'reskin', path: 'equipment/reskin' },
    { name: 'wa', path: 'equipment/wa' },
  ])
  .setAliasAdUnits('maintenance', [
    { name: 'lb1', templateName: 'LB1', path: 'maintenance/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'maintenance/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'maintenance/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'maintenance/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'maintenance/load-more' },
    { name: 'reskin', path: 'maintenance/reskin' },
    { name: 'wa', path: 'maintenance/wa' },
  ])
  .setAliasAdUnits('technology', [
    { name: 'lb1', templateName: 'LB1', path: 'technology/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'technology/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'technology/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'technology/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'technology/load-more' },
    { name: 'reskin', path: 'technology/reskin' },
    { name: 'wa', path: 'technology/wa' },
  ])
  .setAliasAdUnits('training-safety', [
    { name: 'lb1', templateName: 'LB1', path: 'training-safety/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'training-safety/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'training-safety/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'training-safety/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'training-safety/load-more' },
    { name: 'reskin', path: 'training-safety/reskin' },
    { name: 'wa', path: 'training-safety/wa' },
  ])
  .setAliasAdUnits('trenching-shoring', [
    { name: 'lb1', templateName: 'LB1', path: 'trenching-shoring/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'trenching-shoring/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'trenching-shoring/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'trenching-shoring/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'trenching-shoring/load-more' },
    { name: 'reskin', path: 'trenching-shoring/reskin' },
    { name: 'wa', path: 'trenching-shoring/wa' },
  ])
  .setAliasAdUnits('site-clearing', [
    { name: 'lb1', templateName: 'LB1', path: 'site-clearing/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'site-clearing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'site-clearing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'site-clearing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'site-clearing/load-more' },
    { name: 'reskin', path: 'site-clearing/reskin' },
    { name: 'wa', path: 'site-clearing/wa' },
  ])
  .setAliasAdUnits('work-site-support-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'work-site-support-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'work-site-support-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'work-site-support-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'work-site-support-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'work-site-support-equipment/load-more' },
    { name: 'reskin', path: 'work-site-support-equipment/reskin' },
    { name: 'wa', path: 'work-site-support-equipment/wa' },
  ])
  .setAliasAdUnits('road-building-and-compaction', [
    { name: 'lb1', templateName: 'LB1', path: 'road-building-and-compaction/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'road-building-and-compaction/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'road-building-and-compaction/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'road-building-and-compaction/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'road-building-and-compaction/load-more' },
    { name: 'reskin', path: 'road-building-and-compaction/reskin' },
    { name: 'wa', path: 'road-building-and-compaction/wa' },
  ])
  .setAliasAdUnits('dump-trucks', [
    { name: 'lb1', templateName: 'LB1', path: 'dump-trucks/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'dump-trucks/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'dump-trucks/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'dump-trucks/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'dump-trucks/load-more' },
    { name: 'reskin', path: 'dump-trucks/reskin' },
    { name: 'wa', path: 'dump-trucks/wa' },
  ])
  .setAliasAdUnits('trailers', [
    { name: 'lb1', templateName: 'LB1', path: 'trailers/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'trailers/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'trailers/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'trailers/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'trailers/load-more' },
    { name: 'reskin', path: 'trailers/reskin' },
    { name: 'wa', path: 'trailers/wa' },
  ]);

module.exports = config;
