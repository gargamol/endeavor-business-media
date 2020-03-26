const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const leadersFragment = require('@endeavor-business-media/package-leaders/graphql/fragments/leaders-section');
const contactUs = require('@endeavor-business-media/package-shared/templates/website-section/contact-us');
const leaders = require('@endeavor-business-media/package-shared/templates/website-section/leaders');
const queryFragment = require('@endeavor-business-media/package-shared/graphql/fragments/website-section-page');

const directory = require('../templates/website-section/directory');
const section = require('../templates/website-section');
const channel = require('../templates/website-section/channel');

const fortyUnderForty = require('../templates/website-section/40-under-40');
const transitBidsRFP = require('../templates/website-section/transit-bids-rfp');
const transitBidsRFPSubmit = require('../templates/website-section/transit-bids-rfp/submit');

const channelAliases = [
  'bus',
  'rail',
  'technology',
  'safety-security',
  'alt-mobility',
  'management',
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
  app.get('/:alias(40-under-40)', withWebsiteSection({
    template: fortyUnderForty,
    queryFragment,
  }));
  app.get('/:alias(transit-bids-rfp)', withWebsiteSection({
    template: transitBidsRFP,
    queryFragment,
  }));
  app.get('/:alias(transit-bids-rfp/submit)', withWebsiteSection({
    aliasResolver: () => 'transit-bids-rfp',
    redirectOnPathMismatch: false,
    template: transitBidsRFPSubmit,
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
