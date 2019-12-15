const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('../graphql/fragments/website-section-page');
const directory = require('../templates/website-section/directory');
const channel = require('../templates/website-section/channel');
const section = require('../templates/website-section');
const contactUs = require('../templates/website-section/contact-us');
const whitePapers = require('../templates/website-section/white-papers');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(directory)', withWebsiteSection({
    template: directory,
    queryFragment,
  }));
  app.get('/:alias(beverage)', withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias(coffee-service)', withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias(equipment)', withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias(healthy-convenience)', withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias(management)', withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias(micro-market)', withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias(products)', withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias(technology)', withWebsiteSection({
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
