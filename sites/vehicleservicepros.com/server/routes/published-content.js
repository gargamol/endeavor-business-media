const events = require('../templates/published-content/events');
const webinars = require('../templates/published-content/webinars');

module.exports = (app) => {
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
};
