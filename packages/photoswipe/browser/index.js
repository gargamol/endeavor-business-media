const Photoswipe = () => import(/* webpackChunkName: "marko-web-photoswipe" */ './index.vue');

export default (Browser) => {
  Browser.register('Photoswipe', Photoswipe);
};
