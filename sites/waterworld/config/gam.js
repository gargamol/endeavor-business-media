const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'WW' });

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
  .setAliasAdUnits('technologies', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/load-more' },
    { name: 'reskin', path: 'municipal/technologies/reskin' },
  ])
  .setAliasAdUnits('technologies/aeration', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/aeration/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/aeration/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/aeration/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/aeration/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/aeration/load-more' },
    { name: 'reskin', path: 'municipal/technologies/aeration/reskin' },
  ])
  .setAliasAdUnits('technologies/amr-ami', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/amr-ami/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/amr-ami/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/amr-ami/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/amr-ami/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/amr-ami/load-more' },
    { name: 'reskin', path: 'municipal/technologies/amr-ami/reskin' },
  ])
  .setAliasAdUnits('technologies/disinfection', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/disinfection/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/disinfection/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/disinfection/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/disinfection/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/disinfection/load-more' },
    { name: 'reskin', path: 'municipal/technologies/disinfection/reskin' },
  ])
  .setAliasAdUnits('technologies/filtration', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/filtration/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/filtration/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/filtration/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/filtration/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/filtration/load-more' },
    { name: 'reskin', path: 'municipal/technologies/filtration/reskin' },
  ])
  .setAliasAdUnits('technologies/flow-level-pressure-measurement', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/flow-level-pressure-measurement/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/flow-level-pressure-measurement/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/flow-level-pressure-measurement/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/flow-level-pressure-measurement/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/flow-level-pressure-measurement/load-more' },
    { name: 'reskin', path: 'municipal/technologies/flow-level-pressure-measurement/reskin' },
  ])
  .setAliasAdUnits('technologies/lab-sampling-analytical', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/lab-sampling-analytical/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/lab-sampling-analytical/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/lab-sampling-analytical/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/lab-sampling-analytical/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/lab-sampling-analytical/load-more' },
    { name: 'reskin', path: 'municipal/technologies/lab-sampling-analytical/reskin' },
  ])
  .setAliasAdUnits('technologies/pipes', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/pipes/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/pipes/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/pipes/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/pipes/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/pipes/load-more' },
    { name: 'reskin', path: 'municipal/technologies/pipes/reskin' },
  ])
  .setAliasAdUnits('technologies/pumps', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/pumps/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/pumps/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/pumps/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/pumps/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/pumps/load-more' },
    { name: 'reskin', path: 'municipal/technologies/pumps/reskin' },
  ])
  .setAliasAdUnits('technologies/valves', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/technologies/valves/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/technologies/valves/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/technologies/valves/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/technologies/valves/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/technologies/valves/load-more' },
    { name: 'reskin', path: 'municipal/technologies/valves/reskin' },
  ])
  .setAliasAdUnits('drinking-water', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/drinking-water/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/drinking-water/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/drinking-water/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/drinking-water/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/drinking-water/load-more' },
    { name: 'reskin', path: 'municipal/drinking-water/reskin' },
  ])
  .setAliasAdUnits('environmental', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/environmental/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/environmental/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/environmental/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/environmental/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/environmental/load-more' },
    { name: 'reskin', path: 'municipal/environmental/reskin' },
  ])
  .setAliasAdUnits('wastewater', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/wastewater/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/wastewater/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/wastewater/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/wastewater/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/wastewater/load-more' },
    { name: 'reskin', path: 'municipal/wastewater/reskin' },
  ])
  .setAliasAdUnits('water-utility-management', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/water-utility-management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/water-utility-management/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/water-utility-management/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/water-utility-management/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/water-utility-management/load-more' },
    { name: 'reskin', path: 'municipal/water-utility-management/reskin' },
  ])
  .setAliasAdUnits('urban-stormwater', [
    { name: 'lb1', templateName: 'LB', path: 'municipal/urban-stormwater/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'municipal/urban-stormwater/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'municipal/urban-stormwater/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'municipal/urban-stormwater/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'municipal/urban-stormwater/load-more' },
    { name: 'reskin', path: 'municipal/urban-stormwater/reskin' },
  ])
  .setAliasAdUnits('international', [
    { name: 'lb1', templateName: 'LB', path: 'international/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'international/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'international/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'international/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'international/load-more' },
    { name: 'reskin', path: 'international/reskin' },
  ])
  .setAliasAdUnits('international/wastewater', [
    { name: 'lb1', templateName: 'LB', path: 'international/wastewater/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'international/wastewater/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'international/wastewater/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'international/wastewater/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'international/wastewater/load-more' },
    { name: 'reskin', path: 'international/wastewater/reskin' },
  ]);

module.exports = config;
