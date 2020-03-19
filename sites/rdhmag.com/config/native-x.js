const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb1abb39937800010d4ba2' },
  ])
  .setAliasPlacements('infection-control', [
    { name: 'default', id: '5cdb1af8f41dfb0001fb9291' },
  ])
  .setAliasPlacements('ergonomics', [
    { name: 'default', id: '5cdb1ada39937800010d51a2' },
  ])
  .setAliasPlacements('patient-care', [
    { name: 'default', id: '5cdb1b2e39937800010d625f' },
  ])
  .setAliasPlacements('pathology', [
    { name: 'default', id: '5cdb1b6e39937800010d6e01' },
  ])
  .setAliasPlacements('career-profession', [
    { name: 'default', id: '5cdb1baaf41dfb0001fbb3e4' },
  ]);

module.exports = config;
