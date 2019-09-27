const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'OS' });

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
  .setAliasAdUnits('regional-reports', [
    { name: 'lb1', templateName: 'LB', path: 'regional-reports/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'regional-reports/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'regional-reports/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'regional-reports/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'regional-reports/load-more' },
    { name: 'reskin', path: 'regional-reports/reskin' },
  ])
  .setAliasAdUnits('drilling-completion', [
    { name: 'lb1', templateName: 'LB', path: 'drilling-completion/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'drilling-completion/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'drilling-completion/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'drilling-completion/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'drilling-completion/load-more' },
    { name: 'reskin', path: 'drilling-completion/reskin' },
  ])
  .setAliasAdUnits('field-development', [
    { name: 'lb1', templateName: 'LB', path: 'field-development/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'field-development/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'field-development/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'field-development/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'field-development/load-more' },
    { name: 'reskin', path: 'field-development/reskin' },
  ])
  .setAliasAdUnits('subsea', [
    { name: 'lb1', templateName: 'LB', path: 'subsea/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'subsea/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'subsea/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'subsea/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'subsea/load-more' },
    { name: 'reskin', path: 'subsea/reskin' },
  ])
  .setAliasAdUnits('geosciences', [
    { name: 'lb1', templateName: 'LB', path: 'geosciences/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'geosciences/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'geosciences/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'geosciences/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'geosciences/load-more' },
    { name: 'reskin', path: 'geosciences/reskin' },
  ])
  .setAliasAdUnits('pipelines', [
    { name: 'lb1', templateName: 'LB', path: 'pipelines/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'pipelines/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'pipelines/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'pipelines/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'pipelines/load-more' },
    { name: 'reskin', path: 'pipelines/reskin' },
  ])
  .setAliasAdUnits('production', [
    { name: 'lb1', templateName: 'LB', path: 'production/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'production/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'production/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'production/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'production/load-more' },
    { name: 'reskin', path: 'production/reskin' },
  ])
  .setAliasAdUnits('rigs-vessels', [
    { name: 'lb1', templateName: 'LB', path: 'rigs-vessels/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'rigs-vessels/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'rigs-vessels/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'rigs-vessels/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'rigs-vessels/load-more' },
    { name: 'reskin', path: 'rigs-vessels/reskin' },
  ])
  .setAliasAdUnits('deepwater', [
    { name: 'lb1', templateName: 'LB', path: 'deepwater/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'deepwater/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'deepwater/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'deepwater/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'deepwater/load-more' },
    { name: 'reskin', path: 'deepwater/reskin' },
  ])
  .setAliasAdUnits('business-briefs', [
    { name: 'lb1', templateName: 'LB', path: 'business-briefs/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'business-briefs/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'business-briefs/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'business-briefs/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'business-briefs/load-more' },
    { name: 'reskin', path: 'business-briefs/reskin' },
  ]);

module.exports = config;
