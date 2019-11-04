const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb1bd8f41dfb0001fbbc71' },
  ])
  .setAliasPlacements('restorative-dentistry', [
    { name: 'default', id: '5cdb1d0ef41dfb0001fbf04a' },
  ])
  .setAliasPlacements('practice-management', [
    { name: 'default', id: '5cdb1cf039937800010daeff' },
  ])
  .setAliasPlacements('clinical-tips', [
    { name: 'default', id: '5cdb1c98f41dfb0001fbdb01' },
  ])
  .setAliasPlacements('dental-implants', [
    { name: 'default', id: '5cdb1cb3f41dfb0001fbdff2' },
  ])
  .setAliasPlacements('periodontics', [
    { name: 'default', id: '5cdb1ccff41dfb0001fbe3de' },
  ]);

module.exports = config;
