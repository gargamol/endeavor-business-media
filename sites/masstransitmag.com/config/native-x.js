const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5c0e7fbecf399b00017a7f9f' },
  ])
  .setAliasPlacements('bus', [
    { name: 'default', id: '5c0e81bb84c2cd0001488048' },
  ])
  .setAliasPlacements('rail', [
    { name: 'default', id: '5c0e8179cf399b00017a9cfd' },
  ])
  .setAliasPlacements('technology', [
    { name: 'default', id: '5c0e813484c2cd000148753a' },
  ])
  .setAliasPlacements('safety-security', [
    { name: 'default', id: '5c0e815984c2cd0001487828' },
  ])
  .setAliasPlacements('management', [
    { name: 'default', id: '5e173eae90e40e0001cc47ae' },
  ])
  .setAliasPlacements('alt-mobility', [
    { name: 'default', id: '5c0e819ccf399b00017aa059' },
  ]);

module.exports = config;
