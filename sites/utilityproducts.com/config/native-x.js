const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cd44bb5f41dfb0001350efe' },
  ])
  .setAliasPlacements('test-measurement', [
    { name: 'default', id: '5cdb168c39937800010c8203' },
  ])
  .setAliasPlacements('transmission-distribution', [
    { name: 'default', id: '5cdb166bf41dfb0001fab34b' },
  ])
  .setAliasPlacements('tools-supplies', [
    { name: 'default', id: '5cdb1635f41dfb0001faaa6e' },
  ])
  .setAliasPlacements('safety', [
    { name: 'default', id: '5cdb164c39937800010c76ef' },
  ])
  .setAliasPlacements('vehicles-accessories', [
    { name: 'default', id: '5cdb15ebf41dfb0001fa9cba' },
  ]);

module.exports = config;
