<template />

<script>

// @todo this should be removed once contact us is moved to core.
export default {
  props: {
    paramName: {
      type: String,
      default: 'facet-auto-scroll',
    },
    activeId: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    wrapperId() {
      return `wrapper-${this.paramName}-${this.activeId}`;
    },
    activeLinkId() {
      return `link-${this.paramName}-${this.activeId}`;
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      const wrapper = document.getElementById(this.wrapperId);
      const facet = document.getElementById(this.activeLinkId);
      wrapper.scrollTop = facet.getBoundingClientRect().top - wrapper.getBoundingClientRect().top;
    });
  },
};
</script>
