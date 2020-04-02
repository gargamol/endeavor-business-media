const configureGAM = require('@endeavor-business-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'VehicleServicePros' });

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
  .setAliasAdUnits('in-the-bay', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/load-more' },
    { name: 'reskin', path: 'in-the-bay/reskin' },
  ])
  .setAliasAdUnits('shop-operations', [
    { name: 'lb1', templateName: 'LB1', path: 'shop-operations/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'shop-operations/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'shop-operations/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'shop-operations/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'shop-operations/load-more' },
    { name: 'reskin', path: 'shop-operations/reskin' },
  ])
  .setAliasAdUnits('vehicles', [
    { name: 'lb1', templateName: 'LB1', path: 'vehicles/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'vehicles/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vehicles/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'vehicles/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'vehicles/load-more' },
    { name: 'reskin', path: 'vehicles/reskin' },
  ])
  .setAliasAdUnits('distributors', [
    { name: 'lb1', templateName: 'LB1', path: 'distributors/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'distributors/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'distributors/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'distributors/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'distributors/load-more' },
    { name: 'reskin', path: 'distributors/reskin' },
  ])
  .setAliasAdUnits('industry-news', [
    { name: 'lb1', templateName: 'LB1', path: 'industry-news/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'industry-news/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'industry-news/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'industry-news/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'industry-news/load-more' },
    { name: 'reskin', path: 'industry-news/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/diagnostic-repair-info', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/diagnostic-repair-info/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/diagnostic-repair-info/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/diagnostic-repair-info/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/diagnostic-repair-info/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/diagnostic-repair-info/load-more' },
    { name: 'reskin', path: 'in-the-bay/diagnostic-repair-info/reskin' },
  ])
  .setAliasAdUnits('vehicles/under-vehicle-trailer-towing', [
    { name: 'lb1', templateName: 'LB1', path: 'vehicles/under-vehicle-trailer-towing/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'vehicles/under-vehicle-trailer-towing/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'vehicles/under-vehicle-trailer-towing/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'vehicles/under-vehicle-trailer-towing/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'vehicles/under-vehicle-trailer-towing/load-more' },
    { name: 'reskin', path: 'vehicles/under-vehicle-trailer-towing/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/tire-and-wheel-service', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/tire-and-wheel-service/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/tire-and-wheel-service/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/tire-and-wheel-service/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/tire-and-wheel-service/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/tire-and-wheel-service/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/tire-and-wheel-service/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/hand-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/hand-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/hand-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/hand-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/hand-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/hand-tools/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/hand-tools/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/air-conditioning-a-c-repair-service', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/air-conditioning-a-c-repair-service/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/air-conditioning-a-c-repair-service/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/air-conditioning-a-c-repair-service/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/air-conditioning-a-c-repair-service/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/air-conditioning-a-c-repair-service/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/air-conditioning-a-c-repair-service/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/lifts-and-lifting-equipment', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/lifts-and-lifting-equipment/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/lifts-and-lifting-equipment/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/lifts-and-lifting-equipment/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/lifts-and-lifting-equipment/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/lifts-and-lifting-equipment/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/lifts-and-lifting-equipment/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/safety-equipment-and-personal-gear', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/maintenance-service/chemicals', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/maintenance-service/chemicals/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/maintenance-service/chemicals/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/maintenance-service/chemicals/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/maintenance-service/chemicals/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/maintenance-service/chemicals/load-more' },
    { name: 'reskin', path: 'in-the-bay/maintenance-service/chemicals/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/shop-equipment/cordless-worklights', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/shop-equipment--cordless-worklights/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/shop-equipment--cordless-worklights/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/shop-equipment--cordless-worklights/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/shop-equipment--cordless-worklights/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/shop-equipment--cordless-worklights/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/shop-equipment--cordless-worklights/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/electrical-system-tools-and-equipment/jump-starters', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/electrical-system-tools-and-equipment--jump-starters/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/electrical-system-tools-and-equipment--jump-starters/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/electrical-system-tools-and-equipment--jump-starters/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/electrical-system-tools-and-equipment--jump-starters/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/electrical-system-tools-and-equipment--jump-starters/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/electrical-system-tools-and-equipment--jump-starters/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/tool-storage', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/tool-storage/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/tool-storage/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/tool-storage/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/tool-storage/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/tool-storage/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/tool-storage/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/shop-equipment/worklights-and-shop-lighting', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/shop-equipment--worklights-and-shop-lighting/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/shop-equipment--worklights-and-shop-lighting/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/shop-equipment--worklights-and-shop-lighting/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/shop-equipment--worklights-and-shop-lighting/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/shop-equipment--worklights-and-shop-lighting/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/shop-equipment--worklights-and-shop-lighting/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/safety-equipment-and-personal-gear/flashlights', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear--flashlights/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear--flashlights/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear--flashlights/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear--flashlights/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear--flashlights/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/safety-equipment-and-personal-gear--flashlights/reskin' },
  ])
  .setAliasAdUnits('in-the-bay/tools-equipment/air-tools', [
    { name: 'lb1', templateName: 'LB1', path: 'in-the-bay/tools-equipment/air-tools/lb1' },
    { name: 'lb2', templateName: 'LB2', path: 'in-the-bay/tools-equipment/air-tools/lb2' },
    { name: 'rail1', templateName: 'RAIL1', path: 'in-the-bay/tools-equipment/air-tools/rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'in-the-bay/tools-equipment/air-tools/rail2' },
    { name: 'load-more', templateName: 'LM', path: 'in-the-bay/tools-equipment/air-tools/load-more' },
    { name: 'reskin', path: 'in-the-bay/tools-equipment/air-tools/reskin' },
  ]);

module.exports = config;
