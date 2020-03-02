const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb192639937800010cfcca' },
  ])
  .setAliasPlacements('practice', [
    { name: 'default', id: '5cdb1959f41dfb0001fb3e06' },
  ])
  .setAliasPlacements('macro-op-ed', [
    { name: 'default', id: '5cdb193c39937800010d00d9' },
  ])
  .setAliasPlacements('science-tech', [
    { name: 'default', id: '5cdb1974f41dfb0001fb42de' },
  ])
  .setAliasPlacements('money', [
    { name: 'default', id: '5cdb198c39937800010d0f7b' },
  ])
  .setAliasPlacements('dental-office-design', [
    { name: 'default', id: '5cdb19aaf41dfb0001fb4d52' },
  ]);

module.exports = config;
