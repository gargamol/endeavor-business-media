const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'MAE' });

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
  .setAliasAdUnits('computers', [
    { name: 'lb1', templateName: 'LB1', path: 'computers/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'computers/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'computers/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'computers/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'computers/load-more' },
    { name: 'reskin', path: 'computers/reskin' },
  ])
  .setAliasAdUnits('cyber', [
    { name: 'lb1', templateName: 'LB1', path: 'cyber/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'cyber/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'cyber/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'cyber/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'cyber/load-more' },
    { name: 'reskin', path: 'cyber/reskin' },
  ])
  .setAliasAdUnits('unmanned', [
    { name: 'lb1', templateName: 'LB1', path: 'unmanned/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'unmanned/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'unmanned/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'unmanned/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'unmanned/load-more' },
    { name: 'reskin', path: 'unmanned/reskin' },
  ])
  .setAliasAdUnits('sensors', [
    { name: 'lb1', templateName: 'LB1', path: 'sensors/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'sensors/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'sensors/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'sensors/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'sensors/load-more' },
    { name: 'reskin', path: 'sensors/reskin' },
  ])
  .setAliasAdUnits('rf-analog', [
    { name: 'lb1', templateName: 'LB1', path: 'rf-analog/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'rf-analog/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rf-analog/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'rf-analog/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'rf-analog/load-more' },
    { name: 'reskin', path: 'rf-analog/reskin' },
  ])
  .setAliasAdUnits('power', [
    { name: 'lb1', templateName: 'LB1', path: 'power/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'power/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'power/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'power/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'power/load-more' },
    { name: 'reskin', path: 'power/reskin' },
  ])
  .setAliasAdUnits('communications', [
    { name: 'lb1', templateName: 'LB1', path: 'communications/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'communications/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'communications/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'communications/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'communications/load-more' },
    { name: 'reskin', path: 'communications/reskin' },
  ])
  .setAliasAdUnits('test', [
    { name: 'lb1', templateName: 'LB1', path: 'test/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'test/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test/load-more' },
    { name: 'reskin', path: 'test/reskin' },
  ])
  .setAliasAdUnits('defense-executive', [
    { name: 'lb1', templateName: 'LB1', path: 'defense-executive/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'defense-executive/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'defense-executive/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'defense-executive/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'defense-executive/load-more' },
    { name: 'reskin', path: 'defense-executive/reskin' },
  ]);

module.exports = config;
