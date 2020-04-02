const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'HPN' });

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
  .setTemplate('MS', { size: [300, 50] })
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
  .setAliasAdUnits('sourcing-logistics', [
    { name: 'lb1', templateName: 'LB1', path: 'sourcing-logistics/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'sourcing-logistics/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'sourcing-logistics/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'sourcing-logistics/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'sourcing-logistics/load-more' },
    { name: 'reskin', path: 'sourcing-logistics/reskin' },
  ])
  .setAliasAdUnits('sterile-processing', [
    { name: 'lb1', templateName: 'LB1', path: 'sterile-processing/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'sterile-processing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'sterile-processing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'sterile-processing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'sterile-processing/load-more' },
    { name: 'reskin', path: 'sterile-processing/reskin' },
  ])
  .setAliasAdUnits('surgical-critical-care', [
    { name: 'lb1', templateName: 'LB1', path: 'surgical-critical-care/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'surgical-critical-care/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'surgical-critical-care/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'surgical-critical-care/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'surgical-critical-care/load-more' },
    { name: 'reskin', path: 'surgical-critical-care/reskin' },
  ])
  .setAliasAdUnits('patient-satisfaction', [
    { name: 'lb1', templateName: 'LB1', path: 'patient-satisfaction/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'patient-satisfaction/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'patient-satisfaction/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'patient-satisfaction/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'patient-satisfaction/load-more' },
    { name: 'reskin', path: 'patient-satisfaction/reskin' },
  ])
  .setAliasAdUnits('infection-prevention', [
    { name: 'lb1', templateName: 'LB1', path: 'infection-prevention/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'infection-prevention/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'infection-prevention/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'infection-prevention/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'infection-prevention/load-more' },
    { name: 'reskin', path: 'infection-prevention/reskin' },
  ])
  .setAliasAdUnits('evs-facility-services', [
    { name: 'lb1', templateName: 'LB1', path: 'evs-facility-services/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'evs-facility-services/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'evs-facility-services/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'evs-facility-services/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'evs-facility-services/load-more' },
    { name: 'reskin', path: 'evs-facility-services/reskin' },
  ])
  .setAliasAdUnits('healthcare-it', [
    { name: 'lb1', templateName: 'LB1', path: 'healthcare-it/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'healthcare-it/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'healthcare-it/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'healthcare-it/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'healthcare-it/load-more' },
    { name: 'reskin', path: 'healthcare-it/reskin' },
  ])
  .setAliasAdUnits('regulatory', [
    { name: 'lb1', templateName: 'LB1', path: 'regulatory/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'regulatory/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'regulatory/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'regulatory/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'regulatory/load-more' },
    { name: 'reskin', path: 'regulatory/reskin' },
  ]);

module.exports = config;
