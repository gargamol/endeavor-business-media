<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    modifiers: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    classNames() {
      const elementName = `pwsp__${this.name}`;
      const classNames = [elementName];
      this.modifiers.forEach(mod => classNames.push(`${elementName}--${mod}`));
      return classNames;
    },
  },
};
</script>
