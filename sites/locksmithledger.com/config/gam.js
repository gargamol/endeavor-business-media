const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'LocksmithLedger' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
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
  .setAliasAdUnits('alarms-video', [
    { name: 'lb1', templateName: 'LB1', path: 'alarms-video/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'alarms-video/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'alarms-video/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'alarms-video/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'alarms-video/load-more' },
    { name: 'reskin', path: 'alarms-video/reskin' },
  ])
  .setAliasAdUnits('door-hardware', [
    { name: 'lb1', templateName: 'LB1', path: 'door-hardware/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'door-hardware/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'door-hardware/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'door-hardware/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'door-hardware/load-more' },
    { name: 'reskin', path: 'door-hardware/reskin' },
  ])
  .setAliasAdUnits('keys-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'keys-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'keys-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'keys-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'keys-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'keys-tools/load-more' },
    { name: 'reskin', path: 'keys-tools/reskin' },
  ])
  .setAliasAdUnits('locks', [
    { name: 'lb1', templateName: 'LB1', path: 'locks/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'locks/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'locks/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'locks/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'locks/load-more' },
    { name: 'reskin', path: 'locks/reskin' },
  ])
  .setAliasAdUnits('electronics-access-control', [
    { name: 'lb1', templateName: 'LB1', path: 'electronics-access-control/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'electronics-access-control/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'electronics-access-control/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'electronics-access-control/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'electronics-access-control/load-more' },
    { name: 'reskin', path: 'electronics-access-control/reskin' },
  ])
  .setAliasAdUnits('safes', [
    { name: 'lb1', templateName: 'LB1', path: 'safes/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'safes/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'safes/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'safes/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'safes/load-more' },
    { name: 'reskin', path: 'safes/reskin' },
  ])
  .setAliasAdUnits('distributors', [
    { name: 'lb1', templateName: 'LB1', path: 'distributors/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'distributors/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'distributors/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'distributors/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'distributors/load-more' },
    { name: 'reskin', path: 'distributors/reskin' },
  ]);

module.exports = config;
