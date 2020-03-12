const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/content-page');
const content = require('../templates/content');
const whitepaper = require('../templates/content/whitepaper');

module.exports = (app) => {
  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
