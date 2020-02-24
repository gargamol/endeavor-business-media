const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5c3ca7bb93865500013635d9' },
  ])
  .setAliasPlacements('aircraft', [
    { name: 'default', id: '5c3caafd9386550001366e90' },
  ])
  .setAliasPlacements('engines-components', [
    { name: 'default', id: '5c3ca9dd0af48a0001ddc45b' },
  ])
  .setAliasPlacements('tools-equipment', [
    { name: 'default', id: '5c3ca8070af48a0001dda258' },
  ])
  .setAliasPlacements('education-training', [
    { name: 'default', id: '5c3caa060af48a0001ddc6d8' },
  ])
  .setAliasPlacements('airports', [
    { name: 'default', id: '5c3caaa99386550001366902' },
  ])
  .setAliasPlacements('aviation-security', [
    { name: 'default', id: '5c3caa230af48a0001ddc936' },
  ])
  .setAliasPlacements('aoa', [
    { name: 'default', id: '5c3caa7893865500013665dd' },
  ])
  .setAliasPlacements('fbos-tenants', [
    { name: 'default', id: '5c3ca99d0af48a0001ddbf14' },
  ])
  .setAliasPlacements('airlines', [
    { name: 'default', id: '5c3caad60af48a0001ddd4a8' },
  ])
  .setAliasPlacements('ground-handling', [
    { name: 'default', id: '5c3ca89c0af48a0001ddad7f' },
  ])
  .setAliasPlacements('gse', [
    { name: 'default', id: '5c3ca8560af48a0001dda889' },
  ]);

module.exports = config;
