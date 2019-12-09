const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cdb1903f41dfb0001fb2ea7' },
  ])
  .setAliasPlacements('technologies', [
    { name: 'default', id: '5cdb16baf41dfb0001fac272' },
  ])
  .setAliasPlacements('drinking-water', [
    { name: 'default', id: '5dbc58862480f80001621418' },
  ])
  .setAliasPlacements('wastewater', [
    { name: 'default', id: '5dbc586f8eb88b0001a1d457' },
  ])
  .setAliasPlacements('water-utility-management', [
    { name: 'default', id: '5dbc58562480f8000161fff8' },
  ])
  .setAliasPlacements('environmental', [
    { name: 'default', id: '5dbc582d8eb88b0001a1bb68' },
  ])
  .setAliasPlacements('urban-stormwater', [
    { name: 'default', id: '5dbc58188eb88b0001a1b408' },
  ])
  .setAliasPlacements('international', [
    { name: 'default', id: '5cdb16fe39937800010c96d0' },
  ]);

module.exports = config;
