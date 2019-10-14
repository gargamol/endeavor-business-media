const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'BOW' });

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
  .setAliasAdUnits('bioscience', [
    { name: 'lb1', templateName: 'LB', path: 'bioscience/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'bioscience/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'bioscience/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'bioscience/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'bioscience/load-more' },
    { name: 'reskin', path: 'bioscience/reskin' },
  ])
  .setAliasAdUnits('biomedicine', [
    { name: 'lb1', templateName: 'LB', path: 'biomedicine/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'biomedicine/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'biomedicine/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'biomedicine/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'biomedicine/load-more' },
    { name: 'reskin', path: 'biomedicine/reskin' },
  ])
  .setAliasAdUnits('biophotonics-techniques', [
    { name: 'lb1', templateName: 'LB', path: 'biophotonics-techniques/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'biophotonics-techniques/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'biophotonics-techniques/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'biophotonics-techniques/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'biophotonics-techniques/load-more' },
    { name: 'reskin', path: 'biophotonics-techniques/reskin' },
  ])
  .setAliasAdUnits('biophotonics-tools', [
    { name: 'lb1', templateName: 'LB', path: 'biophotonics-tools/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'biophotonics-tools/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'biophotonics-tools/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'biophotonics-tools/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'biophotonics-tools/load-more' },
    { name: 'reskin', path: 'biophotonics-tools/reskin' },
  ]);

module.exports = config;
