<template>
  <BaseButton @click="navigateToContactPage()">
    <slot>Contactează-mă</slot>
  </BaseButton>
</template>
<script setup>
import BaseButton from "./BaseButton.vue";
const navigateToContactPage = () => {
  window.location.assign("https://ig.me/m/agnesmariapriseceanu");
};
</script>

<style lang="scss" scoped></style>
