<template>
  <div class="wavy-bottom-curve">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        :class="props.isDark ? 'fill-dark' : 'fill-light'"
      ></path>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  isDark: Boolean,
});
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";
.wavy-bottom-curve {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wavy-bottom-curve svg {
  position: relative;
  display: block;
  width: calc(137% + 1.3px);
  height: 250px;
}

.wavy-bottom-curve .fill-dark {
  fill: $primary-color;
}

.wavy-bottom-curve .fill-light {
  fill: $light-color;
}
</style>
