const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5b55eae504bce800019807fd' },
  ])
  .setAliasPlacements('tactical', [
    { name: 'default', id: '5b57589407cd7000019c5fbb' },
  ])
  .setAliasPlacements('training-careers', [
    { name: 'default', id: '5b5758a35bbf91000134a2c4' },
  ])
  .setAliasPlacements('on-the-street', [
    { name: 'default', id: '5b5758b107cd7000019c5fbd' },
  ])
  .setAliasPlacements('investigations', [
    { name: 'default', id: '5b5758bf5bbf91000134a2c5' },
  ])
  .setAliasPlacements('command-hq', [
    { name: 'default', id: '5b5758cf07cd7000019c5fbf' },
  ]);

module.exports = config;
