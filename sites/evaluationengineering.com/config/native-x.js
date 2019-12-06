const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5cae5c99aa89740001428292' },
  ])
  .setAliasPlacements('instrumentation', [
    { name: 'default', id: '5cae5d95aa8974000142a014' },
  ])
  .setAliasPlacements('test-issues-techniques', [
    { name: 'default', id: '5cae5cd6aa89740001428844' },
  ])
  .setAliasPlacements('industries', [
    { name: 'default', id: '5cae5ddaaa8974000142a78d' },
  ])
  .setAliasPlacements('applications', [
    { name: 'default', id: '5cae5e24aa8974000142b273' },
  ])
  .setAliasPlacements('instrumentation', [
    { name: 'default', id: '5cae5d95aa8974000142a014' },
  ])
  .setAliasPlacements('instrumentation', [
    { name: 'default', id: '5cae5d95aa8974000142a014' },
  ]);

module.exports = config;
