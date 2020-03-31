const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5d96036066f22a000172bd75' },
  ])
  .setAliasPlacements('process-water', [
    { name: 'default', id: '5d960375da2aa1000117e542' },
  ])
  .setAliasPlacements('wastewater', [
    { name: 'default', id: '5d9608c866f22a0001753b1d' },
  ])
  .setAliasPlacements('water-reuse', [
    { name: 'default', id: '5d9608d4da2aa100011a5f26' },
  ])
  .setAliasPlacements('produced-water', [
    { name: 'default', id: '5d9608e0da2aa100011a6543' },
  ])
  .setAliasPlacements('industry', [
    { name: 'default', id: '5d9608ef66f22a0001754d41' },
  ]);

module.exports = config;
