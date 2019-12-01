const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5de32e3303b6d40001a18010' },
  ])
  .setAliasPlacements('sourcing-logistics', [
    { name: 'default', id: '5de32e4c5ff34100016d1c21' },
  ])
  .setAliasPlacements('sterile-processing', [
    { name: 'default', id: '5de32e5d5ff34100016d227e' },
  ])
  .setAliasPlacements('surgical-critical-care', [
    { name: 'default', id: '5de32e6c03b6d40001a19479' },
  ])
  .setAliasPlacements('patient-satisfaction', [
    { name: 'default', id: '5de32e7d5ff34100016d300f' },
  ])
  .setAliasPlacements('infection-prevention', [
    { name: 'default', id: '5de32e9603b6d40001a1a474' },
  ])
  .setAliasPlacements('evs-facility-services', [
    { name: 'default', id: '5de32eac03b6d40001a1ada4' },
  ])
  .setAliasPlacements('healthcare-it', [
    { name: 'default', id: '5de32ebb03b6d40001a1b434' },
  ])
  .setAliasPlacements('regulatory', [
    { name: 'default', id: '5de32ecb5ff34100016d4dd1' },
  ]);

module.exports = config;
