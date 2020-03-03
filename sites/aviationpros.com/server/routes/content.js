const { withContent } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/content-page');
const noAdsLoadMore = require('@endeavor-business-media/package-shared/templates/content/no-ads-load-more');

const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?webinar/:id(\\d{8})*', withContent({
    template: noAdsLoadMore,
    queryFragment,
  }));
  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: noAdsLoadMore,
    queryFragment,
  }));
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
