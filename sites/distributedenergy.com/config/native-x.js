const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5db057843204b10001f8283b' },
  ])
  .setAliasPlacements('microgrids', [
    { name: 'default', id: '5db05794c99ad20001efe300' },
  ])
  .setAliasPlacements('renewables', [
    { name: 'default', id: '5db057a03204b10001f83326' },
  ])
  .setAliasPlacements('storage', [
    { name: 'default', id: '5db057b0c99ad20001efeb84' },
  ])
  .setAliasPlacements('building-automation', [
    { name: 'default', id: '5db057bb3204b10001f83b19' },
  ])
  .setAliasPlacements('technologies', [
    { name: 'default', id: '5db057c73204b10001f83ed8' },
  ]);

module.exports = config;
