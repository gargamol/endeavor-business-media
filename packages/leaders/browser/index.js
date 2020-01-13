import Leaders from '@base-cms/marko-web-leaders/browser';

const GTMTrackLeaders = () => import(/* webpackChunkName: "gtm-track-leaders" */ './gtm-track-leaders.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('GTMTrackLeaders', GTMTrackLeaders, { provide: { EventBus } });
  Leaders(Browser);
};
