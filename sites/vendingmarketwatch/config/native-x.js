const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5c0e865fcf399b00017aeae9' },
  ])
  .setAliasPlacements('beverage', [
    { name: 'default', id: '5c0e8768cf399b00017afed7' },
  ])
  .setAliasPlacements('coffee-service', [
    { name: 'default', id: '5c0e874acf399b00017afcd7' },
  ])
  .setAliasPlacements('equipment', [
    { name: 'default', id: '5c0e872d84c2cd000148d879' },
  ])
  .setAliasPlacements('healthy-convenience', [
    { name: 'default', id: '5c0e870484c2cd000148d600' },
  ])
  .setAliasPlacements('management', [
    { name: 'default', id: '5c0e86e2cf399b00017af5bc' },
  ])
  .setAliasPlacements('micro-market', [
    { name: 'default', id: '5c0e86c484c2cd000148d0f2' },
  ])
  .setAliasPlacements('products', [
    { name: 'default', id: '5c0e8699cf399b00017aeeca' },
  ])
  .setAliasPlacements('technology', [
    { name: 'default', id: '5c0e867684c2cd000148ca23' },
  ]);

module.exports = config;
