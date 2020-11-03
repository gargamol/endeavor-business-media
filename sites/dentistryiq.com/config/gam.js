const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'DIQ' });

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
  .setAliasAdUnits('dental-hygiene', [
    { name: 'lb1', templateName: 'LB1', path: 'dental-hygiene/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'dental-hygiene/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'dental-hygiene/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'dental-hygiene/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'dental-hygiene/load-more' },
    { name: 'reskin', path: 'dental-hygiene/reskin' },
  ])
  .setAliasAdUnits('dental-hygiene/student-hygiene', [
    { name: 'lb1', templateName: 'LB1', path: 'dental-hygiene/student-hygiene/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'dental-hygiene/student-hygiene/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'dental-hygiene/student-hygiene/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'dental-hygiene/student-hygiene/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'dental-hygiene/student-hygiene/load-more' },
    { name: 'reskin', path: 'dental-hygiene/student-hygiene/reskin' },
  ])
  .setAliasAdUnits('clinical', [
    { name: 'lb1', templateName: 'LB1', path: 'clinical/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'clinical/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'clinical/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'clinical/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'clinical/load-more' },
    { name: 'reskin', path: 'clinical/reskin' },
  ])
  .setAliasAdUnits('clinical/endodontics', [
    { name: 'lb1', templateName: 'LB1', path: 'clinical/endodontics/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'clinical/endodontics/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'clinical/endodontics/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'clinical/endodontics/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'clinical/endodontics/load-more' },
    { name: 'reskin', path: 'clinical/endodontics/reskin' },
  ])
  .setAliasAdUnits('clinical/orthodontics', [
    { name: 'lb1', templateName: 'LB1', path: 'clinical/orthodontics/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'clinical/orthodontics/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'clinical/orthodontics/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'clinical/orthodontics/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'clinical/orthodontics/load-more' },
    { name: 'reskin', path: 'clinical/orthodontics/reskin' },
  ])
  .setAliasAdUnits('clinical/prosthodontics-and-laboratory', [
    { name: 'lb1', templateName: 'LB1', path: 'clinical/prosthodontics-and-laboratory/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'clinical/prosthodontics-and-laboratory/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'clinical/prosthodontics-and-laboratory/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'clinical/prosthodontics-and-laboratory/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'clinical/prosthodontics-and-laboratory/load-more' },
    { name: 'reskin', path: 'clinical/prosthodontics-and-laboratory/reskin' },
  ])
  .setAliasAdUnits('products', [
    { name: 'lb1', templateName: 'LB1', path: 'products/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'products/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'products/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'products/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'products/load-more' },
    { name: 'reskin', path: 'products/reskin' },
  ])
  .setAliasAdUnits('products/free-samples', [
    { name: 'lb1', templateName: 'LB1', path: 'products/free-samples/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'products/free-samples/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'products/free-samples/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'products/free-samples/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'products/free-samples/load-more' },
    { name: 'reskin', path: 'products/free-samples/reskin' },
  ])
  .setAliasAdUnits('practice-management', [
    { name: 'lb1', templateName: 'LB1', path: 'practice-management/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'practice-management/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'practice-management/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'practice-management/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'practice-management/load-more' },
    { name: 'reskin', path: 'practice-management/reskin' },
  ])
  .setAliasAdUnits('front-office', [
    { name: 'lb1', templateName: 'LB1', path: 'front-office/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'front-office/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'front-office/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'front-office/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'front-office/load-more' },
    { name: 'reskin', path: 'front-office/reskin' },
  ])
  .setAliasAdUnits('dental-assisting', [
    { name: 'lb1', templateName: 'LB1', path: 'dental-assisting/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'dental-assisting/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'dental-assisting/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'dental-assisting/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'dental-assisting/load-more' },
    { name: 'reskin', path: 'dental-assisting/reskin' },
  ])
  .setAliasAdUnits('dentistry', [
    { name: 'lb1', templateName: 'LB1', path: 'dentistry/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'dentistry/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'dentistry/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'dentistry/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'dentistry/load-more' },
    { name: 'reskin', path: 'dentistry/reskin' },
    { name: 'wa', path: 'dentistry/wa' },
  ])
  .setAliasAdUnits('dentistry/products', [
    { name: 'lb1', templateName: 'LB1', path: 'dentistry/products/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'dentistry/products/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'dentistry/products/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'dentistry/products/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'dentistry/products/load-more' },
    { name: 'reskin', path: 'dentistry/products/reskin' },
    { name: 'wa', path: 'dentistry/products/wa' },
  ])
  .setAliasAdUnits('dental-jobs', [
    { name: 'lb1', templateName: 'LB1', path: 'dental-jobs/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'dental-jobs/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'dental-jobs/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'dental-jobs/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'dental-jobs/load-more' },
    { name: 'reskin', path: 'dental-jobs/reskin' },
    { name: 'wa', path: 'dental-jobs/wa' },
  ]);

module.exports = config;
