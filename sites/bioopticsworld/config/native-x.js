const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb1e92f41dfb0001fc3418' },
  ])
  .setAliasPlacements('biophotonics-tools', [
    { name: 'default', id: '5cdb1f3939937800010e1083' },
  ])
  .setAliasPlacements('biomedicine', [
    { name: 'default', id: '5cdb1ed7f41dfb0001fc3ea7' },
  ])
  .setAliasPlacements('bioimaging', [
    { name: 'default', id: '5cdb1ef3f41dfb0001fc42db' },
  ])
  .setAliasPlacements('bioscience', [
    { name: 'default', id: '5cdb1ebdf41dfb0001fc3abb' },
  ])
  .setAliasPlacements('biophotonics-techniques', [
    { name: 'default', id: '5cdb1f0cf41dfb0001fc4710' },
  ]);

module.exports = config;
