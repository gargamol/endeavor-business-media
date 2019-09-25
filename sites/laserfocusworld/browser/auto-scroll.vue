<template>
  <div />
</template>

<script>
export default {
  props: {
    containerTarget: {
      type: String,
      required: true,
    },
    elementTarget: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const container = document.querySelector(this.containerTarget);
    const element = document.querySelector(this.elementTarget);
    if (container && element) {
      const offset = element.getBoundingClientRect().top - container.getBoundingClientRect().top;
      container.scrollTop = offset;
    }
  },
};
</script>
