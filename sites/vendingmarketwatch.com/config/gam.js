const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'VendingMarketWatch' });

config
  .setTemplate('LB1', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('LB2', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50]] },
    ],
  })
  .setTemplate('MS', { size: [300, 50] })
  .setTemplate('RAIL1', { size: [300, 250] })
  .setTemplate('RAIL2', { size: [300, 600] })
  .setTemplate('LM', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('beverage', [
    { name: 'lb1', templateName: 'LB1', path: 'beverage/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'beverage/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'beverage/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'beverage/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'beverage/load-more' },
    { name: 'reskin', path: 'beverage/reskin' },
    { name: 'wa', path: 'beverage/wa' },
  ])
  .setAliasAdUnits('coffee-service', [
    { name: 'lb1', templateName: 'LB1', path: 'coffee-service/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'coffee-service/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'coffee-service/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'coffee-service/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'coffee-service/load-more' },
    { name: 'reskin', path: 'coffee-service/reskin' },
    { name: 'wa', path: 'coffee-service/wa' },
  ])
  .setAliasAdUnits('technology', [
    { name: 'lb1', templateName: 'LB1', path: 'technology/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'technology/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'technology/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'technology/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'technology/load-more' },
    { name: 'reskin', path: 'technology/reskin' },
    { name: 'wa', path: 'technology/wa' },
  ])
  .setAliasAdUnits('equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'equipment/load-more' },
    { name: 'reskin', path: 'equipment/reskin' },
    { name: 'wa', path: 'equipment/wa' },
  ])
  .setAliasAdUnits('healthy-convenience', [
    { name: 'lb1', templateName: 'LB1', path: 'healthy-convenience/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'healthy-convenience/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'healthy-convenience/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'healthy-convenience/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'healthy-convenience/load-more' },
    { name: 'reskin', path: 'healthy-convenience/reskin' },
    { name: 'wa', path: 'healthy-convenience/wa' },
  ])
  .setAliasAdUnits('management', [
    { name: 'lb1', templateName: 'LB1', path: 'management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'management/load-more' },
    { name: 'reskin', path: 'management/reskin' },
    { name: 'wa', path: 'management/wa' },
  ])
  .setAliasAdUnits('micro-market', [
    { name: 'lb1', templateName: 'LB1', path: 'micro-market/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'micro-market/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'micro-market/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'micro-market/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'micro-market/load-more' },
    { name: 'reskin', path: 'micro-market/reskin' },
    { name: 'wa', path: 'micro-market/wa' },
  ])
  .setAliasAdUnits('products', [
    { name: 'lb1', templateName: 'LB1', path: 'products/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'products/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'products/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'products/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'products/load-more' },
    { name: 'reskin', path: 'products/reskin' },
    { name: 'wa', path: 'products/wa' },
  ])
  .setAliasAdUnits('365-retail-markets', [
    { name: 'lb1', templateName: 'LB1', path: '365-retail-markets/lb1' },
    { name: 'lb2', templateName: 'LB2', path: '365-retail-markets/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: '365-retail-markets/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: '365-retail-markets/rail2' },
    { name: 'load-more', templateName: 'LM', path: '365-retail-markets/load-more' },
    { name: 'reskin', path: '365-retail-markets/reskin' },
    { name: 'wa', path: '365-retail-markets/wa' },
  ])
  .setAliasAdUnits('coffee-service/water-equipment-coolers-filters-accessories-etc', [
    { name: 'lb1', templateName: 'LB1', path: 'coffee-service/water-equipment-coolers-filters-accessories-etc/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'coffee-service/water-equipment-coolers-filters-accessories-etc/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'coffee-service/water-equipment-coolers-filters-accessories-etc/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'coffee-service/water-equipment-coolers-filters-accessories-etc/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'coffee-service/water-equipment-coolers-filters-accessories-etc/load-more' },
    { name: 'reskin', path: 'coffee-service/water-equipment-coolers-filters-accessories-etc/reskin' },
    { name: 'wa', path: 'coffee-service/water-equipment-coolers-filters-accessories-etc/wa' },
  ])
  .setAliasAdUnits('micro-market/micro-market-security-systems-and-accessories', [
    { name: 'lb1', templateName: 'LB1', path: 'micro-market/micro-market-security-systems-and-accessories/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'micro-market/micro-market-security-systems-and-accessories/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'micro-market/micro-market-security-systems-and-accessories/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'micro-market/micro-market-security-systems-and-accessories/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'micro-market/micro-market-security-systems-and-accessories/load-more' },
    { name: 'reskin', path: 'micro-market/micro-market-security-systems-and-accessories/reskin' },
    { name: 'wa', path: 'micro-market/micro-market-security-systems-and-accessories/wa' },
  ])
  .setAliasAdUnits('micro-market/micro-market-management-systems-mms', [
    { name: 'lb1', templateName: 'LB1', path: 'micro-market/micro-market-management-systems-mms/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'micro-market/micro-market-management-systems-mms/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'micro-market/micro-market-management-systems-mms/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'micro-market/micro-market-management-systems-mms/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'micro-market/micro-market-management-systems-mms/load-more' },
    { name: 'reskin', path: 'micro-market/micro-market-management-systems-mms/reskin' },
    { name: 'wa', path: 'micro-market/micro-market-management-systems-mms/wa' },
  ])
  .setAliasAdUnits('micro-market/micro-market-kiosks-and-mobile-checkout', [
    { name: 'lb1', templateName: 'LB1', path: 'micro-market/micro-market-kiosks-and-mobile-checkout/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'micro-market/micro-market-kiosks-and-mobile-checkout/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'micro-market/micro-market-kiosks-and-mobile-checkout/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'micro-market/micro-market-kiosks-and-mobile-checkout/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'micro-market/micro-market-kiosks-and-mobile-checkout/load-more' },
    { name: 'reskin', path: 'micro-market/micro-market-kiosks-and-mobile-checkout/reskin' },
    { name: 'wa', path: 'micro-market/micro-market-kiosks-and-mobile-checkout/wa' },
  ])
  .setAliasAdUnits('micro-market/micro-market-food-coolers', [
    { name: 'lb1', templateName: 'LB1', path: 'micro-market/micro-market-food-coolers/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'micro-market/micro-market-food-coolers/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'micro-market/micro-market-food-coolers/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'micro-market/micro-market-food-coolers/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'micro-market/micro-market-food-coolers/load-more' },
    { name: 'reskin', path: 'micro-market/micro-market-food-coolers/reskin' },
    { name: 'wa', path: 'micro-market/micro-market-food-coolers/wa' },
  ])
  .setAliasAdUnits('micro-market/micro-market-fixtures-area-treatments', [
    { name: 'lb1', templateName: 'LB1', path: 'micro-market/micro-market-fixtures-area-treatments/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'micro-market/micro-market-fixtures-area-treatments/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'micro-market/micro-market-fixtures-area-treatments/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'micro-market/micro-market-fixtures-area-treatments/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'micro-market/micro-market-fixtures-area-treatments/load-more' },
    { name: 'reskin', path: 'micro-market/micro-market-fixtures-area-treatments/reskin' },
    { name: 'wa', path: 'micro-market/micro-market-fixtures-area-treatments/wa' },
  ]);

module.exports = config;
