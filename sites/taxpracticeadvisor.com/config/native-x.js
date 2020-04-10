const configureNativeX = require('@endeavor-business-media/package-shared/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '5e90d301bb6fae00018ee8b7' },
  ]);

module.exports = config;
