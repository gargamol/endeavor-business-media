const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5db05b30c99ad20001f14492' },
  ])
  .setAliasPlacements('bmps', [
    { name: 'default', id: '5db05b75c99ad20001f162f4' },
  ])
  .setAliasPlacements('green-infrastructure', [
    { name: 'default', id: '5db05b653204b10001f9a969' },
  ])
  .setAliasPlacements('program-management', [
    { name: 'default', id: '5db05b58c99ad20001f15628' },
  ])
  .setAliasPlacements('compliance', [
    { name: 'default', id: '5db05b4e3204b10001f99f2a' },
  ])
  .setAliasPlacements('erosion-control', [
    { name: 'default', id: '5db05b3fc99ad20001f14a8f' },
  ]);

module.exports = config;
