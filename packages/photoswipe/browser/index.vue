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
      </pswp-element>
    </pswp-element>
  </div>
</template>

<script>
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default';
import PswpElement from './element.vue';
import PswpItem from './item.vue';

export default {
  components: { PswpElement, PswpItem },

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
