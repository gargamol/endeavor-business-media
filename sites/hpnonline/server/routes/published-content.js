const events = require('../templates/published-content/events');
const whitepapers = require('../templates/published-content/whitepapers');
const webinars = require('../templates/published-content/webinars');
const videos = require('../templates/published-content/videos');

module.exports = (app) => {
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/whitepapers', (_, res) => { res.marko(whitepapers); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
  app.get('/videos', (_, res) => { res.marko(videos); });
};
