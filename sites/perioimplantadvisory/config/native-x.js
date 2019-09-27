const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb1bd8f41dfb0001fbbc71' },
    { name: 'list2', id: '5cdb1bd8f41dfb0001fbbc71' },
    { name: 'list1', id: '5cdb1bd8f41dfb0001fbbc71' },
  ])
  .setAliasPlacements('restorative-dentistry', [
    { name: 'card', id: '5cdb1d0ef41dfb0001fbf04a' },
    { name: 'list2', id: '5cdb1d0ef41dfb0001fbf04a' },
    { name: 'list1', id: '5cdb1d0ef41dfb0001fbf04a' },
  ])
  .setAliasPlacements('practice-management', [
    { name: 'card', id: '5cdb1cf039937800010daeff' },
    { name: 'list2', id: '5cdb1cf039937800010daeff' },
    { name: 'list1', id: '5cdb1cf039937800010daeff' },
  ])
  .setAliasPlacements('clinical-tips', [
    { name: 'card', id: '5cdb1c98f41dfb0001fbdb01' },
    { name: 'list2', id: '5cdb1c98f41dfb0001fbdb01' },
    { name: 'list1', id: '5cdb1c98f41dfb0001fbdb01' },
  ])
  .setAliasPlacements('dental-implants', [
    { name: 'card', id: '5cdb1cb3f41dfb0001fbdff2' },
    { name: 'list2', id: '5cdb1cb3f41dfb0001fbdff2' },
    { name: 'list1', id: '5cdb1cb3f41dfb0001fbdff2' },
  ])
  .setAliasPlacements('periodontics', [
    { name: 'card', id: '5cdb1ccff41dfb0001fbe3de' },
    { name: 'list2', id: '5cdb1ccff41dfb0001fbe3de' },
    { name: 'list1', id: '5cdb1ccff41dfb0001fbe3de' },
  ]);

module.exports = config;
