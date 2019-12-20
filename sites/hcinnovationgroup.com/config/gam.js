const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'LFW' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('MS', { size: [300, 50] })
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
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('summits', [
    { name: 'lb1', templateName: 'LB', path: 'summits/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'summits/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'summits/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'summits/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'summits/load-more' },
    { name: 'reskin', path: 'summits/reskin' },
  ])
  .setAliasAdUnits('policy-value-based-care', [
    { name: 'lb1', templateName: 'LB', path: 'policy-value-based-care/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'policy-value-based-care/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'policy-value-based-care/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'policy-value-based-care/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'policy-value-based-care/load-more' },
    { name: 'reskin', path: 'policy-value-based-care/reskin' },
  ])
  .setAliasAdUnits('population-health-management', [
    { name: 'lb1', templateName: 'LB', path: 'population-health-management/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'population-health-management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'population-health-management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'population-health-management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'population-health-management/load-more' },
    { name: 'reskin', path: 'population-health-management/reskin' },
  ])
  .setAliasAdUnits('analytics-ai', [
    { name: 'lb1', templateName: 'LB', path: 'analytics-ai/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'analytics-ai/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'analytics-ai/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'analytics-ai/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'analytics-ai/load-more' },
    { name: 'reskin', path: 'analytics-ai/reskin' },
  ])
  .setAliasAdUnits('cybersecurity', [
    { name: 'lb1', templateName: 'LB', path: 'cybersecurity/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'cybersecurity/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'cybersecurity/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'cybersecurity/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'cybersecurity/load-more' },
    { name: 'reskin', path: 'cybersecurity/reskin' },
  ])
  .setAliasAdUnits('finance-revenue-cycle', [
    { name: 'lb1', templateName: 'LB', path: 'finance-revenue-cycle/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'finance-revenue-cycle/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'finance-revenue-cycle/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'finance-revenue-cycle/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'finance-revenue-cycle/load-more' },
    { name: 'reskin', path: 'finance-revenue-cycle/reskin' },
  ])
  .setAliasAdUnits('interoperability-hie', [
    { name: 'lb1', templateName: 'LB', path: 'interoperability-hie/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'interoperability-hie/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'interoperability-hie/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'interoperability-hie/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'interoperability-hie/load-more' },
    { name: 'reskin', path: 'interoperability-hie/reskin' },
  ])
  .setAliasAdUnits('clinical-it', [
    { name: 'lb1', templateName: 'LB', path: 'clinical-it/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'clinical-it/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'clinical-it/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'clinical-it/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'clinical-it/load-more' },
    { name: 'reskin', path: 'clinical-it/reskin' },
  ])
  .setAliasAdUnits('imaging', [
    { name: 'lb1', templateName: 'LB', path: 'imaging/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'imaging/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'imaging/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'imaging/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'imaging/load-more' },
    { name: 'reskin', path: 'imaging/reskin' },
  ]);

module.exports = config;
