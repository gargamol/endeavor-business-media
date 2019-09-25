const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'card', id: '5cdc101bf41dfb000116a891' },
    { name: 'list2', id: '5cdc101bf41dfb000116a891' },
    { name: 'list1', id: '5cdc101bf41dfb000116a891' },
  ])
  .setAliasPlacements('computers', [
    { name: 'card', id: '5cdc10513993780001286982' },
    { name: 'list2', id: '5cdc10513993780001286982' },
    { name: 'list1', id: '5cdc10513993780001286982' },
  ])
  .setAliasPlacements('sensors', [
    { name: 'card', id: '5cdc10a939937800012874cb' },
    { name: 'list2', id: '5cdc10a939937800012874cb' },
    { name: 'list1', id: '5cdc10a939937800012874cb' },
  ])
  .setAliasPlacements('rf-analog', [
    { name: 'card', id: '5cdc10ebf41dfb000116c442' },
    { name: 'list2', id: '5cdc10ebf41dfb000116c442' },
    { name: 'list1', id: '5cdc10ebf41dfb000116c442' },
  ])
  .setAliasPlacements('power', [
    { name: 'card', id: '5cdc111e3993780001288407' },
    { name: 'list2', id: '5cdc111e3993780001288407' },
    { name: 'list1', id: '5cdc111e3993780001288407' },
  ])
  .setAliasPlacements('trusted-computing', [
    { name: 'card', id: '5cdc106cf41dfb000116b301' },
    { name: 'list2', id: '5cdc106cf41dfb000116b301' },
    { name: 'list1', id: '5cdc106cf41dfb000116b301' },
  ])
  .setAliasPlacements('communications', [
    { name: 'card', id: '5cdc113b3993780001288787' },
    { name: 'list2', id: '5cdc113b3993780001288787' },
    { name: 'list1', id: '5cdc113b3993780001288787' },
  ])
  .setAliasPlacements('unmanned', [
    { name: 'card', id: '5cdc1089399378000128709a' },
    { name: 'list2', id: '5cdc1089399378000128709a' },
    { name: 'list1', id: '5cdc1089399378000128709a' },
  ])
  .setAliasPlacements('test', [
    { name: 'card', id: '5cdc11673993780001288cd7' },
    { name: 'list2', id: '5cdc11673993780001288cd7' },
    { name: 'list1', id: '5cdc11673993780001288cd7' },
  ]);

module.exports = config;
