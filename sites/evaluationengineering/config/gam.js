const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'EE' });

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
  .setAliasAdUnits('applications', [
    { name: 'lb1', templateName: 'LB', path: 'applications/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'applications/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'applications/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'applications/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'applications/load-more' },
    { name: 'reskin', path: 'applications/reskin' },
  ])
  .setAliasAdUnits('industries', [
    { name: 'lb1', templateName: 'LB', path: 'industries/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'industries/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'industries/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'industries/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'industries/load-more' },
    { name: 'reskin', path: 'industries/reskin' },
  ])
  .setAliasAdUnits('instrumentation', [
    { name: 'lb1', templateName: 'LB', path: 'instrumentation/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'instrumentation/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'instrumentation/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'instrumentation/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'instrumentation/load-more' },
    { name: 'reskin', path: 'instrumentation/reskin' },
  ])
  .setAliasAdUnits('test-issues-techniques', [
    { name: 'lb1', templateName: 'LB', path: 'test-issues-techniques/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'test-issues-techniques/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'test-issues-techniques/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'test-issues-techniques/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'test-issues-techniques/load-more' },
    { name: 'reskin', path: 'test-issues-techniques/reskin' },
  ]);

module.exports = config;
