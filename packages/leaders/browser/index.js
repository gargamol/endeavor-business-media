import Leaders from '@base-cms/marko-web-leaders/browser';

const CommonGTMTrackLeaders = () => import(/* webpackChunkName: "common-gtm-track-leaders" */ './gtm-track-leaders.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('CommonGTMTrackLeaders', CommonGTMTrackLeaders, { provide: { EventBus } });
  Leaders(Browser);
};
