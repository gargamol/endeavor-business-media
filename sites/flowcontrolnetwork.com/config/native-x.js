const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5d9cee75cc0836000147f154' },
  ])
  .setAliasPlacements('instrumentation', [
    { name: 'default', id: '5d9ceeafcc08360001480602' },
  ])
  .setAliasPlacements('valves-actuators', [
    { name: 'default', id: '5d9cef2806c2650001d0ffb1' },
  ])
  .setAliasPlacements('bearings-seals', [
    { name: 'default', id: '5d9cef59cc08360001484adf' },
  ])
  .setAliasPlacements('piping-tubing-hosing', [
    { name: 'default', id: '5d9cf0a2cc0836000148d170' },
  ])
  .setAliasPlacements('process-control-automation', [
    { name: 'default', id: '5d9cf22dcc08360001496372' },
  ])
  .setAliasPlacements('pumps-motors-drives', [
    { name: 'default', id: '5d9cf27c06c2650001d24aed' },
  ])
  .setAliasPlacements('maintenance-safety', [
    { name: 'default', id: '5d9cf2a706c2650001d259f0' },
  ])
  .setAliasPlacements('industry-applications', [
    { name: 'default', id: '5d9c8124cc08360001194f5a' },
  ]);

module.exports = config;
