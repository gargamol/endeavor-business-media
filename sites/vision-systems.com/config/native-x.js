const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdc1185f41dfb000116d8c0' },
  ])
  .setAliasPlacements('unmanned', [
    { name: 'default', id: '5cdc1251f41dfb000116f4d6' },
  ])
  .setAliasPlacements('lighting-optics', [
    { name: 'default', id: '5cdc11eb3993780001289ed2' },
  ])
  .setAliasPlacements('factory', [
    { name: 'default', id: '5cdc11a6399378000128956c' },
  ])
  .setAliasPlacements('embedded', [
    { name: 'default', id: '5cdc123af41dfb000116f0a6' },
  ])
  .setAliasPlacements('non-factory', [
    { name: 'default', id: '5cdc11bd3993780001289935' },
  ])
  .setAliasPlacements('cameras-accessories', [
    { name: 'default', id: '5cdc11d43993780001289c2b' },
  ])
  .setAliasPlacements('boards-software', [
    { name: 'default', id: '5cdc1224399378000128a64e' },
  ])
  .setAliasPlacements('3d-imaging', [
    { name: 'default', id: '5cdc120d399378000128a400' },
  ]);

module.exports = config;
