const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'RDH' });

// Override rail and load more to use 300x250 only.
config
  .setTemplate('RAIL2', { size: [300, 250] })
  .setTemplate('LM', { size: [300, 250] });

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
  .setAliasAdUnits('whats-trending', [
    { name: 'lb1', templateName: 'LB1', path: 'whats-trending/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'whats-trending/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'whats-trending/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'whats-trending/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'whats-trending/load-more' },
    { name: 'reskin', path: 'whats-trending/reskin' },
  ])
  .setAliasAdUnits('job-postings', [
    { name: 'lb1', templateName: 'LB1', path: 'job-postings/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'job-postings/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'job-postings/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'job-postings/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'job-postings/load-more' },
    { name: 'reskin', path: 'job-postings/reskin' },
  ]);

module.exports = config;
