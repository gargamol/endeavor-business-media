const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5db0533cc99ad20001ee7523' },
  ])
  .setAliasPlacements('/attachments', [
    { name: 'default', id: '5db053e5c99ad20001eea92e' },
  ])
  .setAliasPlacements('/equipment', [
    { name: 'default', id: '5db053f3c99ad20001eead70' },
  ])
  .setAliasPlacements('/maintenance', [
    { name: 'default', id: '5db053fe3204b10001f6fe5d' },
  ])
  .setAliasPlacements('/technology', [
    { name: 'default', id: '5db0540ac99ad20001eeb566' },
  ])
  .setAliasPlacements('/training-safety', [
    { name: 'default', id: '5db0541bc99ad20001eebada' },
  ])
  .setAliasPlacements('/trenching-shoring', [
    { name: 'default', id: '5db05428c99ad20001eebecc' },
  ])
  .setAliasPlacements('/site-clearing', [
    { name: 'default', id: '5db054323204b10001f70e37' },
  ])
  .setAliasPlacements('/work-site-support-equipment', [
    { name: 'default', id: '5db0543f3204b10001f7115e' },
  ])
  .setAliasPlacements('/road-building-and-compaction', [
    { name: 'default', id: '5db05448c99ad20001eec7a2' },
  ])
  .setAliasPlacements('/dump-trucks', [
    { name: 'default', id: '5db05454c99ad20001eecaf4' },
  ])
  .setAliasPlacements('/trailers', [
    { name: 'default', id: '5db0545f3204b10001f71b71' },
  ]);

module.exports = config;
