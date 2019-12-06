const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'LW' });

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
  .setAliasAdUnits('network-design', [
    { name: 'lb1', templateName: 'LB', path: 'network-design/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'network-design/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'network-design/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'network-design/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'network-design/load-more' },
    { name: 'reskin', path: 'network-design/reskin' },
  ])
  .setAliasAdUnits('fttx', [
    { name: 'lb1', templateName: 'LB', path: 'fttx/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'fttx/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'fttx/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'fttx/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'fttx/load-more' },
    { name: 'reskin', path: 'fttx/reskin' },
  ])
  .setAliasAdUnits('sdn-nfv', [
    { name: 'lb1', templateName: 'LB', path: 'sdn-nfv/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'sdn-nfv/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'sdn-nfv/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'sdn-nfv/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'sdn-nfv/load-more' },
    { name: 'reskin', path: 'sdn-nfv/reskin' },
  ])
  .setAliasAdUnits('data-center', [
    { name: 'lb1', templateName: 'LB', path: 'data-center/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'data-center/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'data-center/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'data-center/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'data-center/load-more' },
    { name: 'reskin', path: 'data-center/reskin' },
  ])
  .setAliasAdUnits('test', [
    { name: 'lb1', templateName: 'LB', path: 'test/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'test/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test/load-more' },
    { name: 'reskin', path: 'test/reskin' },
  ])
  .setAliasAdUnits('test-measurement', [
    { name: 'lb1', templateName: 'LB', path: 'test-measurement/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'test-measurement/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'test-measurement/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'test-measurement/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'test-measurement/load-more' },
    { name: 'reskin', path: 'test-measurement/reskin' },
  ]);

module.exports = config;
