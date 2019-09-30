const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb23a539937800010ec049' },
    { name: 'list2', id: '5cdb23a539937800010ec049' },
    { name: 'list1', id: '5cdb23a539937800010ec049' },
  ])
  .setAliasPlacements('smart-lighting-iot', [
    { name: 'card', id: '5cdb2406f41dfb0001fd0e95' },
    { name: 'list2', id: '5cdb2406f41dfb0001fd0e95' },
    { name: 'list1', id: '5cdb2406f41dfb0001fd0e95' },
  ])
  .setAliasPlacements('architectural-lighting', [
    { name: 'card', id: '5cdb23ef39937800010ecb73' },
    { name: 'list2', id: '5cdb23ef39937800010ecb73' },
    { name: 'list1', id: '5cdb23ef39937800010ecb73' },
  ])
  .setAliasPlacements('manufacturing-services-testing', [
    { name: 'card', id: '5cdb23d2f41dfb0001fd06dc' },
    { name: 'list2', id: '5cdb23d2f41dfb0001fd06dc' },
    { name: 'list1', id: '5cdb23d2f41dfb0001fd06dc' },
  ])
  .setAliasPlacements('horticultural-lighting', [
    { name: 'card', id: '5cdb2436f41dfb0001fd16e8' },
    { name: 'list2', id: '5cdb2436f41dfb0001fd16e8' },
    { name: 'list1', id: '5cdb2436f41dfb0001fd16e8' },
  ])
  .setAliasPlacements('leds-ssl-design', [
    { name: 'card', id: '5cdb23bc39937800010ec383' },
    { name: 'list2', id: '5cdb23bc39937800010ec383' },
    { name: 'list1', id: '5cdb23bc39937800010ec383' },
  ])
  .setAliasPlacements('specialty-ssl', [
    { name: 'card', id: '5cdb241e39937800010ed2d5' },
    { name: 'list2', id: '5cdb241e39937800010ed2d5' },
    { name: 'list1', id: '5cdb241e39937800010ed2d5' },
  ]);

module.exports = config;
