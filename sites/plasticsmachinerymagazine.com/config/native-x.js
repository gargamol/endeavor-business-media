const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cae78baaa89740001456f08' },
  ])
  .setAliasPlacements('additive-manufacturing', [
    { name: 'default', id: '5cae79f437b0b90001eb450e' },
  ])
  .setAliasPlacements('blow-molding', [
    { name: 'default', id: '5cae79d537b0b90001eb4288' },
  ])
  .setAliasPlacements('thermoforming', [
    { name: 'default', id: '5cae79b737b0b90001eb3fd6' },
  ])
  .setAliasPlacements('compounding', [
    { name: 'default', id: '5cae799837b0b90001eb3cce' },
  ])
  .setAliasPlacements('injection-molding', [
    { name: 'default', id: '5cae7977aa897400014583ff' },
  ])
  .setAliasPlacements('extrusion', [
    { name: 'default', id: '5cae794137b0b90001eb3399' },
  ])
  .setAliasPlacements('recycling', [
    { name: 'default', id: '5cae7923aa89740001457b5b' },
  ])
  .setAliasPlacements('molds-tooling', [
    { name: 'default', id: '5cae7902aa89740001457776' },
  ])
  .setAliasPlacements('rotomolding', [
    { name: 'default', id: '5cae78d6aa89740001457249' },
  ]);

module.exports = config;
