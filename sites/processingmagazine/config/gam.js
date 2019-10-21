const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'PCM' });

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
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'default/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'default/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('maintenance-safety', [
    { name: 'lb1', templateName: 'LB1', path: 'maintenance-safety/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'maintenance-safety/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'maintenance-safety/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'maintenance-safety/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'maintenance-safety/load-more' },
    { name: 'reskin', path: 'maintenance-safety/reskin' },
    { name: 'wa', path: 'maintenance-safety/wa' },
  ])
  .setAliasAdUnits('material-handling-dry-wet', [
    { name: 'lb1', templateName: 'LB1', path: 'material-handling-dry-wet/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'material-handling-dry-wet/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'material-handling-dry-wet/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'material-handling-dry-wet/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'material-handling-dry-wet/load-more' },
    { name: 'reskin', path: 'material-handling-dry-wet/reskin' },
    { name: 'wa', path: 'material-handling-dry-wet/wa' },
  ])
  .setAliasAdUnits('mixing-blending-size-reduction', [
    { name: 'lb1', templateName: 'LB1', path: 'mixing-blending-size-reduction/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'mixing-blending-size-reduction/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'mixing-blending-size-reduction/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'mixing-blending-size-reduction/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'mixing-blending-size-reduction/load-more' },
    { name: 'reskin', path: 'mixing-blending-size-reduction/reskin' },
    { name: 'wa', path: 'mixing-blending-size-reduction/wa' },
  ])
  .setAliasAdUnits('process-control-automation', [
    { name: 'lb1', templateName: 'LB1', path: 'process-control-automation/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'process-control-automation/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'process-control-automation/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'process-control-automation/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'process-control-automation/load-more' },
    { name: 'reskin', path: 'process-control-automation/reskin' },
    { name: 'wa', path: 'process-control-automation/wa' },
  ])
  .setAliasAdUnits('pumps-motors-drives', [
    { name: 'lb1', templateName: 'LB1', path: 'pumps-motors-drives/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'pumps-motors-drives/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'pumps-motors-drives/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'pumps-motors-drives/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'pumps-motors-drives/load-more' },
    { name: 'reskin', path: 'pumps-motors-drives/reskin' },
    { name: 'wa', path: 'pumps-motors-drives/wa' },
  ])
  .setAliasAdUnits('valves-actuators', [
    { name: 'lb1', templateName: 'LB1', path: 'valves-actuators/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'valves-actuators/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'valves-actuators/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'valves-actuators/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'valves-actuators/load-more' },
    { name: 'reskin', path: 'valves-actuators/reskin' },
    { name: 'wa', path: 'valves-actuators/wa' },
  ]);

module.exports = config;
