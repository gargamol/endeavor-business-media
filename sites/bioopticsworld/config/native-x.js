const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb1e92f41dfb0001fc3418' },
    { name: 'list2', id: '5cdb1e92f41dfb0001fc3418' },
    { name: 'list1', id: '5cdb1e92f41dfb0001fc3418' },
  ])
  .setAliasPlacements('biophotonics-tools', [
    { name: 'card', id: '5cdb1f3939937800010e1083' },
    { name: 'list2', id: '5cdb1f3939937800010e1083' },
    { name: 'list1', id: '5cdb1f3939937800010e1083' },
  ])
  .setAliasPlacements('biomedicine', [
    { name: 'card', id: '5cdb1ed7f41dfb0001fc3ea7' },
    { name: 'list2', id: '5cdb1ed7f41dfb0001fc3ea7' },
    { name: 'list1', id: '5cdb1ed7f41dfb0001fc3ea7' },
  ])
  .setAliasPlacements('bioimaging', [
    { name: 'card', id: '5cdb1ef3f41dfb0001fc42db' },
    { name: 'list2', id: '5cdb1ef3f41dfb0001fc42db' },
    { name: 'list1', id: '5cdb1ef3f41dfb0001fc42db' },
  ])
  .setAliasPlacements('bioscience', [
    { name: 'card', id: '5cdb1ebdf41dfb0001fc3abb' },
    { name: 'list2', id: '5cdb1ebdf41dfb0001fc3abb' },
    { name: 'list1', id: '5cdb1ebdf41dfb0001fc3abb' },
  ])
  .setAliasPlacements('biophotonics-techniques', [
    { name: 'card', id: '5cdb1f0cf41dfb0001fc4710' },
    { name: 'list2', id: '5cdb1f0cf41dfb0001fc4710' },
    { name: 'list1', id: '5cdb1f0cf41dfb0001fc4710' },
  ]);

module.exports = config;
