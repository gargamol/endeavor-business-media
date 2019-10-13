const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdc6e78f41dfb000125fc1a' },
  ])
  .setAliasPlacements('drilling-completion', [
    { name: 'default', id: '5cdc6e91f41dfb00012604ce' },
  ])
  .setAliasPlacements('field-development', [
    { name: 'default', id: '5cdc6ea9f41dfb0001260c2d' },
  ])
  .setAliasPlacements('subsea', [
    { name: 'default', id: '5cdc6ec0f41dfb000126118c' },
  ])
  .setAliasPlacements('geosciences', [
    { name: 'default', id: '5cdc6edff41dfb0001261a5d' },
  ])
  .setAliasPlacements('pipelines', [
    { name: 'default', id: '5cdc6ef5399378000137b506' },
  ])
  .setAliasPlacements('production', [
    { name: 'default', id: '5cdc6f10399378000137bb3c' },
  ])
  .setAliasPlacements('rigs-vessels', [
    { name: 'default', id: '5cdc6f2bf41dfb0001262e4b' },
  ])
  .setAliasPlacements('deepwater', [
    { name: 'default', id: '5cdc6f4d399378000137cba1' },
  ]);

module.exports = config;
