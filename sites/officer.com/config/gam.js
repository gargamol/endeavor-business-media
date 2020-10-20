const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'Officer' });

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
  .setTemplate('LB2', {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
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
  .setAliasAdUnits('covid-19', [
    { name: 'lb1', templateName: 'LB1', path: 'covid-19/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'covid-19/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'covid-19/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'covid-19/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'covid-19/load-more' },
    { name: 'reskin', path: 'covid-19/reskin' },
  ])
  .setAliasAdUnits('tactical', [
    { name: 'lb1', templateName: 'LB1', path: 'tactical/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/load-more' },
    { name: 'reskin', path: 'tactical/reskin' },
    { name: 'wa', path: 'tactical/wa' },
  ])
  .setAliasAdUnits('training-careers', [
    { name: 'lb1', templateName: 'LB1', path: 'training-careers/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'training-careers/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'training-careers/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'training-careers/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'training-careers/load-more' },
    { name: 'reskin', path: 'training-careers/reskin' },
    { name: 'wa', path: 'training-careers/wa' },
  ])
  .setAliasAdUnits('on-the-street', [
    { name: 'lb1', templateName: 'LB1', path: 'on-the-street/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'on-the-street/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'on-the-street/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'on-the-street/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'on-the-street/load-more' },
    { name: 'reskin', path: 'on-the-street/reskin' },
    { name: 'wa', path: 'on-the-street/wa' },
  ])
  .setAliasAdUnits('investigations', [
    { name: 'lb1', templateName: 'LB1', path: 'investigations/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'investigations/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'investigations/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'investigations/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'investigations/load-more' },
    { name: 'reskin', path: 'investigations/reskin' },
    { name: 'wa', path: 'investigations/wa' },
  ])
  .setAliasAdUnits('command-hq', [
    { name: 'lb1', templateName: 'LB1', path: 'command-hq/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/load-more' },
    { name: 'reskin', path: 'command-hq/reskin' },
    { name: 'wa', path: 'command-hq/wa' },
  ])
  .setAliasAdUnits('command-hq/corrections', [
    { name: 'lb1', templateName: 'LB1', path: 'command-hq/corrections/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/corrections/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/corrections/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/corrections/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/corrections/load-more' },
    { name: 'reskin', path: 'command-hq/corrections/reskin' },
    { name: 'wa', path: 'command-hq/corrections/wa' },
  ])
  .setAliasAdUnits('command-hq/distributors', [
    { name: 'lb1', templateName: 'LB1', path: 'command-hq/distributors/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/distributors/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/distributors/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/distributors/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/distributors/load-more' },
    { name: 'reskin', path: 'command-hq/distributors/reskin' },
    { name: 'wa', path: 'command-hq/distributors/wa' },
  ])
  .setAliasAdUnits('command-hq/supplies-services', [
    { name: 'lb1', templateName: 'LB1', path: 'command-hq/supplies-services/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/supplies-services/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/supplies-services/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/supplies-services/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/supplies-services/load-more' },
    { name: 'reskin', path: 'command-hq/supplies-services/reskin' },
    { name: 'wa', path: 'command-hq/supplies-services/wa' },
  ])
  .setAliasAdUnits('command-hq/technology/communications', [
    { name: 'lb1', templateName: 'LB1', path: 'command-hq/technology/communications/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/technology/communications/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/technology/communications/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/technology/communications/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/technology/communications/load-more' },
    { name: 'reskin', path: 'command-hq/technology/communications/reskin' },
    { name: 'wa', path: 'command-hq/technology/communications/wa' },
  ])
  .setAliasAdUnits('command-hq/technology/computers-software', [
    { name: 'lb1', templateName: 'LB1', path: 'command-hq/technology/computers-software/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/technology/computers-software/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/technology/computers-software/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/technology/computers-software/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/technology/computers-software/load-more' },
    { name: 'reskin', path: 'command-hq/technology/computers-software/reskin' },
    { name: 'wa', path: 'command-hq/technology/computers-software/wa' },
  ])
  .setAliasAdUnits('command-hq/technology/security-surveillance', [
    { name: 'lb1', templateName: 'LB1', path: 'command-hq/technology/security-surveillance/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/technology/security-surveillance/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/technology/security-surveillance/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/technology/security-surveillance/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/technology/security-surveillance/load-more' },
    { name: 'reskin', path: 'command-hq/technology/security-surveillance/reskin' },
    { name: 'wa', path: 'command-hq/technology/security-surveillance/wa' },
  ])
  .setAliasAdUnits('command-hq/technology/traffic', [
    { name: 'lb1', templateName: 'LB1', path: 'command-hq/technology/traffic/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'command-hq/technology/traffic/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'command-hq/technology/traffic/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'command-hq/technology/traffic/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'command-hq/technology/traffic/load-more' },
    { name: 'reskin', path: 'command-hq/technology/traffic/reskin' },
    { name: 'wa', path: 'command-hq/technology/traffic/wa' },
  ])
  .setAliasAdUnits('tactical/ems-hazmat', [
    { name: 'lb1', templateName: 'LB1', path: 'tactical/ems-hazmat/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/ems-hazmat/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/ems-hazmat/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/ems-hazmat/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/ems-hazmat/load-more' },
    { name: 'reskin', path: 'tactical/ems-hazmat/reskin' },
    { name: 'wa', path: 'tactical/ems-hazmat/wa' },
  ])
  .setAliasAdUnits('tactical/firearms', [
    { name: 'lb1', templateName: 'LB1', path: 'tactical/firearms/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/firearms/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/firearms/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/firearms/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/firearms/load-more' },
    { name: 'reskin', path: 'tactical/firearms/reskin' },
    { name: 'wa', path: 'tactical/firearms/wa' },
  ])
  .setAliasAdUnits('tactical/firearm-accessories', [
    { name: 'lb1', templateName: 'LB1', path: 'tactical/firearm-accessories/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/firearm-accessories/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/firearm-accessories/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/firearm-accessories/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/firearm-accessories/load-more' },
    { name: 'reskin', path: 'tactical/firearm-accessories/reskin' },
    { name: 'wa', path: 'tactical/firearm-accessories/wa' },
  ])
  .setAliasAdUnits('tactical/flashlights', [
    { name: 'lb1', templateName: 'LB1', path: 'tactical/flashlights/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/flashlights/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/flashlights/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/flashlights/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/flashlights/load-more' },
    { name: 'reskin', path: 'tactical/flashlights/reskin' },
    { name: 'wa', path: 'tactical/flashlights/wa' },
  ])
  .setAliasAdUnits('tactical/less-lethal', [
    { name: 'lb1', templateName: 'LB1', path: 'tactical/less-lethal/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/less-lethal/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/less-lethal/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/less-lethal/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/less-lethal/load-more' },
    { name: 'reskin', path: 'tactical/less-lethal/reskin' },
    { name: 'wa', path: 'tactical/less-lethal/wa' },
  ])
  .setAliasAdUnits('tactical/less-lethal', [
    { name: 'lb1', templateName: 'LB1', path: 'tactical/less-lethal/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/less-lethal/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/less-lethal/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/less-lethal/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/less-lethal/load-more' },
    { name: 'reskin', path: 'tactical/less-lethal/reskin' },
    { name: 'wa', path: 'tactical/less-lethal/wa' },
  ])
  .setAliasAdUnits('tactical/less-lethal', [
    { name: 'lb1', templateName: 'LB1', path: 'tactical/less-lethal/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'tactical/less-lethal/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'tactical/less-lethal/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'tactical/less-lethal/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'tactical/less-lethal/load-more' },
    { name: 'reskin', path: 'tactical/less-lethal/reskin' },
    { name: 'wa', path: 'tactical/less-lethal/wa' },
  ])
  .setAliasAdUnits('training-careers/hiring-promotion', [
    { name: 'lb1', templateName: 'LB1', path: 'training-careers/hiring-promotion/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'training-careers/hiring-promotion/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'training-careers/hiring-promotion/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'training-careers/hiring-promotion/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'training-careers/hiring-promotion/load-more' },
    { name: 'reskin', path: 'training-careers/hiring-promotion/reskin' },
    { name: 'wa', path: 'training-careers/hiring-promotion/wa' },
  ])
  .setAliasAdUnits('investigations/forensics', [
    { name: 'lb1', templateName: 'LB1', path: 'investigations/forensics/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'investigations/forensics/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'investigations/forensics/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'investigations/forensics/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'investigations/forensics/load-more' },
    { name: 'reskin', path: 'investigations/forensics/reskin' },
    { name: 'wa', path: 'investigations/forensics/wa' },
  ])
  .setAliasAdUnits('on-the-street/apparel', [
    { name: 'lb1', templateName: 'LB1', path: 'on-the-street/apparel/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'on-the-street/apparel/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'on-the-street/apparel/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'on-the-street/apparel/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'on-the-street/apparel/load-more' },
    { name: 'reskin', path: 'on-the-street/apparel/reskin' },
    { name: 'wa', path: 'on-the-street/apparel/wa' },
  ])
  .setAliasAdUnits('on-the-street/body-armor-protection', [
    { name: 'lb1', templateName: 'LB1', path: 'on-the-street/body-armor-protection/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'on-the-street/body-armor-protection/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'on-the-street/body-armor-protection/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'on-the-street/body-armor-protection/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'on-the-street/body-armor-protection/load-more' },
    { name: 'reskin', path: 'on-the-street/body-armor-protection/reskin' },
    { name: 'wa', path: 'on-the-street/body-armor-protection/wa' },
  ])
  .setAliasAdUnits('on-the-street/body-cameras', [
    { name: 'lb1', templateName: 'LB1', path: 'on-the-street/body-cameras/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'on-the-street/body-cameras/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'on-the-street/body-cameras/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'on-the-street/body-cameras/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'on-the-street/body-cameras/load-more' },
    { name: 'reskin', path: 'on-the-street/body-cameras/reskin' },
    { name: 'wa', path: 'on-the-street/body-cameras/wa' },
  ])
  .setAliasAdUnits('on-the-street/k-9-equipment-services', [
    { name: 'lb1', templateName: 'LB1', path: 'on-the-street/k-9-equipment-services/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'on-the-street/k-9-equipment-services/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'on-the-street/k-9-equipment-services/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'on-the-street/k-9-equipment-services/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'on-the-street/k-9-equipment-services/load-more' },
    { name: 'reskin', path: 'on-the-street/k-9-equipment-services/reskin' },
    { name: 'wa', path: 'on-the-street/k-9-equipment-services/wa' },
  ])
  .setAliasAdUnits('training-careers/specialized-training', [
    { name: 'lb1', templateName: 'LB1', path: 'training-careers/specialized-training/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'training-careers/specialized-training/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'training-careers/specialized-training/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'training-careers/specialized-training/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'training-careers/specialized-training/load-more' },
    { name: 'reskin', path: 'training-careers/specialized-training/reskin' },
    { name: 'wa', path: 'training-careers/specialized-training/wa' },
  ])
  .setAliasAdUnits('vehicles-fleet', [
    { name: 'lb1', templateName: 'LB1', path: 'vehicles-fleet/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'vehicles-fleet/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vehicles-fleet/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'vehicles-fleet/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'vehicles-fleet/load-more' },
    { name: 'reskin', path: 'vehicles-fleet/reskin' },
    { name: 'wa', path: 'vehicles-fleet/wa' },
  ])
  .setAliasAdUnits('vehicles-fleet/k-9-equipment-servicest', [
    { name: 'lb1', templateName: 'LB1', path: 'vehicles-fleet/k-9-equipment-services/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'vehicles-fleet/k-9-equipment-services/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vehicles-fleet/k-9-equipment-services/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'vehicles-fleet/k-9-equipment-services/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'vehicles-fleet/k-9-equipment-services/load-more' },
    { name: 'reskin', path: 'vehicles-fleet/k-9-equipment-services/reskin' },
    { name: 'wa', path: 'vehicles-fleet/k-9-equipment-services/wa' },
  ])
  .setAliasAdUnits('vehicles-fleet/computer-software', [
    { name: 'lb1', templateName: 'LB1', path: 'vehicles-fleet/computer-software/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'vehicles-fleet/computer-software/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vehicles-fleet/computer-software/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'vehicles-fleet/computer-software/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'vehicles-fleet/computer-software/load-more' },
    { name: 'reskin', path: 'vehicles-fleet/computer-software/reskin' },
    { name: 'wa', path: 'vehicles-fleet/computer-software/wa' },
  ])
  .setAliasAdUnits('vehicles-fleet/vehicles-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'vehicles-fleet/vehicles-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'vehicles-fleet/vehicles-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vehicles-fleet/vehicles-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'vehicles-fleet/vehicles-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'vehicles-fleet/vehicles-equipment/load-more' },
    { name: 'reskin', path: 'vehicles-fleet/vehicles-equipment/reskin' },
    { name: 'wa', path: 'vehicles-fleet/vehicles-equipment/wa' },
  ]);

module.exports = config;
