const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'MassTransit' });

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
  .setAliasAdUnits('bus', [
    { name: 'lb1', templateName: 'LB1', path: 'bus/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'bus/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'bus/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'bus/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'bus/load-more' },
    { name: 'reskin', path: 'bus/reskin' },
  ])
  .setAliasAdUnits('rail', [
    { name: 'lb1', templateName: 'LB1', path: 'rail/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'rail/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'rail/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'rail/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'rail/load-more' },
    { name: 'reskin', path: 'rail/reskin' },
  ])
  .setAliasAdUnits('technology', [
    { name: 'lb1', templateName: 'LB1', path: 'technology/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'technology/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'technology/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'technology/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'technology/load-more' },
    { name: 'reskin', path: 'technology/reskin' },
  ])
  .setAliasAdUnits('safety-security', [
    { name: 'lb1', templateName: 'LB1', path: 'safety-security/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'safety-security/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'safety-security/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'safety-security/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'safety-security/load-more' },
    { name: 'reskin', path: 'safety-security/reskin' },
  ])
  .setAliasAdUnits('alt-mobility', [
    { name: 'lb1', templateName: 'LB1', path: 'alt-mobility/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'alt-mobility/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'alt-mobility/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'alt-mobility/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'alt-mobility/load-more' },
    { name: 'reskin', path: 'alt-mobility/reskin' },
  ])
  .setAliasAdUnits('management', [
    { name: 'lb1', templateName: 'LB1', path: 'management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'management/load-more' },
    { name: 'reskin', path: 'management/reskin' },
  ])
  .setAliasAdUnits('transit-bids-rfp', [
    { name: 'lb1', templateName: 'LB1', path: 'transit-bids-rfp/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'transit-bids-rfp/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'transit-bids-rfp/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'transit-bids-rfp/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'transit-bids-rfp/load-more' },
    { name: 'reskin', path: 'transit-bids-rfp/reskin' },
  ])
  .setAliasAdUnits('technology/fare-collection', [
    { name: 'lb1', templateName: 'LB1', path: 'technology/fare-collection/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'technology/fare-collection/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'technology/fare-collection/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'technology/fare-collection/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'technology/fare-collection/load-more' },
    { name: 'reskin', path: 'technology/fare-collection/reskin' },
  ]);

module.exports = config;
