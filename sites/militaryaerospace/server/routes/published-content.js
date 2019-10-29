const events = require('../templates/published-content/events');
const webinars = require('../templates/published-content/webinars');
const videos = require('../templates/published-content/videos');

module.exports = (app) => {
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/webcasts', (_, res) => { res.marko(webinars); });
  app.get('/videos', (_, res) => { res.marko(videos); });
};
