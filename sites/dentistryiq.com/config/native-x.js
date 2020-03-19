const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb19ca39937800010d19fc' },
  ])
  .setAliasPlacements('clinical', [
    { name: 'default', id: '5cdb1a1af41dfb0001fb636a' },
  ])
  .setAliasPlacements('dental-assisting', [
    { name: 'default', id: '5cdb1a9139937800010d416f' },
  ])
  .setAliasPlacements('dental-hygiene', [
    { name: 'default', id: '5cdb19f1f41dfb0001fb5bb5' },
  ])
  .setAliasPlacements('practice-management', [
    { name: 'default', id: '5cdb1a5439937800010d35e3' },
  ])
  .setAliasPlacements('products', [
    { name: 'default', id: '5cdb1a33f41dfb0001fb69d6' },
  ])
  .setAliasPlacements('front-office', [
    { name: 'default', id: '5cdb1a7339937800010d3c98' },
  ]);

module.exports = config;
