const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'GSX' });

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
  .setAliasAdUnits('attachments', [
    { name: 'lb1', templateName: 'LB', path: 'attachments/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'attachments/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'attachments/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'attachments/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'attachments/load-more' },
    { name: 'reskin', path: 'attachments/reskin' },
    { name: 'wa', path: 'attachments/wa' },
  ])
  .setAliasAdUnits('equipment', [
    { name: 'lb1', templateName: 'LB', path: 'equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'equipment/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'equipment/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'equipment/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'equipment/load-more' },
    { name: 'reskin', path: 'equipment/reskin' },
    { name: 'wa', path: 'equipment/wa' },
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
  .setAliasAdUnits('technology', [
    { name: 'lb1', templateName: 'LB', path: 'technology/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'technology/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'technology/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'technology/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'technology/load-more' },
    { name: 'reskin', path: 'technology/reskin' },
    { name: 'wa', path: 'technology/wa' },
  ])
  .setAliasAdUnits('training-safety', [
    { name: 'lb1', templateName: 'LB', path: 'training-safety/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'training-safety/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'training-safety/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'training-safety/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'training-safety/load-more' },
    { name: 'reskin', path: 'training-safety/reskin' },
    { name: 'wa', path: 'training-safety/wa' },
  ])
  .setAliasAdUnits('trenching-shoring', [
    { name: 'lb1', templateName: 'LB', path: 'trenching-shoring/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'trenching-shoring/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'trenching-shoring/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'trenching-shoring/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'trenching-shoring/load-more' },
    { name: 'reskin', path: 'trenching-shoring/reskin' },
    { name: 'wa', path: 'trenching-shoring/wa' },
  ])
  .setAliasAdUnits('site-clearing', [
    { name: 'lb1', templateName: 'LB', path: 'site-clearing/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'site-clearing/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'site-clearing/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'site-clearing/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'site-clearing/load-more' },
    { name: 'reskin', path: 'site-clearing/reskin' },
    { name: 'wa', path: 'site-clearing/wa' },
  ])
  .setAliasAdUnits('work-site-support-equipment', [
    { name: 'lb1', templateName: 'LB', path: 'work-site-support-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'work-site-support-equipment/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'work-site-support-equipment/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'work-site-support-equipment/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'work-site-support-equipment/load-more' },
    { name: 'reskin', path: 'work-site-support-equipment/reskin' },
    { name: 'wa', path: 'work-site-support-equipment/wa' },
  ])
  .setAliasAdUnits('road-building-and-compaction', [
    { name: 'lb1', templateName: 'LB', path: 'road-building-and-compaction/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'road-building-and-compaction/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'road-building-and-compaction/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'road-building-and-compaction/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'road-building-and-compaction/load-more' },
    { name: 'reskin', path: 'road-building-and-compaction/reskin' },
    { name: 'wa', path: 'road-building-and-compaction/wa' },
  ])
  .setAliasAdUnits('dump-trucks', [
    { name: 'lb1', templateName: 'LB', path: 'dump-trucks/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'dump-trucks/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'dump-trucks/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'dump-trucks/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'dump-trucks/load-more' },
    { name: 'reskin', path: 'dump-trucks/reskin' },
    { name: 'wa', path: 'dump-trucks/wa' },
  ])
  .setAliasAdUnits('trailers', [
    { name: 'lb1', templateName: 'LB', path: 'trailers/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'trailers/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'trailers/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'trailers/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'trailers/load-more' },
    { name: 'reskin', path: 'trailers/reskin' },
    { name: 'wa', path: 'trailers/wa' },
  ]);

module.exports = config;
