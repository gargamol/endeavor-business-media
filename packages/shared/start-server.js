const newrelic = require('newrelic');
const { startServer } = require('@base-cms/marko-web');
const { set, get, getAsObject } = require('@base-cms/object-path');
const cleanResponse = require('@base-cms/marko-core/middleware/clean-marko-response');
const contactUsHandler = require('@endeavor-business-media/package-contact-us');
const loadInquiry = require('@endeavor-business-media/package-inquiry/load-from-config');

const configureGAM = require('./config/gam');
const configureNativeX = require('./config/native-x');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');

const routes = siteRoutes => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Handle contact submissions on /__contact-us
  contactUsHandler(app);
  // Load site routes.
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  return startServer({
    ...options,
    routes: routes(options.routes),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      set(app.locals, 'GAM', configureGAM(gamConfig));

      // Setup NativeX.
      const nativeXConfig = getAsObject(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', configureNativeX(nativeXConfig));

      // Clean all response bodies.
      app.use(cleanResponse());
    },
    onAsyncBlockError: e => newrelic.noticeError(e),
  });
};
