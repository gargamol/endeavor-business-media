const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb19ca39937800010d19fc' },
    { name: 'list2', id: '5cdb19ca39937800010d19fc' },
    { name: 'list1', id: '5cdb19ca39937800010d19fc' },
  ])
  .setAliasPlacements('clinical', [
    { name: 'card', id: '5cdb1a1af41dfb0001fb636a' },
    { name: 'list2', id: '5cdb1a1af41dfb0001fb636a' },
    { name: 'list1', id: '5cdb1a1af41dfb0001fb636a' },
  ])
  .setAliasPlacements('dental-assisting', [
    { name: 'card', id: '5cdb1a9139937800010d416f' },
    { name: 'list2', id: '5cdb1a9139937800010d416f' },
    { name: 'list1', id: '5cdb1a9139937800010d416f' },
  ])
  .setAliasPlacements('dental-hygiene', [
    { name: 'card', id: '5cdb19f1f41dfb0001fb5bb5' },
    { name: 'list2', id: '5cdb19f1f41dfb0001fb5bb5' },
    { name: 'list1', id: '5cdb19f1f41dfb0001fb5bb5' },
  ])
  .setAliasPlacements('practice-management', [
    { name: 'card', id: '5cdb1a5439937800010d35e3' },
    { name: 'list2', id: '5cdb1a5439937800010d35e3' },
    { name: 'list1', id: '5cdb1a5439937800010d35e3' },
  ])
  .setAliasPlacements('products', [
    { name: 'card', id: '5cdb1a33f41dfb0001fb69d6' },
    { name: 'list2', id: '5cdb1a33f41dfb0001fb69d6' },
    { name: 'list1', id: '5cdb1a33f41dfb0001fb69d6' },
  ])
  .setAliasPlacements('front-office', [
    { name: 'card', id: '5cdb1a7339937800010d3c98' },
    { name: 'list2', id: '5cdb1a7339937800010d3c98' },
    { name: 'list1', id: '5cdb1a7339937800010d3c98' },
  ]);

module.exports = config;
