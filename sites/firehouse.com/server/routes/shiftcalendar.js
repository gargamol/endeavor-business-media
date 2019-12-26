const template = require('../templates/shiftcalendar');

module.exports = (app) => {
  app.get('/shiftcalendar', (_, res) => { res.marko(template); });
};
