const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'LEDS' });

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
  .setAliasAdUnits('leds-ssl-design', [
    { name: 'lb1', templateName: 'LB', path: 'leds-ssl-design/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'leds-ssl-design/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'leds-ssl-design/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'leds-ssl-design/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'leds-ssl-design/load-more' },
    { name: 'reskin', path: 'leds-ssl-design/reskin' },
  ])
  .setAliasAdUnits('manufacturing-services-testing', [
    { name: 'lb1', templateName: 'LB', path: 'manufacturing-services-testing/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'manufacturing-services-testing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'manufacturing-services-testing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'manufacturing-services-testing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'manufacturing-services-testing/load-more' },
    { name: 'reskin', path: 'manufacturing-services-testing/reskin' },
  ])
  .setAliasAdUnits('architectural-lighting', [
    { name: 'lb1', templateName: 'LB', path: 'architectural-lighting/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'architectural-lighting/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'architectural-lighting/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'architectural-lighting/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'architectural-lighting/load-more' },
    { name: 'reskin', path: 'architectural-lighting/reskin' },
  ])
  .setAliasAdUnits('smart-lighting-iot', [
    { name: 'lb1', templateName: 'LB', path: 'smart-lighting-iot/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'smart-lighting-iot/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'smart-lighting-iot/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'smart-lighting-iot/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'smart-lighting-iot/load-more' },
    { name: 'reskin', path: 'smart-lighting-iot/reskin' },
  ])
  .setAliasAdUnits('specialty-ssl', [
    { name: 'lb1', templateName: 'LB', path: 'specialty-ssl/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'specialty-ssl/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'specialty-ssl/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'specialty-ssl/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'specialty-ssl/load-more' },
    { name: 'reskin', path: 'specialty-ssl/reskin' },
  ])
  .setAliasAdUnits('horticultural-lighting', [
    { name: 'lb1', templateName: 'LB', path: 'horticultural-lighting/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'horticultural-lighting/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'horticultural-lighting/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'horticultural-lighting/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'horticultural-lighting/load-more' },
    { name: 'reskin', path: 'horticultural-lighting/reskin' },
  ])
  .setAliasAdUnits('leds-lighting-reports', [
    { name: 'lb1', templateName: 'LB', path: 'leds-lighting-reports/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'leds-lighting-reports/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'leds-lighting-reports/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'leds-lighting-reports/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'leds-lighting-reports/load-more' },
    { name: 'reskin', path: 'leds-lighting-reports/reskin' },
  ])
  .setAliasAdUnits('lighting-health-wellbeing', [
    { name: 'lb1', templateName: 'LB', path: 'lighting-health-wellbeing/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'lighting-health-wellbeing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'lighting-health-wellbeing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'lighting-health-wellbeing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'lighting-health-wellbeing/load-more' },
    { name: 'reskin', path: 'lighting-health-wellbeing/reskin' },
  ]);

module.exports = config;
