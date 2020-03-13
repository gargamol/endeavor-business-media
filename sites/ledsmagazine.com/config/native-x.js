const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb23a539937800010ec049' },
  ])
  .setAliasPlacements('smart-lighting-iot', [
    { name: 'default', id: '5cdb2406f41dfb0001fd0e95' },
  ])
  .setAliasPlacements('architectural-lighting', [
    { name: 'default', id: '5cdb23ef39937800010ecb73' },
  ])
  .setAliasPlacements('manufacturing-services-testing', [
    { name: 'default', id: '5cdb23d2f41dfb0001fd06dc' },
  ])
  .setAliasPlacements('horticultural-lighting', [
    { name: 'default', id: '5cdb2436f41dfb0001fd16e8' },
  ])
  .setAliasPlacements('leds-ssl-design', [
    { name: 'default', id: '5cdb23bc39937800010ec383' },
  ])
  .setAliasPlacements('specialty-ssl', [
    { name: 'default', id: '5cdb241e39937800010ed2d5' },
  ])
  .setAliasPlacements('lighting-health-wellbeing', [
    { name: 'default', id: '5da8cd31cc0836000171d1ad' },
  ]);

module.exports = config;
