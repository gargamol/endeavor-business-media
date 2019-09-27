const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdb192639937800010cfcca' },
    { name: 'list2', id: '5cdb192b39937800010cfdf3' },
    { name: 'list1', id: '5cdb1931f41dfb0001fb3771' },
  ])
  .setAliasPlacements('practice', [
    { name: 'card', id: '5cdb1959f41dfb0001fb3e06' },
    { name: 'list2', id: '5cdb1961f41dfb0001fb3f56' },
    { name: 'list1', id: '5cdb196939937800010d0868' },
  ])
  .setAliasPlacements('macro-op-ed', [
    { name: 'card', id: '5cdb193c39937800010d00d9' },
    { name: 'list2', id: '5cdb1942f41dfb0001fb3a86' },
    { name: 'list1', id: '5cdb194a39937800010d0323' },
  ])
  .setAliasPlacements('science-tech', [
    { name: 'card', id: '5cdb1974f41dfb0001fb42de' },
    { name: 'list2', id: '5cdb197bf41dfb0001fb4472' },
    { name: 'list1', id: '5cdb1982f41dfb0001fb4603' },
  ])
  .setAliasPlacements('money', [
    { name: 'card', id: '5cdb198c39937800010d0f7b' },
    { name: 'list2', id: '5cdb199339937800010d10c5' },
    { name: 'list1', id: '5cdb199bf41dfb0001fb4b06' },
  ])
  .setAliasPlacements('dental-office-design', [
    { name: 'card', id: '5cdb19aaf41dfb0001fb4d52' },
    { name: 'list2', id: '5cdb19b339937800010d15e5' },
    { name: 'list1', id: '5cdb19bcf41dfb0001fb506d' },
  ]);

module.exports = config;
