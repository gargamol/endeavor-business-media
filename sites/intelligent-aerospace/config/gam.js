const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'IAS' });

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
  .setAliasAdUnits('commercial', [
    { name: 'lb1', templateName: 'LB', path: 'commercial/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'commercial/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'commercial/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'commercial/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'commercial/load-more' },
    { name: 'reskin', path: 'commercial/reskin' },
  ])
  .setAliasAdUnits('military', [
    { name: 'lb1', templateName: 'LB', path: 'military/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'military/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'military/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'military/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'military/load-more' },
    { name: 'reskin', path: 'military/reskin' },
  ])
  .setAliasAdUnits('avionics', [
    { name: 'lb1', templateName: 'LB', path: 'avionics/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'avionics/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'avionics/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'avionics/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'avionics/load-more' },
    { name: 'reskin', path: 'avionics/reskin' },
  ])
  .setAliasAdUnits('atc-atm', [
    { name: 'lb1', templateName: 'LB', path: 'atc-atm/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'atc-atm/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'atc-atm/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'atc-atm/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'atc-atm/load-more' },
    { name: 'reskin', path: 'atc-atm/reskin' },
  ])
  .setAliasAdUnits('helicopter', [
    { name: 'lb1', templateName: 'LB', path: 'helicopter/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'helicopter/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'helicopter/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'helicopter/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'helicopter/load-more' },
    { name: 'reskin', path: 'helicopter/reskin' },
  ])
  .setAliasAdUnits('satcom', [
    { name: 'lb1', templateName: 'LB', path: 'satcom/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'satcom/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'satcom/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'satcom/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'satcom/load-more' },
    { name: 'reskin', path: 'satcom/reskin' },
  ])
  .setAliasAdUnits('unmanned', [
    { name: 'lb1', templateName: 'LB', path: 'unmanned/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'unmanned/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'unmanned/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'unmanned/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'unmanned/load-more' },
    { name: 'reskin', path: 'unmanned/reskin' },
  ]);

module.exports = config;
