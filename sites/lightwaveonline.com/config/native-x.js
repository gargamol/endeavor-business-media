const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb220139937800010e7f68' },
  ])
  .setAliasPlacements('network-design', [
    { name: 'default', id: '5cdb221d39937800010e8310' },
  ])
  .setAliasPlacements('fttx', [
    { name: 'default', id: '5cdb2233f41dfb0001fcc605' },
  ])
  .setAliasPlacements('5g-mobile', [
    { name: 'default', id: '5cdb227f39937800010e92a4' },
  ])
  .setAliasPlacements('network-automation', [
    { name: 'default', id: '5cdb224f39937800010e8a75' },
  ])
  .setAliasPlacements('test', [
    { name: 'default', id: '5cdb229839937800010e969f' },
  ])
  .setAliasPlacements('business', [
    { name: 'default', id: '5cdb22e5f41dfb0001fce217' },
  ])
  .setAliasPlacements('data-center', [
    { name: 'default', id: '5cdb226839937800010e8ee5' },
  ])
  .setAliasPlacements('optical-tech', [
    { name: 'default', id: '5cdb22cdf41dfb0001fcddff' },
  ]);

module.exports = config;
