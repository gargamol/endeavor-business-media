const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'Officer' });

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
  .setTemplate('RAIL1', { size: [300, 250] })
  .setTemplate('RAIL2', { size: [300, 600] })
  .setTemplate('LM', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('tactical', [
    { name: 'lb1', templateName: 'LB', path: 'tactical/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/load-more' },
    { name: 'reskin', path: 'tactical/reskin' },
    { name: 'wa', path: 'tactical/wa' },
  ])
  .setAliasAdUnits('training-careers', [
    { name: 'lb1', templateName: 'LB', path: 'training-careers/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'training-careers/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'training-careers/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'training-careers/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'training-careers/load-more' },
    { name: 'reskin', path: 'training-careers/reskin' },
    { name: 'wa', path: 'training-careers/wa' },
  ])
  .setAliasAdUnits('on-the-street', [
    { name: 'lb1', templateName: 'LB', path: 'on-the-street/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'on-the-street/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'on-the-street/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'on-the-street/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'on-the-street/load-more' },
    { name: 'reskin', path: 'on-the-street/reskin' },
    { name: 'wa', path: 'on-the-street/wa' },
  ])
  .setAliasAdUnits('investigations', [
    { name: 'lb1', templateName: 'LB', path: 'investigations/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'investigations/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'investigations/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'investigations/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'investigations/load-more' },
    { name: 'reskin', path: 'investigations/reskin' },
    { name: 'wa', path: 'investigations/wa' },
  ])
  .setAliasAdUnits('command-hq', [
    { name: 'lb1', templateName: 'LB', path: 'command-hq/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/load-more' },
    { name: 'reskin', path: 'command-hq/reskin' },
    { name: 'wa', path: 'command-hq/wa' },
  ]);

module.exports = config;
