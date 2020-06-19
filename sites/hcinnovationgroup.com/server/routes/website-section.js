const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const contactUs = require('@endeavor-business-media/package-shared/templates/website-section/contact-us');
const leaders = require('@endeavor-business-media/package-shared/templates/website-section/leaders');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/website-section-page');
const noAds = require('@endeavor-business-media/package-shared/templates/content/no-ads-load-more.marko');
const directory = require('../templates/website-section/directory');
const section = require('../templates/website-section');
const whitePapers = require('../templates/website-section/white-papers');
const top100 = require('../templates/website-section/top-100');
const channel = require('../templates/website-section/channel');

const channelAliases = [
  'policy-value-based-care',
  'population-health-management',
  'analytics-ai',
  'cybersecurity',
  'finance-revenue-cycle',
  'interoperability-hie',
  'clinical-it',
  'imaging',
  'patient-empowerment',
];

const noAdsAliases = [
  'virtual-care-and-COVID-19',
  'COVID-19-and-cybersecurity',
  'COVID-19-and-data-analytics',
];

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(directory/[a-z0-9-/]+)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(top-100-vendors/*)', withWebsiteSection({
    template: top100,
    queryFragment,
  }));
  app.get(`/:alias(${channelAliases.join('|')})`, withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get(`/:alias(${noAdsAliases.join('|')})`, withWebsiteSection({
    template: noAds,
    queryFragment,
  }));
  app.get('/:alias(white-papers)', withWebsiteSection({
    template: whitePapers,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
