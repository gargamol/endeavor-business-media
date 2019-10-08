const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5d9c7feacc0836000118e88b' },
  ])
  .setAliasPlacements('maintenance-safety', [
    { name: 'default', id: '5d9c811a06c2650001a22577' },
  ])
  .setAliasPlacements('material-handling-dry-wet', [
    { name: 'default', id: '5d9c8124cc08360001194f5a' },
  ])
  .setAliasPlacements('mixing-blending-size-reduction', [
    { name: 'default', id: '5d9c8135cc0836000119550f' },
  ])
  .setAliasPlacements('process-control-automation', [
    { name: 'default', id: '5d9c8140cc08360001195844' },
  ])
  .setAliasPlacements('pumps-motors-drives', [
    { name: 'default', id: '5d9c814e06c2650001a2358b' },
  ])
  .setAliasPlacements('valves-actuators', [
    { name: 'default', id: '5d9c8158cc083600011960f8' },
  ]);

module.exports = config;
