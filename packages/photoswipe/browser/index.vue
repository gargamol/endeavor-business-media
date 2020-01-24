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

      <pswp-element name="ui" :modifiers="['hidden']">
        <pswp-element name="top-bar">
          <pswp-element name="counter" />
          <pswp-button type="close" />
          <!-- <pswp-button type="share" /> -->
          <pswp-button type="fullscreen" />
          <pswp-button type="zoom" />

          <pswp-element name="preloader">
            <pswp-element name="preloader__icn">
              <pswp-element name="preloader__cut">
                <pswp-element name="preloader__donut" />
              </pswp-element>
            </pswp-element>
          </pswp-element>
        </pswp-element>

        <pswp-button type="previous" />
        <pswp-button type="next" />
        <pswp-element name="caption">
          <pswp-element name="caption__center" />
        </pswp-element>
      </pswp-element>
    </pswp-element>
  </div>
</template>

<script>
import 'photoswipe/dist/default-skin/default-skin.png';
import 'photoswipe/dist/default-skin/default-skin.svg';
import 'photoswipe/dist/default-skin/preloader.gif';

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

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => ({}),
    },
    initOnMount: {
      type: Boolean,
      default: false,
    },
    withCredit: {
      type: Boolean,
      default: true,
    },
  },

  mounted() {
    const options = { ...this.options };
    if (this.withCredit) {
      options.addCaptionHTMLFn = (item, captionEl) => {
        const creditHtml = item.credit ? `<small>${item.credit}</small>` : '';
        if (!item.title) {
          // eslint-disable-next-line no-param-reassign
          captionEl.children[0].innerText = creditHtml;
          return false;
        }
        let titleHtml = item.title;
        if (creditHtml) titleHtml = `${titleHtml}<br>${creditHtml}`;
        // eslint-disable-next-line no-param-reassign
        captionEl.children[0].innerHTML = titleHtml;
        return true;
      };
    }
    const gallery = new PhotoSwipe(this.$el, PhotoSwipeUI, this.items, options);
    if (this.initOnMount) gallery.init();
  },
};
</script>
