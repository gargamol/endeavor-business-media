const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const leaders = require('@endeavor-business-media/package-shared/templates/website-section/leaders');
const contactUs = require('@endeavor-business-media/package-shared/templates/website-section/contact-us');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/website-section-page');
const section = require('../templates/website-section');
const freeSamplesTemplate = require('../templates/website-section/products-free-samples');
const whitePapers = require('../templates/website-section/white-papers');
const covid19 = require('../templates/website-section/covid-19');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(dentistry/products/free-samples)', withWebsiteSection({
    template: freeSamplesTemplate,
    queryFragment,
  }));
  app.get('/:alias(covid-19)', withWebsiteSection({
    template: covid19,
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
