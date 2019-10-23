const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5d372175f1658300018c023e' },
  ])
  .setAliasPlacements('distributed-energy', [
    { name: 'default', id: '5db05e6fc99ad20001f2aa31' },
  ])
  .setAliasPlacements('erosion-control', [
    { name: 'default', id: '5db05e62c99ad20001f2a3f0' },
  ])
  .setAliasPlacements('grading-excavation-contractor', [
    { name: 'default', id: '5db05e4c3204b10001fae89f' },
  ])
  .setAliasPlacements('msw-management', [
    { name: 'default', id: '5db05e42c99ad20001f29665' },
  ])
  .setAliasPlacements('stormwater', [
    { name: 'default', id: '5db05e383204b10001fae145' },
  ])
  .setAliasPlacements('water-efficiency', [
    { name: 'default', id: '5db05e2cc99ad20001f28e8a' },
  ]);

module.exports = config;
