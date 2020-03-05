const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5b55ea8304bce80001980611' },
  ])
  .setAliasPlacements('in-the-bay', [
    { name: 'default', id: '5b57584b07cd7000019c5fb4' },
  ])
  .setAliasPlacements('shop-operations', [
    { name: 'default', id: '5b57585b07cd7000019c5fb6' },
  ])
  .setAliasPlacements('vehicles', [
    { name: 'default', id: '5b57583b07cd7000019c5fb3' },
  ])
  .setAliasPlacements('distributors', [
    { name: 'default', id: '5b57586e07cd7000019c5fb8' },
  ])
  .setAliasPlacements('industry-news', [
    { name: 'default', id: '5b57587e5bbf91000134a2c2' },
  ]);

module.exports = config;
