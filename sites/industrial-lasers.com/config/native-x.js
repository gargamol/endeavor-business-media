const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb1d3139937800010dba60' },
  ])
  .setAliasPlacements('cutting', [
    { name: 'default', id: '5cdb1d4939937800010dbe69' },
  ])
  .setAliasPlacements('welding', [
    { name: 'default', id: '5cdb1d5f39937800010dc25c' },
  ])
  .setAliasPlacements('micromachining', [
    { name: 'default', id: '5cdb1d7539937800010dc661' },
  ])
  .setAliasPlacements('marking-engraving', [
    { name: 'default', id: '5cdb1d8ef41dfb0001fc07fe' },
  ])
  .setAliasPlacements('surface-treatment', [
    { name: 'default', id: '5cdb1da539937800010dcf55' },
  ])
  .setAliasPlacements('additive-manufacturing', [
    { name: 'default', id: '5cdb1dc2f41dfb0001fc112f' },
  ])
  .setAliasPlacements('drilling', [
    { name: 'default', id: '5cdb1e71f41dfb0001fc2e73' },
  ]);

module.exports = config;
