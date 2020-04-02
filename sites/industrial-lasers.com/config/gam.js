const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'ILS' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB1', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('covid-19', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19/load-more' },
    { name: 'reskin', path: 'covid-19/reskin' },
  ])
  .setAliasAdUnits('cutting', [
    { name: 'lb1', templateName: 'LB1', path: 'cutting/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'cutting/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'cutting/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'cutting/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'cutting/load-more' },
    { name: 'reskin', path: 'cutting/reskin' },
  ])
  .setAliasAdUnits('welding', [
    { name: 'lb1', templateName: 'LB1', path: 'welding/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'welding/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'welding/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'welding/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'welding/load-more' },
    { name: 'reskin', path: 'welding/reskin' },
  ])
  .setAliasAdUnits('micromachining', [
    { name: 'lb1', templateName: 'LB1', path: 'micromachining/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'micromachining/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'micromachining/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'micromachining/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'micromachining/load-more' },
    { name: 'reskin', path: 'micromachining/reskin' },
  ])
  .setAliasAdUnits('marking-engraving', [
    { name: 'lb1', templateName: 'LB1', path: 'marking-engraving/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'marking-engraving/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'marking-engraving/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'marking-engraving/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'marking-engraving/load-more' },
    { name: 'reskin', path: 'marking-engraving/reskin' },
  ])
  .setAliasAdUnits('surface-treatment', [
    { name: 'lb1', templateName: 'LB1', path: 'surface-treatment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'surface-treatment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'surface-treatment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'surface-treatment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'surface-treatment/load-more' },
    { name: 'reskin', path: 'surface-treatment/reskin' },
  ])
  .setAliasAdUnits('additive-manufacturing', [
    { name: 'lb1', templateName: 'LB1', path: 'additive-manufacturing/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'additive-manufacturing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'additive-manufacturing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'additive-manufacturing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'additive-manufacturing/load-more' },
    { name: 'reskin', path: 'additive-manufacturing/reskin' },
  ])
  .setAliasAdUnits('drilling', [
    { name: 'lb1', templateName: 'LB1', path: 'drilling/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'drilling/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'drilling/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'drilling/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'drilling/load-more' },
    { name: 'reskin', path: 'drilling/reskin' },
  ]);

module.exports = config;
