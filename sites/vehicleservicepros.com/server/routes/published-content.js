const webinars = require('@endeavor-business-media/package-shared/templates/published-content/webinars');
const events = require('@endeavor-business-media/package-shared/templates/published-content/events');

module.exports = (app) => {
  app.get('/events', (_, res) => { res.marko(events); });
  app.get('/webinars', (_, res) => { res.marko(webinars); });
};
