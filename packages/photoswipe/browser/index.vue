<template>
  <div
    class="pswp"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <pwsp-element name="bg" />
    <pwsp-element name="scroll-wrap">
      <pwsp-element name="container" />
    </pwsp-element>
  </div>
</template>

<script>
import PwspElement from './element.vue';

export default {
  components: { PwspElement },
};
</script>
