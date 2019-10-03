const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb1f5af41dfb0001fc53ef' },
    { name: 'list2', id: '5cdb1f5af41dfb0001fc53ef' },
    { name: 'list1', id: '5cdb1f5af41dfb0001fc53ef' },
  ])
  .setAliasPlacements('docsis', [
    { name: 'card', id: '5cdb1f7e39937800010e1a74' },
    { name: 'list2', id: '5cdb1f7e39937800010e1a74' },
    { name: 'list1', id: '5cdb1f7e39937800010e1a74' },
  ])
  .setAliasPlacements('wireless', [
    { name: 'card', id: '5cdb1fbef41dfb0001fc6463' },
    { name: 'list2', id: '5cdb1fbef41dfb0001fc6463' },
    { name: 'list1', id: '5cdb1fbef41dfb0001fc6463' },
  ])
  .setAliasPlacements('back-office', [
    { name: 'card', id: '5cdb200539937800010e2f57' },
    { name: 'list2', id: '5cdb200539937800010e2f57' },
    { name: 'list1', id: '5cdb200539937800010e2f57' },
  ])
  .setAliasPlacements('in-the-home', [
    { name: 'card', id: '5cdb1fa939937800010e2259' },
    { name: 'list2', id: '5cdb1fa939937800010e2259' },
    { name: 'list1', id: '5cdb1fa939937800010e2259' },
  ])
  .setAliasPlacements('test', [
    { name: 'card', id: '5cdb201939937800010e32c2' },
    { name: 'list2', id: '5cdb201939937800010e32c2' },
    { name: 'list1', id: '5cdb201939937800010e32c2' },
  ])
  .setAliasPlacements('fiber', [
    { name: 'card', id: '5cdb1f93f41dfb0001fc5d1d' },
    { name: 'list2', id: '5cdb1f93f41dfb0001fc5d1d' },
    { name: 'list1', id: '5cdb1f93f41dfb0001fc5d1d' },
  ])
  .setAliasPlacements('video', [
    { name: 'card', id: '5cdb1fd339937800010e282a' },
    { name: 'list2', id: '5cdb1fd339937800010e282a' },
    { name: 'list1', id: '5cdb1fd339937800010e282a' },
  ])
  .setAliasPlacements('business-services', [
    { name: 'card', id: '5cdb1fee39937800010e2c07' },
    { name: 'list2', id: '5cdb1fee39937800010e2c07' },
    { name: 'list1', id: '5cdb1fee39937800010e2c07' },
  ]);

module.exports = config;
