const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'CIM' });

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
  .setAliasAdUnits('data-center', [
    { name: 'lb1', templateName: 'LB', path: 'data-center/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'data-center/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'data-center/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'data-center/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'data-center/load-more' },
    { name: 'reskin', path: 'data-center/reskin' },
  ])
  .setAliasAdUnits('standards', [
    { name: 'lb1', templateName: 'LB', path: 'standards/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'standards/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'standards/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'standards/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'standards/load-more' },
    { name: 'reskin', path: 'standards/reskin' },
  ])
  .setAliasAdUnits('cable', [
    { name: 'lb1', templateName: 'LB', path: 'cable/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'cable/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'cable/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'cable/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'cable/load-more' },
    { name: 'reskin', path: 'cable/reskin' },
  ])
  .setAliasAdUnits('connectivity', [
    { name: 'lb1', templateName: 'LB', path: 'connectivity/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'connectivity/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'connectivity/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'connectivity/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'connectivity/load-more' },
    { name: 'reskin', path: 'connectivity/reskin' },
  ])
  .setAliasAdUnits('ip-security-av', [
    { name: 'lb1', templateName: 'LB', path: 'ip-security-av/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'ip-security-av/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'ip-security-av/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'ip-security-av/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'ip-security-av/load-more' },
    { name: 'reskin', path: 'ip-security-av/reskin' },
  ])
  .setAliasAdUnits('wireless-5g', [
    { name: 'lb1', templateName: 'LB', path: 'wireless-5g/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'wireless-5g/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'wireless-5g/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'wireless-5g/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'wireless-5g/load-more' },
    { name: 'reskin', path: 'wireless-5g/reskin' },
  ])
  .setAliasAdUnits('design-install', [
    { name: 'lb1', templateName: 'LB', path: 'design-install/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'design-install/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'design-install/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'design-install/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'design-install/load-more' },
    { name: 'reskin', path: 'design-install/reskin' },
  ])
  .setAliasAdUnits('testing', [
    { name: 'lb1', templateName: 'LB', path: 'testing/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'testing/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'testing/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'testing/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'testing/load-more' },
    { name: 'reskin', path: 'testing/reskin' },
  ])
  .setAliasAdUnits('innovators', [
    { name: 'lb1', templateName: 'LB', path: 'innovators/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'innovators/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'innovators/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'innovators/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'innovators/load-more' },
    { name: 'reskin', path: 'innovators/reskin' },
  ]);

module.exports = config;
