<template>
  <div
    class="pswp"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <pwsp-element name="bg" />
    <pwsp-element name="scroll-wrap">
      <pwsp-element name="container">
        <pwsp-item />
        <pwsp-item />
        <pwsp-item />
      </pwsp-element>
    </pwsp-element>

    <pwsp-element name="ui" :modifiers="['hidden']">
      <pwsp-element name="top-bar">
        <pwsp-element name="counter" />
      </pwsp-element>
    </pwsp-element>
  </div>
</template>

<script>
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default';
import PwspElement from './element.vue';
import PwspItem from './item.vue';

export default {
  components: { PwspElement, PwspItem },

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
