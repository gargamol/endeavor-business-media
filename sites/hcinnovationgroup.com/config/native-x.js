const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5c803358eed7b70001809d69' },
  ])
  .setAliasPlacements('imaging', [
    { name: 'default', id: '5c8033a010dd9e000198684a' },
  ])
  .setAliasPlacements('clinical-it', [
    { name: 'default', id: '5c8033d3eed7b7000180b221' },
  ])
  .setAliasPlacements('interoperability-hie', [
    { name: 'default', id: '5c8033f6eed7b7000180b792' },
  ])
  .setAliasPlacements('finance-revenue-cycle', [
    { name: 'default', id: '5c803413eed7b7000180bc80' },
  ])
  .setAliasPlacements('cybersecurity', [
    { name: 'default', id: '5c80343510dd9e0001988105' },
  ])
  .setAliasPlacements('analytics-ai', [
    { name: 'default', id: '5c80346aeed7b7000180cb22' },
  ])
  .setAliasPlacements('population-health-management', [
    { name: 'default', id: '5c803489eed7b7000180d097' },
  ])
  .setAliasPlacements('policy-value-based-care', [
    { name: 'default', id: '5c8034aa10dd9e00019895b8' },
  ])
  .setAliasPlacements('summits', [
    { name: 'default', id: '5de1486c5ff3410001c63df0' },
  ]);

module.exports = config;
