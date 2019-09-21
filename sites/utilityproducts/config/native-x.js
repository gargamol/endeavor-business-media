const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cd44bb5f41dfb0001350efe' },
    { name: 'list2', id: '5cd44bb5f41dfb0001350efe' },
    { name: 'list1', id: '5cd44bb5f41dfb0001350efe' },
  ])
  .setAliasPlacements('test-measurement', [
    { name: 'card', id: '5cdb168c39937800010c8203' },
    { name: 'list2', id: '5cdb168c39937800010c8203' },
    { name: 'list1', id: '5cdb168c39937800010c8203' },
  ])
  .setAliasPlacements('transmission-distribution', [
    { name: 'card', id: '5cdb166bf41dfb0001fab34b' },
    { name: 'list2', id: '5cdb166bf41dfb0001fab34b' },
    { name: 'list1', id: '5cdb166bf41dfb0001fab34b' },
  ])
  .setAliasPlacements('tools-supplies', [
    { name: 'card', id: '5cdb1635f41dfb0001faaa6e' },
    { name: 'list2', id: '5cdb1635f41dfb0001faaa6e' },
    { name: 'list1', id: '5cdb1635f41dfb0001faaa6e' },
  ])
  .setAliasPlacements('safety', [
    { name: 'card', id: '5cdb164c39937800010c76ef' },
    { name: 'list2', id: '5cdb164c39937800010c76ef' },
    { name: 'list1', id: '5cdb164c39937800010c76ef' },
  ])
  .setAliasPlacements('vehicles-accessories', [
    { name: 'card', id: '5cdb15ebf41dfb0001fa9cba' },
    { name: 'list2', id: '5cdb15ebf41dfb0001fa9cba' },
    { name: 'list1', id: '5cdb15ebf41dfb0001fa9cba' },
  ]);

module.exports = config;
