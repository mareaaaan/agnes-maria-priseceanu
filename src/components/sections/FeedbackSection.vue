<template>
  <div class="max-width-container">
    <div class="max-width">
      <section class="service-section section-grid">
        <h2 v-motion-fade-in-on-visible class="section__title">
          Ce spun cei cu care am lucrat?
        </h2>
        <CardCarousel
          v-motion-fade-in-on-visible
          class="section__carousel"
          :items="feedbackItems"
        />
      </section>
    </div>
  </div>
</template>

<script setup>
import feedbackItems from "src/content/home/feedbackData.json";
import CardCarousel from "src/components/cards/CardCarousel.vue";
</script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// LAYOUT

// STYLES

.section__title {
  @media (width >= $mobile-width) {
    text-align: center;
  }
}
</style>
