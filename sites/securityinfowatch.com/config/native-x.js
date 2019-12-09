const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5c0e7695cf399b000179ee97' },
  ])
  .setAliasPlacements('security-executives', [
    { name: 'default', id: '5c0e76c8cf399b000179f1f4' },
  ])
  .setAliasPlacements('integrators', [
    { name: 'default', id: '5c0e76f484c2cd000147d261' },
  ])
  .setAliasPlacements('video-surveillance', [
    { name: 'default', id: '5c0e7724cf399b000179f750' },
  ])
  .setAliasPlacements('access-identity', [
    { name: 'default', id: '5c0e774a84c2cd000147d79a' },
  ])
  .setAliasPlacements('residential-technologies', [
    { name: 'default', id: '5c0e776a84c2cd000147d9a7' },
  ])
  .setAliasPlacements('alarms-monitoring', [
    { name: 'default', id: '5c0e7794cf399b000179fe68' },
  ])
  .setAliasPlacements('cybersecurity', [
    { name: 'default', id: '5c0e77b584c2cd000147de60' },
  ])
  .setAliasPlacements('perimeter-security', [
    { name: 'default', id: '5c0e77dd84c2cd000147e0ee' },
  ]);

module.exports = config;
