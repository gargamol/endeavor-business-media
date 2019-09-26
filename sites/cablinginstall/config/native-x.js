const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb203f39937800010e385d' },
    { name: 'list2', id: '5cdb203f39937800010e385d' },
    { name: 'list1', id: '5cdb203f39937800010e385d' },
  ])
  .setAliasPlacements('ip-security-av', [
    { name: 'card', id: '5cdb20be39937800010e4de9' },
    { name: 'list2', id: '5cdb20be39937800010e4de9' },
    { name: 'list1', id: '5cdb20be39937800010e4de9' },
  ])
  .setAliasPlacements('design-install', [
    { name: 'card', id: '5cdb20f7f41dfb0001fc9728' },
    { name: 'list2', id: '5cdb20f7f41dfb0001fc9728' },
    { name: 'list1', id: '5cdb20f7f41dfb0001fc9728' },
  ])
  .setAliasPlacements('standards', [
    { name: 'card', id: '5cdb206af41dfb0001fc8040' },
    { name: 'list2', id: '5cdb206af41dfb0001fc8040' },
    { name: 'list1', id: '5cdb206af41dfb0001fc8040' },
  ])
  .setAliasPlacements('wireless-5g', [
    { name: 'card', id: '5cdb210cf41dfb0001fc9a4a' },
    { name: 'list2', id: '5cdb210cf41dfb0001fc9a4a' },
    { name: 'list1', id: '5cdb210cf41dfb0001fc9a4a' },
  ])
  .setAliasPlacements('data-center', [
    { name: 'card', id: '5cdb205439937800010e3bd6' },
    { name: 'list2', id: '5cdb205439937800010e3bd6' },
    { name: 'list1', id: '5cdb205439937800010e3bd6' },
  ])
  .setAliasPlacements('cable', [
    { name: 'card', id: '5cdb208d39937800010e4673' },
    { name: 'list2', id: '5cdb208d39937800010e4673' },
    { name: 'list1', id: '5cdb208d39937800010e4673' },
  ])
  .setAliasPlacements('connectivity', [
    { name: 'card', id: '5cdb20a539937800010e4a97' },
    { name: 'list2', id: '5cdb20a539937800010e4a97' },
    { name: 'list1', id: '5cdb20a539937800010e4a97' },
  ]);

module.exports = config;
