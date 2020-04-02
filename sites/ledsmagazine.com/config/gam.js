const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'LEDS' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
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
  .setAliasAdUnits('leds-ssl-design', [
    { name: 'lb1', templateName: 'LB1', path: 'leds-ssl-design/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'leds-ssl-design/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'leds-ssl-design/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'leds-ssl-design/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'leds-ssl-design/load-more' },
    { name: 'reskin', path: 'leds-ssl-design/reskin' },
  ])
  .setAliasAdUnits('manufacturing-services-testing', [
    { name: 'lb1', templateName: 'LB1', path: 'manufacturing-services-testing/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'manufacturing-services-testing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'manufacturing-services-testing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'manufacturing-services-testing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'manufacturing-services-testing/load-more' },
    { name: 'reskin', path: 'manufacturing-services-testing/reskin' },
  ])
  .setAliasAdUnits('architectural-lighting', [
    { name: 'lb1', templateName: 'LB1', path: 'architectural-lighting/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'architectural-lighting/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'architectural-lighting/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'architectural-lighting/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'architectural-lighting/load-more' },
    { name: 'reskin', path: 'architectural-lighting/reskin' },
  ])
  .setAliasAdUnits('smart-lighting-iot', [
    { name: 'lb1', templateName: 'LB1', path: 'smart-lighting-iot/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'smart-lighting-iot/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'smart-lighting-iot/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'smart-lighting-iot/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'smart-lighting-iot/load-more' },
    { name: 'reskin', path: 'smart-lighting-iot/reskin' },
  ])
  .setAliasAdUnits('specialty-ssl', [
    { name: 'lb1', templateName: 'LB1', path: 'specialty-ssl/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'specialty-ssl/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'specialty-ssl/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'specialty-ssl/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'specialty-ssl/load-more' },
    { name: 'reskin', path: 'specialty-ssl/reskin' },
  ])
  .setAliasAdUnits('horticultural-lighting', [
    { name: 'lb1', templateName: 'LB1', path: 'horticultural-lighting/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'horticultural-lighting/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'horticultural-lighting/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'horticultural-lighting/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'horticultural-lighting/load-more' },
    { name: 'reskin', path: 'horticultural-lighting/reskin' },
  ])
  .setAliasAdUnits('leds-lighting-reports', [
    { name: 'lb1', templateName: 'LB1', path: 'leds-lighting-reports/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'leds-lighting-reports/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'leds-lighting-reports/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'leds-lighting-reports/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'leds-lighting-reports/load-more' },
    { name: 'reskin', path: 'leds-lighting-reports/reskin' },
  ])
  .setAliasAdUnits('lighting-health-wellbeing', [
    { name: 'lb1', templateName: 'LB1', path: 'lighting-health-wellbeing/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'lighting-health-wellbeing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'lighting-health-wellbeing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'lighting-health-wellbeing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'lighting-health-wellbeing/load-more' },
    { name: 'reskin', path: 'lighting-health-wellbeing/reskin' },
  ]);

module.exports = config;
