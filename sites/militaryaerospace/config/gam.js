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
  .setAliasAdUnits('computers', [
    { name: 'lb1', templateName: 'LB', path: 'computers/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'computers/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'computers/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'computers/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'computers/load-more' },
    { name: 'reskin', path: 'computers/reskin' },
  ])
  .setAliasAdUnits('cyber', [
    { name: 'lb1', templateName: 'LB', path: 'cyber/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'cyber/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'cyber/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'cyber/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'cyber/load-more' },
    { name: 'reskin', path: 'cyber/reskin' },
  ])
  .setAliasAdUnits('unmanned', [
    { name: 'lb1', templateName: 'LB', path: 'unmanned/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'unmanned/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'unmanned/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'unmanned/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'unmanned/load-more' },
    { name: 'reskin', path: 'unmanned/reskin' },
  ])
  .setAliasAdUnits('sensors', [
    { name: 'lb1', templateName: 'LB', path: 'sensors/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'sensors/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'sensors/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'sensors/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'sensors/load-more' },
    { name: 'reskin', path: 'sensors/reskin' },
  ])
  .setAliasAdUnits('rf-analog', [
    { name: 'lb1', templateName: 'LB', path: 'rf-analog/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'rf-analog/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'rf-analog/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'rf-analog/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'rf-analog/load-more' },
    { name: 'reskin', path: 'rf-analog/reskin' },
  ])
  .setAliasAdUnits('power', [
    { name: 'lb1', templateName: 'LB', path: 'power/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'power/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'power/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'power/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'power/load-more' },
    { name: 'reskin', path: 'power/reskin' },
  ])
  .setAliasAdUnits('communications', [
    { name: 'lb1', templateName: 'LB', path: 'communications/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'communications/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'communications/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'communications/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'communications/load-more' },
    { name: 'reskin', path: 'communications/reskin' },
  ])
  .setAliasAdUnits('test', [
    { name: 'lb1', templateName: 'LB', path: 'test/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'test/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'test/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'test/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'test/load-more' },
    { name: 'reskin', path: 'test/reskin' },
  ])
  .setAliasAdUnits('defense-executive', [
    { name: 'lb1', templateName: 'LB', path: 'defense-executive/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'defense-executive/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'defense-executive/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'defense-executive/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'defense-executive/load-more' },
    { name: 'reskin', path: 'defense-executive/reskin' },
  ]);

module.exports = config;
