const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'FCN' });

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
  .setAliasAdUnits('instrumentation', [
    { name: 'lb1', templateName: 'LB', path: 'instrumentation/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'instrumentation/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'instrumentation/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'instrumentation/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'instrumentation/load-more' },
    { name: 'reskin', path: 'instrumentation/reskin' },
    { name: 'wa', path: 'instrumentation/wa' },
  ])
  .setAliasAdUnits('valves-actuators', [
    { name: 'lb1', templateName: 'LB', path: 'valves-actuators/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'valves-actuators/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'valves-actuators/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'valves-actuators/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'valves-actuators/load-more' },
    { name: 'reskin', path: 'valves-actuators/reskin' },
    { name: 'wa', path: 'valves-actuators/wa' },
  ])
  .setAliasAdUnits('bearings-seals', [
    { name: 'lb1', templateName: 'LB', path: 'bearings-seals/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'bearings-seals/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'bearings-seals/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'bearings-seals/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'bearings-seals/load-more' },
    { name: 'reskin', path: 'bearings-seals/reskin' },
    { name: 'wa', path: 'bearings-seals/wa' },
  ])
  .setAliasAdUnits('piping-tubing-hosing', [
    { name: 'lb1', templateName: 'LB', path: 'piping-tubing-hosing/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'piping-tubing-hosing/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'piping-tubing-hosing/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'piping-tubing-hosing/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'piping-tubing-hosing/load-more' },
    { name: 'reskin', path: 'piping-tubing-hosing/reskin' },
    { name: 'wa', path: 'piping-tubing-hosing/wa' },
  ])
  .setAliasAdUnits('process-control-automation', [
    { name: 'lb1', templateName: 'LB', path: 'process-control-automation/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'process-control-automation/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'process-control-automation/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'process-control-automation/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'process-control-automation/load-more' },
    { name: 'reskin', path: 'process-control-automation/reskin' },
    { name: 'wa', path: 'process-control-automation/wa' },
  ])
  .setAliasAdUnits('pumps-motors-drives', [
    { name: 'lb1', templateName: 'LB', path: 'pumps-motors-drives/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'pumps-motors-drives/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'pumps-motors-drives/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'pumps-motors-drives/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'pumps-motors-drives/load-more' },
    { name: 'reskin', path: 'pumps-motors-drives/reskin' },
    { name: 'wa', path: 'pumps-motors-drives/wa' },
  ])
  .setAliasAdUnits('pumps-motors-drives', [
    { name: 'lb1', templateName: 'LB', path: 'pumps-motors-drives/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'pumps-motors-drives/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'pumps-motors-drives/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'pumps-motors-drives/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'pumps-motors-drives/load-more' },
    { name: 'reskin', path: 'pumps-motors-drives/reskin' },
    { name: 'wa', path: 'pumps-motors-drives/wa' },
  ])
  .setAliasAdUnits('industry-applications', [
    { name: 'lb1', templateName: 'LB', path: 'industry-applications/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'industry-applications/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'industry-applications/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'industry-applications/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'industry-applications/load-more' },
    { name: 'reskin', path: 'industry-applications/reskin' },
    { name: 'wa', path: 'industry-applications/wa' },
  ]);

module.exports = config;
