const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const contactUs = require('@endeavor-business-media/package-shared/templates/website-section/contact-us');
const leaders = require('@endeavor-business-media/package-shared/templates/website-section/leaders');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/website-section-page');
const directory = require('../templates/website-section/directory');
const section = require('../templates/website-section');
const channel = require('../templates/website-section/channel');
const diagnosticNetworkFeed = require('../templates/website-section/diagnostic-network-feed');
const videos = require('../templates/website-section/videos');
const blogs = require('../templates/website-section/blogs');

const channelAliases = [
  'in-the-bay',
  'shop-operations',
  'vehicles',
  'distributors',
  'industry-news',
  'diagnosticNetworkFeed',
];

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(in-the-bay)', withWebsiteSection({
    template: diagnosticNetworkFeed,
    queryFragment,
  }));
  app.get('/:alias(covid-19)', withWebsiteSection({
    template: diagnosticNetworkFeed,
    queryFragment,
  }));
  app.get('/:alias(blogs)', withWebsiteSection({
    template: blogs,
    queryFragment,
  }));
  app.get('/:alias(videos)', withWebsiteSection({
    template: videos,
    queryFragment,
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
  app.get(`/:alias(${channelAliases.join('|')})`, withWebsiteSection({
    template: channel,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
