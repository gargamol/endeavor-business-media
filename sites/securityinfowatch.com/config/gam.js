const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('21687441225', { basePath: 'SecurityInfoWatch' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('FL', { size: [[600, 100], [300, 50]] })
  .setTemplate('MS', { size: [300, 50] })
  .setTemplate('RAIL1', { size: [300, 250] })
  .setTemplate('RAIL2', { size: [300, 600] })
  .setTemplate('LM', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'default/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'default/load-more' },
    { name: 'fl', templateName: 'FL', path: 'default/fl' },
    { name: 'ms', templateName: 'MS', path: 'default/ms' },
    { name: 'reskin', path: 'default/reskin' },
    { name: 'wa', path: 'default/wa' },
  ])
  .setAliasAdUnits('security-executives', [
    { name: 'lb1', templateName: 'LB', path: 'security-executives/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'security-executives/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'security-executives/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'security-executives/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'security-executives/load-more' },
    { name: 'reskin', path: 'security-executives/reskin' },
    { name: 'fl', templateName: 'FL', path: 'security-executives/fl' },
  ])
  .setAliasAdUnits('integrators', [
    { name: 'lb1', templateName: 'LB', path: 'integrators/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'integrators/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'integrators/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'integrators/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'integrators/load-more' },
    { name: 'reskin', path: 'integrators/reskin' },
    { name: 'fl', templateName: 'FL', path: 'integrators/fl' },
  ])
  .setAliasAdUnits('video-surveillance', [
    { name: 'lb1', templateName: 'LB', path: 'video-surveillance/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'video-surveillance/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'video-surveillance/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'video-surveillance/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'video-surveillance/load-more' },
    { name: 'reskin', path: 'video-surveillance/reskin' },
    { name: 'fl', templateName: 'FL', path: 'video-surveillance/fl' },
  ])
  .setAliasAdUnits('access-identity', [
    { name: 'lb1', templateName: 'LB', path: 'access-identity/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'access-identity/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'access-identity/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'access-identity/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'access-identity/load-more' },
    { name: 'reskin', path: 'access-identity/reskin' },
    { name: 'fl', templateName: 'FL', path: 'access-identity/fl' },
  ])
  .setAliasAdUnits('residential-technologies', [
    { name: 'lb1', templateName: 'LB', path: 'residential-technologies/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'residential-technologies/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'residential-technologies/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'residential-technologies/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'residential-technologies/load-more' },
    { name: 'reskin', path: 'residential-technologies/reskin' },
    { name: 'fl', templateName: 'FL', path: 'residential-technologies/fl' },
  ])
  .setAliasAdUnits('alarms-monitoring', [
    { name: 'lb1', templateName: 'LB', path: 'alarms-monitoring/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'alarms-monitoring/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'alarms-monitoring/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'alarms-monitoring/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'alarms-monitoring/load-more' },
    { name: 'reskin', path: 'alarms-monitoring/reskin' },
    { name: 'fl', templateName: 'FL', path: 'alarms-monitoring/fl' },
  ])
  .setAliasAdUnits('cybersecurity', [
    { name: 'lb1', templateName: 'LB', path: 'cybersecurity/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'cybersecurity/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'cybersecurity/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'cybersecurity/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'cybersecurity/load-more' },
    { name: 'reskin', path: 'cybersecurity/reskin' },
    { name: 'fl', templateName: 'FL', path: 'cybersecurity/fl' },
  ])
  .setAliasAdUnits('perimeter-security', [
    { name: 'lb1', templateName: 'LB', path: 'perimeter-security/lb1' },
    { name: 'lb2', templateName: 'LB', path: 'perimeter-security/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'perimeter-security/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'perimeter-security/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'perimeter-security/load-more' },
    { name: 'reskin', path: 'perimeter-security/reskin' },
    { name: 'fl', templateName: 'FL', path: 'perimeter-security/fl' },
  ]);

module.exports = config;
