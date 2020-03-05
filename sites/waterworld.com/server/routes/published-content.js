const webinars = require('@endeavor-business-media/package-shared/templates/published-content/webinars');
const events = require('@endeavor-business-media/package-shared/templates/published-content/events');
const videos = require('@endeavor-business-media/package-shared/templates/published-content/videos');
const whitePapers = require('@endeavor-business-media/package-shared/templates/published-content/white-papers');

module.exports = (app) => {
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  app.get('/white-papers', (_, res) => { res.marko(whitePapers); });
  app.get('/videos', (_, res) => { res.marko(videos); });
};
