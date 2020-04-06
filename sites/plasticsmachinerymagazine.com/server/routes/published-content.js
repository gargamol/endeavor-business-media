const events = require('@endeavor-business-media/package-shared/templates/published-content/events');
const videos = require('@endeavor-business-media/package-shared/templates/published-content/videos');
const webinars = require('../templates/published-content/webinars');

module.exports = (app) => {
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  app.get('/videos', (_, res) => { res.marko(videos); });
};
