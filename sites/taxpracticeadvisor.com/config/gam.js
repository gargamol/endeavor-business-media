const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'TPA' });

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
  .setAliasAdUnits('top-tax-news', [
    { name: 'lb1', templateName: 'LB1', path: 'top-tax-news/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'top-tax-news/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'top-tax-news/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'top-tax-news/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'top-tax-news/load-more' },
    { name: 'reskin', path: 'top-tax-news/reskin' },
  ])
  .setAliasAdUnits('individual-income-taxes', [
    { name: 'lb1', templateName: 'LB1', path: 'individual-income-taxes/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'individual-income-taxes/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'individual-income-taxes/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'individual-income-taxes/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'individual-income-taxes/load-more' },
    { name: 'reskin', path: 'individual-income-taxes/reskin' },
  ])
  .setAliasAdUnits('corporate-income-taxes', [
    { name: 'lb1', templateName: 'LB1', path: 'corporate-income-taxes/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'corporate-income-taxes/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'corporate-income-taxes/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'corporate-income-taxes/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'corporate-income-taxes/load-more' },
    { name: 'reskin', path: 'corporate-income-taxes/reskin' },
  ])
  .setAliasAdUnits('payroll-taxes', [
    { name: 'lb1', templateName: 'LB1', path: 'payroll-taxes/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'payroll-taxes/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'payroll-taxes/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'payroll-taxes/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'payroll-taxes/load-more' },
    { name: 'reskin', path: 'payroll-taxes/reskin' },
  ])
  .setAliasAdUnits('sales-use-taxes', [
    { name: 'lb1', templateName: 'LB1', path: 'sales-use-taxes/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'sales-use-taxes/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'sales-use-taxes/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'sales-use-taxes/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'sales-use-taxes/load-more' },
    { name: 'reskin', path: 'sales-use-taxes/reskin' },
  ])
  .setAliasAdUnits('practice-management', [
    { name: 'lb1', templateName: 'LB1', path: 'practice-management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'practice-management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'practice-management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'practice-management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'practice-management/load-more' },
    { name: 'reskin', path: 'practice-management/reskin' },
  ]);

module.exports = config;
