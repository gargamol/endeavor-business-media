const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://ebm.native-x.io');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5c73f25f4eb6670001913402' },
  ])
  .setAliasPlacements('tax-compliance', [
    { name: 'default', id: '5c73f2b84eb6670001913c76' },
  ])
  .setAliasPlacements('accounting-audit', [
    { name: 'default', id: '5c73f3c04eb6670001915867' },
  ])
  .setAliasPlacements('firm-management', [
    { name: 'default', id: '5c73f395b0a527000131b037' },
  ])
  .setAliasPlacements('payroll', [
    { name: 'default', id: '5c73f2f0b0a5270001319e6f' },
  ])
  .setAliasPlacements('small-business', [
    { name: 'default', id: '5c73f2d7b0a5270001319bdd' },
  ])
  .setAliasPlacements('reviews', [
    { name: 'default', id: '5c73f28b4eb66700019138b2' },
  ]);

module.exports = config;
