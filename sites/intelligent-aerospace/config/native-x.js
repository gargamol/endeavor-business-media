const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb213d39937800010e60b2' },
  ])
  .setAliasPlacements('helicopter', [
    { name: 'default', id: '5cdb21b2f41dfb0001fcb2f5' },
  ])
  .setAliasPlacements('avionics', [
    { name: 'default', id: '5cdb217f39937800010e6bef' },
  ])
  .setAliasPlacements('atc-atm', [
    { name: 'default', id: '5cdb2197f41dfb0001fcafa0' },
  ])
  .setAliasPlacements('commercial', [
    { name: 'default', id: '5cdb215139937800010e64c2' },
  ])
  .setAliasPlacements('satcom', [
    { name: 'default', id: '5cdb21c739937800010e7633' },
  ])
  .setAliasPlacements('military', [
    { name: 'default', id: '5cdb216b39937800010e68ac' },
  ])
  .setAliasPlacements('unmanned', [
    { name: 'default', id: '5cdb21dff41dfb0001fcb99b' },
  ]);

module.exports = config;
