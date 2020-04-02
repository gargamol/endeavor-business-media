const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'OS' });

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
  .setAliasAdUnits('covid-19', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19/load-more' },
    { name: 'reskin', path: 'covid-19/reskin' },
  ])
  .setAliasAdUnits('regional-reports', [
    { name: 'lb1', templateName: 'LB1', path: 'regional-reports/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'regional-reports/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'regional-reports/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'regional-reports/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'regional-reports/load-more' },
    { name: 'reskin', path: 'regional-reports/reskin' },
  ])
  .setAliasAdUnits('drilling-completion', [
    { name: 'lb1', templateName: 'LB1', path: 'drilling-completion/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'drilling-completion/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'drilling-completion/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'drilling-completion/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'drilling-completion/load-more' },
    { name: 'reskin', path: 'drilling-completion/reskin' },
  ])
  .setAliasAdUnits('field-development', [
    { name: 'lb1', templateName: 'LB1', path: 'field-development/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'field-development/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'field-development/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'field-development/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'field-development/load-more' },
    { name: 'reskin', path: 'field-development/reskin' },
  ])
  .setAliasAdUnits('subsea', [
    { name: 'lb1', templateName: 'LB1', path: 'subsea/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'subsea/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'subsea/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'subsea/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'subsea/load-more' },
    { name: 'reskin', path: 'subsea/reskin' },
  ])
  .setAliasAdUnits('geosciences', [
    { name: 'lb1', templateName: 'LB1', path: 'geosciences/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'geosciences/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'geosciences/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'geosciences/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'geosciences/load-more' },
    { name: 'reskin', path: 'geosciences/reskin' },
  ])
  .setAliasAdUnits('pipelines', [
    { name: 'lb1', templateName: 'LB1', path: 'pipelines/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'pipelines/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'pipelines/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'pipelines/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'pipelines/load-more' },
    { name: 'reskin', path: 'pipelines/reskin' },
  ])
  .setAliasAdUnits('production', [
    { name: 'lb1', templateName: 'LB1', path: 'production/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'production/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'production/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'production/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'production/load-more' },
    { name: 'reskin', path: 'production/reskin' },
  ])
  .setAliasAdUnits('rigs-vessels', [
    { name: 'lb1', templateName: 'LB1', path: 'rigs-vessels/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'rigs-vessels/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rigs-vessels/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'rigs-vessels/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'rigs-vessels/load-more' },
    { name: 'reskin', path: 'rigs-vessels/reskin' },
  ])
  .setAliasAdUnits('deepwater', [
    { name: 'lb1', templateName: 'LB1', path: 'deepwater/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'deepwater/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'deepwater/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'deepwater/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'deepwater/load-more' },
    { name: 'reskin', path: 'deepwater/reskin' },
  ])
  .setAliasAdUnits('business-briefs', [
    { name: 'lb1', templateName: 'LB1', path: 'business-briefs/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'business-briefs/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'business-briefs/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'business-briefs/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'business-briefs/load-more' },
    { name: 'reskin', path: 'business-briefs/reskin' },
  ]);

module.exports = config;
