const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb213d39937800010e60b2' },
    { name: 'list2', id: '5cdb213d39937800010e60b2' },
    { name: 'list1', id: '5cdb213d39937800010e60b2' },
  ])
  .setAliasPlacements('helicopter', [
    { name: 'card', id: '5cdb21b2f41dfb0001fcb2f5' },
    { name: 'list2', id: '5cdb21b2f41dfb0001fcb2f5' },
    { name: 'list1', id: '5cdb21b2f41dfb0001fcb2f5' },
  ])
  .setAliasPlacements('avionics', [
    { name: 'card', id: '5cdb217f39937800010e6bef' },
    { name: 'list2', id: '5cdb217f39937800010e6bef' },
    { name: 'list1', id: '5cdb217f39937800010e6bef' },
  ])
  .setAliasPlacements('atc-atm', [
    { name: 'card', id: '5cdb2197f41dfb0001fcafa0' },
    { name: 'list2', id: '5cdb2197f41dfb0001fcafa0' },
    { name: 'list1', id: '5cdb2197f41dfb0001fcafa0' },
  ])
  .setAliasPlacements('commercial', [
    { name: 'card', id: '5cdb215139937800010e64c2' },
    { name: 'list2', id: '5cdb215139937800010e64c2' },
    { name: 'list1', id: '5cdb215139937800010e64c2' },
  ])
  .setAliasPlacements('satcom', [
    { name: 'card', id: '5cdb21c739937800010e7633' },
    { name: 'list2', id: '5cdb21c739937800010e7633' },
    { name: 'list1', id: '5cdb21c739937800010e7633' },
  ])
  .setAliasPlacements('military', [
    { name: 'card', id: '5cdb216b39937800010e68ac' },
    { name: 'list2', id: '5cdb216b39937800010e68ac' },
    { name: 'list1', id: '5cdb216b39937800010e68ac' },
  ])
  .setAliasPlacements('unmanned', [
    { name: 'card', id: '5cdb21dff41dfb0001fcb99b' },
    { name: 'list2', id: '5cdb21dff41dfb0001fcb99b' },
    { name: 'list1', id: '5cdb21dff41dfb0001fcb99b' },
  ]);

module.exports = config;
