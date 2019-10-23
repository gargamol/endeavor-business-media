const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5db0598dc99ad20001f09417' },
  ])
  .setAliasPlacements('collection', [
    { name: 'default', id: '5db059c83204b10001f8f873' },
  ])
  .setAliasPlacements('landfills', [
    { name: 'default', id: '5db059b6c99ad20001f0a538' },
  ])
  .setAliasPlacements('maintenance', [
    { name: 'default', id: '5db059acc99ad20001f0a101' },
  ])
  .setAliasPlacements('recycling', [
    { name: 'default', id: '5db059a13204b10001f8e855' },
  ])
  .setAliasPlacements('technology', [
    { name: 'default', id: '5db05997c99ad20001f09767' },
  ]);

module.exports = config;
