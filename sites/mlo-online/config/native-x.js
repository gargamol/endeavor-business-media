const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5de0681b03b6d40001a83bda' },
  ])
  .setAliasPlacements('information-technology', [
    { name: 'default', id: '5cdb234939937800010eb292' },
  ])
  .setAliasPlacements('management', [
    { name: 'default', id: '5de068665ff341000173cc50' },
  ])
  .setAliasPlacements('disease', [
    { name: 'default', id: '5de0685c03b6d40001a8516b' },
  ])
  .setAliasPlacements('diagnostics', [
    { name: 'default', id: '5de0685203b6d40001a84e91' },
  ])
  .setAliasPlacements('information-technology', [
    { name: 'default', id: '5de0684403b6d40001a849d5' },
  ])
  .setAliasPlacements('molecular', [
    { name: 'default', id: '5de0682f03b6d40001a8435e' },
  ]);

module.exports = config;
