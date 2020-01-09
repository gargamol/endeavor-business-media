const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'IAS' });

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
  .setAliasAdUnits('commercial', [
    { name: 'lb1', templateName: 'LB1', path: 'commercial/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'commercial/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'commercial/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'commercial/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'commercial/load-more' },
    { name: 'reskin', path: 'commercial/reskin' },
  ])
  .setAliasAdUnits('military', [
    { name: 'lb1', templateName: 'LB1', path: 'military/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'military/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'military/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'military/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'military/load-more' },
    { name: 'reskin', path: 'military/reskin' },
  ])
  .setAliasAdUnits('avionics', [
    { name: 'lb1', templateName: 'LB1', path: 'avionics/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'avionics/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'avionics/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'avionics/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'avionics/load-more' },
    { name: 'reskin', path: 'avionics/reskin' },
  ])
  .setAliasAdUnits('atc-atm', [
    { name: 'lb1', templateName: 'LB1', path: 'atc-atm/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'atc-atm/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'atc-atm/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'atc-atm/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'atc-atm/load-more' },
    { name: 'reskin', path: 'atc-atm/reskin' },
  ])
  .setAliasAdUnits('helicopter', [
    { name: 'lb1', templateName: 'LB1', path: 'helicopter/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'helicopter/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'helicopter/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'helicopter/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'helicopter/load-more' },
    { name: 'reskin', path: 'helicopter/reskin' },
  ])
  .setAliasAdUnits('satcom', [
    { name: 'lb1', templateName: 'LB1', path: 'satcom/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'satcom/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'satcom/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'satcom/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'satcom/load-more' },
    { name: 'reskin', path: 'satcom/reskin' },
  ])
  .setAliasAdUnits('unmanned', [
    { name: 'lb1', templateName: 'LB1', path: 'unmanned/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'unmanned/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'unmanned/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'unmanned/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'unmanned/load-more' },
    { name: 'reskin', path: 'unmanned/reskin' },
  ]);

module.exports = config;
