const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb1abb39937800010d4ba2' },
    { name: 'list2', id: '5cdb1ac039937800010d4ca7' },
    { name: 'list1', id: '5cdb1ac639937800010d4d9e' },
  ])
  .setAliasPlacements('infection-control', [
    { name: 'card', id: '5cdb1af8f41dfb0001fb9291' },
    { name: 'list2', id: '5cdb1afff41dfb0001fb93ed' },
    { name: 'list1', id: '5cdb1b0c39937800010d5b41' },
  ])
  .setAliasPlacements('ergonomics', [
    { name: 'card', id: '5cdb1ada39937800010d51a2' },
    { name: 'list2', id: '5cdb1ae539937800010d53f7' },
    { name: 'list1', id: '5cdb1aeef41dfb0001fb904c' },
  ])
  .setAliasPlacements('patient-care', [
    { name: 'card', id: '5cdb1b2e39937800010d625f' },
    { name: 'list2', id: '5cdb1b3af41dfb0001fb9fc5' },
    { name: 'list1', id: '5cdb1b5439937800010d6866' },
  ])
  .setAliasPlacements('pathology', [
    { name: 'card', id: '5cdb1b6e39937800010d6e01' },
    { name: 'list2', id: '5cdb1b81f41dfb0001fbad38' },
    { name: 'list1', id: '5cdb1b8a39937800010d7458' },
  ])
  .setAliasPlacements('career-profession', [
    { name: 'card', id: '5cdb1baaf41dfb0001fbb3e4' },
    { name: 'list2', id: '5cdb1bb139937800010d795a' },
    { name: 'list1', id: '5cdb1bb7f41dfb0001fbb606' },
  ]);

module.exports = config;
