const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'Aviation' });

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
  .setAliasAdUnits('aircraft', [
    { name: 'lb1', templateName: 'LB', path: 'aircraft/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'aircraft/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'aircraft/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'aircraft/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'aircraft/load-more' },
    { name: 'reskin', path: 'aircraft/reskin' },
  ])
  .setAliasAdUnits('engines-components', [
    { name: 'lb1', templateName: 'LB', path: 'engines-components/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'engines-components/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'engines-components/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'engines-components/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'engines-components/load-more' },
    { name: 'reskin', path: 'engines-components/reskin' },
  ])
  .setAliasAdUnits('tools-equipment', [
    { name: 'lb1', templateName: 'LB', path: 'tools-equipment/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'tools-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tools-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tools-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tools-equipment/load-more' },
    { name: 'reskin', path: 'tools-equipment/reskin' },
  ])
  .setAliasAdUnits('education-training', [
    { name: 'lb1', templateName: 'LB', path: 'education-training/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'education-training/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'education-training/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'education-training/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'education-training/load-more' },
    { name: 'reskin', path: 'education-training/reskin' },
  ])
  .setAliasAdUnits('airports', [
    { name: 'lb1', templateName: 'LB', path: 'airports/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'airports/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'airports/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'airports/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'airports/load-more' },
    { name: 'reskin', path: 'airports/reskin' },
  ])
  .setAliasAdUnits('aviation-security', [
    { name: 'lb1', templateName: 'LB', path: 'aviation-security/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'aviation-security/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'aviation-security/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'aviation-security/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'aviation-security/load-more' },
    { name: 'reskin', path: 'aviation-security/reskin' },
  ])
  .setAliasAdUnits('aoa', [
    { name: 'lb1', templateName: 'LB', path: 'aoa/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'aoa/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'aoa/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'aoa/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'aoa/load-more' },
    { name: 'reskin', path: 'aoa/reskin' },
  ])
  .setAliasAdUnits('fbos-tenants', [
    { name: 'lb1', templateName: 'LB', path: 'fbos-tenants/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'fbos-tenants/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'fbos-tenants/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'fbos-tenants/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'fbos-tenants/load-more' },
    { name: 'reskin', path: 'fbos-tenants/reskin' },
  ])
  .setAliasAdUnits('airlines', [
    { name: 'lb1', templateName: 'LB', path: 'airlines/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'airlines/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'airlines/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'airlines/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'airlines/load-more' },
    { name: 'reskin', path: 'airlines/reskin' },
  ])
  .setAliasAdUnits('ground-handling', [
    { name: 'lb1', templateName: 'LB', path: 'ground-handling/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'ground-handling/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'ground-handling/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'ground-handling/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'ground-handling/load-more' },
    { name: 'reskin', path: 'ground-handling/reskin' },
  ])
  .setAliasAdUnits('gse', [
    { name: 'lb1', templateName: 'LB', path: 'gse/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'gse/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'gse/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'gse/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'gse/load-more' },
    { name: 'reskin', path: 'gse/reskin' },
  ]);

module.exports = config;
