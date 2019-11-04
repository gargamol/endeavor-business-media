const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb203f39937800010e385d' },
  ])
  .setAliasPlacements('ip-security-av', [
    { name: 'default', id: '5cdb20be39937800010e4de9' },
  ])
  .setAliasPlacements('design-install', [
    { name: 'default', id: '5cdb20f7f41dfb0001fc9728' },
  ])
  .setAliasPlacements('standards', [
    { name: 'default', id: '5cdb206af41dfb0001fc8040' },
  ])
  .setAliasPlacements('wireless-5g', [
    { name: 'default', id: '5cdb210cf41dfb0001fc9a4a' },
  ])
  .setAliasPlacements('data-center', [
    { name: 'default', id: '5cdb205439937800010e3bd6' }
  ])
  .setAliasPlacements('cable', [
    { name: 'default', id: '5cdb208d39937800010e4673' },
  ])
  .setAliasPlacements('connectivity', [
    { name: 'default', id: '5cdb20a539937800010e4a97' },
  ]);

module.exports = config;
