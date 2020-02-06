const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const leaders = require('../templates/website-section/leaders');
const directory = require('../templates/website-section/directory');
const section = require('../templates/website-section');
const top100 = require('../templates/website-section/top-100');
const contactUs = require('../templates/website-section/contact-us');
const queryFragment = require('../graphql/fragments/website-section-page');
const whitePapers = require('../templates/website-section/white-papers');
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
  app.get('/:alias(top-100-vendors/2018)', withWebsiteSection({
    template: top100,
    queryFragment,
  }));
  app.get('/:alias(top-100-vendors/2019)', withWebsiteSection({
    template: top100,
    queryFragment,
  }));
  app.get(`/:alias(${channelAliases.join('|')})`, withWebsiteSection({
    template: channel,
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
