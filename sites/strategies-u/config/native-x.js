const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdc6f7bf41dfb00012645e4' },
    { name: 'list2', id: '5cdc6f7bf41dfb00012645e4' },
    { name: 'list1', id: '5cdc6f7bf41dfb00012645e4' },
  ])
  .setAliasPlacements('reports', [
    { name: 'card', id: '5cdc6f91399378000137df3c' },
    { name: 'list2', id: '5cdc6f91399378000137df3c' },
    { name: 'list1', id: '5cdc6f91399378000137df3c' },
  ])
  .setAliasPlacements('analysts', [
    { name: 'card', id: '5cdc6fb6399378000137e860' },
    { name: 'list2', id: '5cdc6fb6399378000137e860' },
    { name: 'list1', id: '5cdc6fb6399378000137e860' },
  ])
  .setAliasPlacements('blogs', [
    { name: 'card', id: '5cdc6fbff41dfb000126561d' },
    { name: 'list2', id: '5cdc6fbff41dfb000126561d' },
    { name: 'list1', id: '5cdc6fbff41dfb000126561d' },
  ])
  .setAliasPlacements('press-releases', [
    { name: 'card', id: '5cdc6fd6399378000137f17d' },
    { name: 'list2', id: '5cdc6fd6399378000137f17d' },
    { name: 'list1', id: '5cdc6fd6399378000137f17d' },
  ]);

module.exports = config;
