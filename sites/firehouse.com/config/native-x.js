const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5b55eaa68c39e40001f51ea7' },
  ])
  .setAliasPlacements('leadership', [
    { name: 'default', id: '5b5758e15bbf91000134a2c8' },
  ])
  .setAliasPlacements('apparatus', [
    { name: 'default', id: '5b5758ed5bbf91000134a2c9' },
  ])
  .setAliasPlacements('rescue', [
    { name: 'default', id: '5b5758f85bbf91000134a2ca' },
  ])
  .setAliasPlacements('safety-health', [
    { name: 'default', id: '5b57590c5bbf91000134a2cc' },
  ])
  .setAliasPlacements('operations-training', [
    { name: 'default', id: '5b5759145bbf91000134a2cd' },
  ])
  .setAliasPlacements('careers-education', [
    { name: 'default', id: '5b57592707cd7000019c5fc4' },
  ])
  .setAliasPlacements('prevention-investigation', [
    { name: 'default', id: '5b57593207cd7000019c5fc5' },
  ])
  .setAliasPlacements('tech-comm', [
    { name: 'default', id: '5b57593f5bbf91000134a2d0' },
  ])
  .setAliasPlacements('stations', [
    { name: 'default', id: '5b57594c5bbf91000134a2d2' },
  ]);

module.exports = config;
