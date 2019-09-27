const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'DIQ' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('CONTENT', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'default/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'default/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'default/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'default/load-more' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('dental-hygiene', [
    { name: 'lb1', templateName: 'LB', path: 'dental-hygiene/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'dental-hygiene/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'dental-hygiene/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'dental-hygiene/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'dental-hygiene/load-more' },
    { name: 'reskin', path: 'dental-hygiene/reskin' },
  ])
  .setAliasAdUnits('dental-hygiene/student-hygiene', [
    { name: 'lb1', templateName: 'LB', path: 'dental-hygiene/student-hygiene/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'dental-hygiene/student-hygiene/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'dental-hygiene/student-hygiene/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'dental-hygiene/student-hygiene/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'dental-hygiene/student-hygiene/load-more' },
    { name: 'reskin', path: 'dental-hygiene/student-hygiene/reskin' },
  ])
  .setAliasAdUnits('clinical', [
    { name: 'lb1', templateName: 'LB', path: 'clinical/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'clinical/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'clinical/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'clinical/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'clinical/load-more' },
    { name: 'reskin', path: 'clinical/reskin' },
  ])
  .setAliasAdUnits('clinical/endodontics', [
    { name: 'lb1', templateName: 'LB', path: 'clinical/endodontics/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'clinical/endodontics/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'clinical/endodontics/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'clinical/endodontics/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'clinical/endodontics/load-more' },
    { name: 'reskin', path: 'clinical/endodontics/reskin' },
  ])
  .setAliasAdUnits('clinical/orthodontics', [
    { name: 'lb1', templateName: 'LB', path: 'clinical/orthodontics/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'clinical/orthodontics/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'clinical/orthodontics/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'clinical/orthodontics/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'clinical/orthodontics/load-more' },
    { name: 'reskin', path: 'clinical/orthodontics/reskin' },
  ])
  .setAliasAdUnits('clinical/prosthodontics-and-laboratory', [
    { name: 'lb1', templateName: 'LB', path: 'clinical/prosthodontics-and-laboratory/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'clinical/prosthodontics-and-laboratory/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'clinical/prosthodontics-and-laboratory/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'clinical/prosthodontics-and-laboratory/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'clinical/prosthodontics-and-laboratory/load-more' },
    { name: 'reskin', path: 'clinical/prosthodontics-and-laboratory/reskin' },
  ])
  .setAliasAdUnits('products', [
    { name: 'lb1', templateName: 'LB', path: 'products/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'products/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'products/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'products/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'products/load-more' },
    { name: 'reskin', path: 'products/reskin' },
  ])
  .setAliasAdUnits('products/free-samples', [
    { name: 'lb1', templateName: 'LB', path: 'products/free-samples/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'products/free-samples/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'products/free-samples/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'products/free-samples/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'products/free-samples/load-more' },
    { name: 'reskin', path: 'products/free-samples/reskin' },
  ])
  .setAliasAdUnits('practice-management', [
    { name: 'lb1', templateName: 'LB', path: 'practice-management/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'practice-management/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'practice-management/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'practice-management/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'practice-management/load-more' },
    { name: 'reskin', path: 'practice-management/reskin' },
  ])
  .setAliasAdUnits('front-office', [
    { name: 'lb1', templateName: 'LB', path: 'front-office/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'front-office/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'front-office/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'front-office/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'front-office/load-more' },
    { name: 'reskin', path: 'front-office/reskin' },
  ])
  .setAliasAdUnits('dental-assisting', [
    { name: 'lb1', templateName: 'LB', path: 'dental-assisting/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'dental-assisting/lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'dental-assisting/rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'dental-assisting/rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'dental-assisting/load-more' },
    { name: 'reskin', path: 'dental-assisting/reskin' },
  ]);

module.exports = config;
