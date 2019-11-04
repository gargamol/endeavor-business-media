const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'MAE' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
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
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('computers', [
    { name: 'lb1', templateName: 'LB', path: 'computers/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'computers/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'computers/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'computers/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'computers/load-more' },
    { name: 'reskin', path: 'computers/reskin' },
  ])
  .setAliasAdUnits('cyber', [
    { name: 'lb1', templateName: 'LB', path: 'cyber/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'cyber/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'cyber/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'cyber/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'cyber/load-more' },
    { name: 'reskin', path: 'cyber/reskin' },
  ])
  .setAliasAdUnits('unmanned', [
    { name: 'lb1', templateName: 'LB', path: 'unmanned/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'unmanned/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'unmanned/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'unmanned/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'unmanned/load-more' },
    { name: 'reskin', path: 'unmanned/reskin' },
  ])
  .setAliasAdUnits('sensors', [
    { name: 'lb1', templateName: 'LB', path: 'sensors/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'sensors/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'sensors/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'sensors/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'sensors/load-more' },
    { name: 'reskin', path: 'sensors/reskin' },
  ])
  .setAliasAdUnits('rf-analog', [
    { name: 'lb1', templateName: 'LB', path: 'rf-analog/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'rf-analog/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rf-analog/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'rf-analog/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'rf-analog/load-more' },
    { name: 'reskin', path: 'rf-analog/reskin' },
  ])
  .setAliasAdUnits('power', [
    { name: 'lb1', templateName: 'LB', path: 'power/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'power/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'power/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'power/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'power/load-more' },
    { name: 'reskin', path: 'power/reskin' },
  ])
  .setAliasAdUnits('communications', [
    { name: 'lb1', templateName: 'LB', path: 'communications/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'communications/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'communications/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'communications/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'communications/load-more' },
    { name: 'reskin', path: 'communications/reskin' },
  ])
  .setAliasAdUnits('test', [
    { name: 'lb1', templateName: 'LB', path: 'test/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'test/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test/load-more' },
    { name: 'reskin', path: 'test/reskin' },
  ])
  .setAliasAdUnits('defense-executive', [
    { name: 'lb1', templateName: 'LB', path: 'defense-executive/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'defense-executive/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'defense-executive/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'defense-executive/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'defense-executive/load-more' },
    { name: 'reskin', path: 'defense-executive/reskin' },
  ]);

module.exports = config;
