<template>
  <div class="max-width-container">
    <div class="max-width">
      <section class="service-section section-grid">
        <div v-motion-fade-in-on-visible class="section__text">
          <slot name="text"></slot>
        </div>

        <div v-motion-fade-in-on-visible class="section__image">
          <slot name="image"></slot>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../styles/_globals.scss";

// LAYOUT

.section__text {
  @media (width >= $mobile-width) {
    grid-column: 1 / 7;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 1 / 8;
  }

  @media (width >= $desktop-width) {
    grid-column: 1 / 9;
  }
}

.section__image {
  @media (width >= $mobile-width) {
    grid-column: 7 / -1;
    grid-row: 1 / 2;
  }

  @media (width >= $tablet-width) {
    grid-column: 8 / -1;
  }

  @media (width >= $desktop-width) {
    grid-column: 9 / -1;
  }
}

.reverse {
  .section__image {
    @media (width >= $mobile-width) {
      grid-column: 1 / 7;
      grid-row: 1 / 2;
    }

    @media (width >= $tablet-width) {
      grid-column: 1 / 6;
    }

    @media (width >= $desktop-width) {
      grid-column: 1 / 5;
    }
  }

  .section__text {
    @media (width >= $mobile-width) {
      grid-column: 7 / -1;
      grid-row: 1 / 2;
    }

    @media (width >= $tablet-width) {
      grid-column: 6 / -1;
    }

    @media (width >= $desktop-width) {
      grid-column: 5 / -1;
    }
  }
}
</style>
