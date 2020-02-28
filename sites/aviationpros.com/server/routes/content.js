const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/content-page');
const content = require('@endeavor-business-media/package-shared/templates/content');

const company = require('../templates/content/company');
const whitepaper = require('../templates/content/whitepaper');

module.exports = (app) => {
  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
