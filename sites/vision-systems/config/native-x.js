const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdc1185f41dfb000116d8c0' },
    { name: 'list2', id: '5cdc1185f41dfb000116d8c0' },
    { name: 'list1', id: '5cdc1185f41dfb000116d8c0' },
  ])
  .setAliasPlacements('unmanned', [
    { name: 'card', id: '5cdc1251f41dfb000116f4d6' },
    { name: 'list2', id: '5cdc1251f41dfb000116f4d6' },
    { name: 'list1', id: '5cdc1251f41dfb000116f4d6' },
  ])
  .setAliasPlacements('lighting-optics', [
    { name: 'card', id: '5cdc11eb3993780001289ed2' },
    { name: 'list2', id: '5cdc11eb3993780001289ed2' },
    { name: 'list1', id: '5cdc11eb3993780001289ed2' },
  ])
  .setAliasPlacements('factory', [
    { name: 'card', id: '5cdc11a6399378000128956c' },
    { name: 'list2', id: '5cdc11a6399378000128956c' },
    { name: 'list1', id: '5cdc11a6399378000128956c' },
  ])
  .setAliasPlacements('embedded', [
    { name: 'card', id: '5cdc123af41dfb000116f0a6' },
    { name: 'list2', id: '5cdc123af41dfb000116f0a6' },
    { name: 'list1', id: '5cdc123af41dfb000116f0a6' },
  ])
  .setAliasPlacements('non-factory', [
    { name: 'card', id: '5cdc11bd3993780001289935' },
    { name: 'list2', id: '5cdc11bd3993780001289935' },
    { name: 'list1', id: '5cdc11bd3993780001289935' },
  ])
  .setAliasPlacements('cameras-accessories', [
    { name: 'card', id: '5cdc11d43993780001289c2b' },
    { name: 'list2', id: '5cdc11d43993780001289c2b' },
    { name: 'list1', id: '5cdc11d43993780001289c2b' },
  ])
  .setAliasPlacements('boards-software', [
    { name: 'card', id: '5cdc1224399378000128a64e' },
    { name: 'list2', id: '5cdc1224399378000128a64e' },
    { name: 'list1', id: '5cdc1224399378000128a64e' },
  ])
  .setAliasPlacements('3d-imaging', [
    { name: 'card', id: '5cdc120d399378000128a400' },
    { name: 'list2', id: '5cdc120d399378000128a400' },
    { name: 'list1', id: '5cdc120d399378000128a400' },
  ]);

module.exports = config;
