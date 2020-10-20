const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'HCI' });

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
  .setAliasAdUnits('summits', [
    { name: 'lb1', templateName: 'LB1', path: 'summits/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'summits/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'summits/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'summits/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'summits/load-more' },
    { name: 'reskin', path: 'summits/reskin' },
  ])
  .setAliasAdUnits('policy-value-based-care', [
    { name: 'lb1', templateName: 'LB1', path: 'policy-value-based-care/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'policy-value-based-care/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'policy-value-based-care/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'policy-value-based-care/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'policy-value-based-care/load-more' },
    { name: 'reskin', path: 'policy-value-based-care/reskin' },
  ])
  .setAliasAdUnits('population-health-management', [
    { name: 'lb1', templateName: 'LB1', path: 'population-health-management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'population-health-management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'population-health-management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'population-health-management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'population-health-management/load-more' },
    { name: 'reskin', path: 'population-health-management/reskin' },
  ])
  .setAliasAdUnits('analytics-ai', [
    { name: 'lb1', templateName: 'LB1', path: 'analytics-ai/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'analytics-ai/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'analytics-ai/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'analytics-ai/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'analytics-ai/load-more' },
    { name: 'reskin', path: 'analytics-ai/reskin' },
  ])
  .setAliasAdUnits('cybersecurity', [
    { name: 'lb1', templateName: 'LB1', path: 'cybersecurity/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'cybersecurity/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'cybersecurity/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'cybersecurity/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'cybersecurity/load-more' },
    { name: 'reskin', path: 'cybersecurity/reskin' },
  ])
  .setAliasAdUnits('finance-revenue-cycle', [
    { name: 'lb1', templateName: 'LB1', path: 'finance-revenue-cycle/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'finance-revenue-cycle/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'finance-revenue-cycle/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'finance-revenue-cycle/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'finance-revenue-cycle/load-more' },
    { name: 'reskin', path: 'finance-revenue-cycle/reskin' },
  ])
  .setAliasAdUnits('interoperability-hie', [
    { name: 'lb1', templateName: 'LB1', path: 'interoperability-hie/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'interoperability-hie/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'interoperability-hie/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'interoperability-hie/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'interoperability-hie/load-more' },
    { name: 'reskin', path: 'interoperability-hie/reskin' },
  ])
  .setAliasAdUnits('clinical-it', [
    { name: 'lb1', templateName: 'LB1', path: 'clinical-it/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'clinical-it/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'clinical-it/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'clinical-it/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'clinical-it/load-more' },
    { name: 'reskin', path: 'clinical-it/reskin' },
  ])
  .setAliasAdUnits('imaging', [
    { name: 'lb1', templateName: 'LB1', path: 'imaging/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'imaging/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'imaging/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'imaging/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'imaging/load-more' },
    { name: 'reskin', path: 'imaging/reskin' },
  ])
  .setAliasAdUnits('patient-empowerment', [
    { name: 'lb1', templateName: 'LB1', path: 'patient-empowerment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'patient-empowerment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'patient-empowerment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'patient-empowerment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'patient-empowerment/load-more' },
    { name: 'ms', templateName: 'MS', path: 'patient-empowerment/ms' },
    { name: 'reskin', path: 'patient-empowerment/reskin' },
    { name: 'wa', path: 'patient-empowerment/wa' },
  ])
  .setAliasAdUnits('topic-takeover', [
    { name: 'lb1', templateName: 'LB1', path: 'topic-takeover/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'topic-takeover/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'topic-takeover/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'topic-takeover/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'topic-takeover/load-more' },
    { name: 'ms', templateName: 'MS', path: 'topic-takeover/ms' },
    { name: 'reskin', path: 'topic-takeover/reskin' },
    { name: 'wa', path: 'topic-takeover/wa' },
  ])
  .setAliasAdUnits('covid-19-and-telehealth', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19-and-telehealth/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19-and-telehealth/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19-and-telehealth/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19-and-telehealth/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19-and-telehealth/load-more' },
    { name: 'reskin', path: 'covid-19-and-telehealth/reskin' },
  ])
  .setAliasAdUnits('covid-19-and-clinical-it', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19-and-clinical-it/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19-and-clinical-it/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19-and-clinical-it/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19-and-clinical-it/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19-and-clinical-it/load-more' },
    { name: 'reskin', path: 'covid-19-and-clinical-it/reskin' },
  ])
  .setAliasAdUnits('covid-19-and-cybersecurity', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19-and-cybersecurity/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19-and-cybersecurity/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19-and-cybersecurity/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19-and-cybersecurity/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19-and-cybersecurity/load-more' },
    { name: 'reskin', path: 'covid-19-and-cybersecurity/reskin' },
  ])
  .setAliasAdUnits('product-showcase-day', [
    { name: 'lb1', templateName: 'LB1', path: 'product-showcase-day/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'product-showcase-day/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'product-showcase-day/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'product-showcase-day/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'product-showcase-day/load-more' },
    { name: 'reskin', path: 'product-showcase-day/reskin' },
  ]);

module.exports = config;
