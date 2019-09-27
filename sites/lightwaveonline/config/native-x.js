const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb220139937800010e7f68' },
    { name: 'list2', id: '5cdb220139937800010e7f68' },
    { name: 'list1', id: '5cdb220139937800010e7f68' },
  ])
  .setAliasPlacements('network-design', [
    { name: 'card', id: '5cdb221d39937800010e8310' },
    { name: 'list2', id: '5cdb221d39937800010e8310' },
    { name: 'list1', id: '5cdb221d39937800010e8310' },
  ])
  .setAliasPlacements('fttx', [
    { name: 'card', id: '5cdb2233f41dfb0001fcc605' },
    { name: 'list2', id: '5cdb2233f41dfb0001fcc605' },
    { name: 'list1', id: '5cdb2233f41dfb0001fcc605' },
  ])
  .setAliasPlacements('5g-mobile', [
    { name: 'card', id: '5cdb227f39937800010e92a4' },
    { name: 'list2', id: '5cdb227f39937800010e92a4' },
    { name: 'list1', id: '5cdb227f39937800010e92a4' },
  ])
  .setAliasPlacements('network-automation', [
    { name: 'card', id: '5cdb224f39937800010e8a75' },
    { name: 'list2', id: '5cdb224f39937800010e8a75' },
    { name: 'list1', id: '5cdb224f39937800010e8a75' },
  ])
  .setAliasPlacements('test', [
    { name: 'card', id: '5cdb229839937800010e969f' },
    { name: 'list2', id: '5cdb229839937800010e969f' },
    { name: 'list1', id: '5cdb229839937800010e969f' },
  ])
  .setAliasPlacements('business', [
    { name: 'card', id: '5cdb22e5f41dfb0001fce217' },
    { name: 'list2', id: '5cdb22e5f41dfb0001fce217' },
    { name: 'list1', id: '5cdb22e5f41dfb0001fce217' },
  ])
  .setAliasPlacements('data-center', [
    { name: 'card', id: '5cdb226839937800010e8ee5' },
    { name: 'list2', id: '5cdb226839937800010e8ee5' },
    { name: 'list1', id: '5cdb226839937800010e8ee5' },
  ])
  .setAliasPlacements('optical-tech', [
    { name: 'card', id: '5cdb22cdf41dfb0001fcddff' },
    { name: 'list2', id: '5cdb22cdf41dfb0001fcddff' },
    { name: 'list1', id: '5cdb22cdf41dfb0001fcddff' },
  ]);

module.exports = config;
