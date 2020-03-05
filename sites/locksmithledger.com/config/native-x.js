const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5c73f9804eb667000191f8e4' },
  ])
  .setAliasPlacements('alarms-video', [
    { name: 'default', id: '5c73fa734eb6670001921a18' },
  ])
  .setAliasPlacements('door-hardware', [
    { name: 'default', id: '5c73fa544eb6670001921598' },
  ])
  .setAliasPlacements('keys-tools', [
    { name: 'default', id: '5c73fa34b0a5270001326cca' },
  ])
  .setAliasPlacements('locks', [
    { name: 'default', id: '5c73fa0cb0a52700013267ae' },
  ])
  .setAliasPlacements('electronics-access-control', [
    { name: 'default', id: '5c73f9e6b0a52700013262a1' },
  ])
  .setAliasPlacements('safes', [
    { name: 'default', id: '5c73f9c54eb6670001920239' },
  ])
  .setAliasPlacements('distributors', [
    { name: 'default', id: '5c73f99b4eb667000191fbec' },
  ]);

module.exports = config;
