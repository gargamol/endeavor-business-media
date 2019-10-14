const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdc6f7bf41dfb00012645e4' },
  ])
  .setAliasPlacements('reports', [
    { name: 'default', id: '5cdc6f91399378000137df3c' },
  ])
  .setAliasPlacements('analysts', [
    { name: 'default', id: '5cdc6fb6399378000137e860' },
  ])
  .setAliasPlacements('blogs', [
    { name: 'default', id: '5cdc6fbff41dfb000126561d' },
  ])
  .setAliasPlacements('press-releases', [
    { name: 'default', id: '5cdc6fd6399378000137f17d' },
  ]);

module.exports = config;
