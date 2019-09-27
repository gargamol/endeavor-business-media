const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdc6e78f41dfb000125fc1a' },
    { name: 'list2', id: '5cdc6e78f41dfb000125fc1a' },
    { name: 'list1', id: '5cdc6e78f41dfb000125fc1a' },
  ])
  .setAliasPlacements('drilling-completion', [
    { name: 'card', id: '5cdc6e91f41dfb00012604ce' },
    { name: 'list2', id: '5cdc6e91f41dfb00012604ce' },
    { name: 'list1', id: '5cdc6e91f41dfb00012604ce' },
  ])
  .setAliasPlacements('field-development', [
    { name: 'card', id: '5cdc6ea9f41dfb0001260c2d' },
    { name: 'list2', id: '5cdc6ea9f41dfb0001260c2d' },
    { name: 'list1', id: '5cdc6ea9f41dfb0001260c2d' },
  ])
  .setAliasPlacements('subsea', [
    { name: 'card', id: '5cdc6ec0f41dfb000126118c' },
    { name: 'list2', id: '5cdc6ec0f41dfb000126118c' },
    { name: 'list1', id: '5cdc6ec0f41dfb000126118c' },
  ])
  .setAliasPlacements('geosciences', [
    { name: 'card', id: '5cdc6edff41dfb0001261a5d' },
    { name: 'list2', id: '5cdc6edff41dfb0001261a5d' },
    { name: 'list1', id: '5cdc6edff41dfb0001261a5d' },
  ])
  .setAliasPlacements('pipelines', [
    { name: 'card', id: '5cdc6ef5399378000137b506' },
    { name: 'list2', id: '5cdc6ef5399378000137b506' },
    { name: 'list1', id: '5cdc6ef5399378000137b506' },
  ])
  .setAliasPlacements('production', [
    { name: 'card', id: '5cdc6f10399378000137bb3c' },
    { name: 'list2', id: '5cdc6f10399378000137bb3c' },
    { name: 'list1', id: '5cdc6f10399378000137bb3c' },
  ])
  .setAliasPlacements('rigs-vessels', [
    { name: 'card', id: '5cdc6f2bf41dfb0001262e4b' },
    { name: 'list2', id: '5cdc6f2bf41dfb0001262e4b' },
    { name: 'list1', id: '5cdc6f2bf41dfb0001262e4b' },
  ])
  .setAliasPlacements('deepwater', [
    { name: 'card', id: '5cdc6f4d399378000137cba1' },
    { name: 'list2', id: '5cdc6f4d399378000137cba1' },
    { name: 'list1', id: '5cdc6f4d399378000137cba1' },
  ]);

module.exports = config;
