const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'VSD' });

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
  .setAliasAdUnits('factory', [
    { name: 'lb1', templateName: 'LB', path: 'factory/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'factory/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'factory/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'factory/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'factory/load-more' },
    { name: 'reskin', path: 'factory/reskin' },
  ])
  .setAliasAdUnits('non-factory', [
    { name: 'lb1', templateName: 'LB', path: 'non-factory/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'non-factory/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'non-factory/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'non-factory/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'non-factory/load-more' },
    { name: 'reskin', path: 'non-factory/reskin' },
  ])
  .setAliasAdUnits('cameras', [
    { name: 'lb1', templateName: 'LB', path: 'cameras/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'cameras/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'cameras/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'cameras/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'cameras/load-more' },
    { name: 'reskin', path: 'cameras/reskin' },
  ])
  .setAliasAdUnits('boards-software', [
    { name: 'lb1', templateName: 'LB', path: 'boards-software/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'boards-software/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'boards-software/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'boards-software/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'boards-software/load-more' },
    { name: 'reskin', path: 'boards-software/reskin' },
  ])
  .setAliasAdUnits('embedded', [
    { name: 'lb1', templateName: 'LB', path: 'embedded/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'embedded/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'embedded/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'embedded/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'embedded/load-more' },
    { name: 'reskin', path: 'embedded/reskin' },
  ])
  .setAliasAdUnits('unmanned', [
    { name: 'lb1', templateName: 'LB', path: 'unmanned/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'unmanned/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'unmanned/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'unmanned/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'unmanned/load-more' },
    { name: 'reskin', path: 'unmanned/reskin' },
  ])
  .setAliasAdUnits('nextgen', [
    { name: 'lb1', templateName: 'LB', path: 'nextgen/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'nextgen/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'nextgen/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'nextgen/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'nextgen/load-more' },
    { name: 'reskin', path: 'nextgen/reskin' },
  ])
  .setAliasAdUnits('emerging', [
    { name: 'lb1', templateName: 'LB', path: 'emerging/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'emerging/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'emerging/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'emerging/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'emerging/load-more' },
    { name: 'reskin', path: 'emerging/reskin' },
  ])
  .setAliasAdUnits('3d-imaging', [
    { name: 'lb1', templateName: 'LB', path: '3d-imaging/lb1' },
    { name: 'lb2', templateName: 'LB', path: '3d-imaging/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: '3d-imaging/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: '3d-imaging/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: '3d-imaging/load-more' },
    { name: 'reskin', path: '3d-imaging/reskin' },
  ])
  .setAliasAdUnits('lighting-optics', [
    { name: 'lb1', templateName: 'LB', path: 'lighting-optics/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'lighting-optics/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'lighting-optics/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'lighting-optics/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'lighting-optics/load-more' },
    { name: 'reskin', path: 'lighting-optics/reskin' },
  ])
  .setAliasAdUnits('cameras-accessories', [
    { name: 'lb1', templateName: 'LB', path: 'cameras-accessories/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'cameras-accessories/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'cameras-accessories/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'cameras-accessories/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'cameras-accessories/load-more' },
    { name: 'reskin', path: 'cameras-accessories/reskin' },
  ]);

module.exports = config;
