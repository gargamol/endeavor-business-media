const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const contactUs = require('@endeavor-business-media/package-shared/templates/website-section/contact-us');
const leaders = require('@endeavor-business-media/package-shared/templates/website-section/leaders');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/website-section-page');

const section = require('../templates/website-section');
const technologies = require('../templates/website-section/technologies');
const globalThoughtLeaders = require('../templates/website-section/global-thought-leaders');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(technologies)', withWebsiteSection({
    template: technologies,
    queryFragment,
  }));
  app.get('/:alias(global-thought-leaders)', withWebsiteSection({
    template: globalThoughtLeaders,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
