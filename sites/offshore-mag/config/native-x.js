const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdc6e78f41dfb000125fc1a' },
    { name: 'list2', id: '5cdc6e7ef41dfb000125ff04' },
    { name: 'list1', id: '5cdc6e85f41dfb0001260144' },
  ])
  .setAliasPlacements('drilling-completion', [
    { name: 'card', id: '5cdc6e91f41dfb00012604ce' },
    { name: 'list2', id: '5cdc6e98f41dfb000126074d' },
    { name: 'list1', id: '5cdc6e9f3993780001379e64' },
  ])
  .setAliasPlacements('field-development', [
    { name: 'card', id: '5cdc6ea9f41dfb0001260c2d' },
    { name: 'list2', id: '5cdc6eb0399378000137a28b' },
    { name: 'list1', id: '5cdc6eb6f41dfb0001260f23' },
  ])
  .setAliasPlacements('subsea', [
    { name: 'card', id: '5cdc6ec0f41dfb000126118c' },
    { name: 'list2', id: '5cdc6ed4399378000137ab89' },
    { name: 'list1', id: '5cdc6ecb399378000137a92c' },
  ])
  .setAliasPlacements('geosciences', [
    { name: 'card', id: '5cdc6edff41dfb0001261a5d' },
    { name: 'list2', id: '5cdc6ee5399378000137b03f' },
    { name: 'list1', id: '5cdc6eec399378000137b21c' },
  ])
  .setAliasPlacements('pipelines', [
    { name: 'card', id: '5cdc6ef5399378000137b506' },
    { name: 'list2', id: '5cdc6efcf41dfb000126225a' },
    { name: 'list1', id: '5cdc6f04f41dfb0001262431' },
  ])
  .setAliasPlacements('production', [
    { name: 'card', id: '5cdc6f10399378000137bb3c' },
    { name: 'list2', id: '5cdc6f18f41dfb000126294e' },
    { name: 'list1', id: '5cdc6f1f399378000137bfc3' },
  ])
  .setAliasPlacements('rigs-vessels', [
    { name: 'card', id: '5cdc6f2bf41dfb0001262e4b' },
    { name: 'list2', id: '5cdc6f3af41dfb00012631ff' },
    { name: 'list1', id: '5cdc6f41399378000137c8a9' },
  ])
  .setAliasPlacements('deepwater', [
    { name: 'card', id: '5cdc6f4d399378000137cba1' },
    { name: 'list2', id: '5cdc6f54399378000137cd71' },
    { name: 'list1', id: '5cdc6f5af41dfb0001263b3b' },
  ]);

module.exports = config;
