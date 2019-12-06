const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb1f5af41dfb0001fc53ef' },
  ])
  .setAliasPlacements('docsis', [
    { name: 'default', id: '5cdb1f7e39937800010e1a74' },
  ])
  .setAliasPlacements('wireless', [
    { name: 'default', id: '5cdb1fbef41dfb0001fc6463' },
  ])
  .setAliasPlacements('back-office', [
    { name: 'default', id: '5cdb200539937800010e2f57' },
  ])
  .setAliasPlacements('in-the-home', [
    { name: 'default', id: '5cdb1fa939937800010e2259' },
  ])
  .setAliasPlacements('test', [
    { name: 'default', id: '5cdb201939937800010e32c2' },
  ])
  .setAliasPlacements('fiber', [
    { name: 'default', id: '5cdb1f93f41dfb0001fc5d1d' },
  ])
  .setAliasPlacements('video', [
    { name: 'default', id: '5cdb1fd339937800010e282a' },
  ])
  .setAliasPlacements('business-services', [
    { name: 'default', id: '5cdb1fee39937800010e2c07' },
  ]);

module.exports = config;
