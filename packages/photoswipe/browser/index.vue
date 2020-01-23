<template>
  <div
    class="pswp"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <pswp-element name="bg" />
    <pswp-element name="scroll-wrap">
      <pswp-element name="container">
        <pswp-item />
        <pswp-item />
        <pswp-item />
      </pswp-element>
    </pswp-element>

    <pswp-element name="ui" :modifiers="['hidden']">
      <pswp-element name="top-bar">
        <pswp-element name="counter" />
        <pswp-button type="close" />
        <pswp-button type="share" />
        <pswp-button type="fullscreen" />
        <pswp-button type="zoom" />
      </pswp-element>
    </pswp-element>

    <pswp-button type="previous" />
    <pswp-button type="next" />
  </div>
</template>

<script>
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default';
import PswpElement from './element.vue';
import PswpItem from './item.vue';
import PswpButton from './buttons/index.vue';

export default {
  components: {
    PswpElement,
    PswpItem,
    PswpButton,
  },

  mounted() {
    const options = { index: 0 };
    const items = [
      { src: 'https://placekitten.com/600/400', w: 600, h: 400 },
      { src: 'https://placekitten.com/1200/900', w: 1200, h: 900 },
    ];

    const gallery = new PhotoSwipe(this.$el, PhotoSwipeUI, items, options);
    gallery.init();
  },
};
</script>
