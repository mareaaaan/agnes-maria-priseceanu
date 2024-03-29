<script setup>
const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});

defineEmits(["toggleSideBar"]);
</script>

<template>
  <nav class="navbar-container">
    <button class="menu-button" @click="$emit('toggleSideBar')">
      <i-material-symbols-menu-rounded class="menu-icon" />
    </button>
    <div class="logo">
      <h1 class="logo__title">Agnes Maria Priseceanu</h1>
      <h2 class="logo__subtitle">Psiholog clinician & psihoterapeut</h2>
    </div>

    <div class="links-container">
      <a
        v-for="(page, index) in props.pages"
        :key="index"
        class="link"
        :href="page.path"
        >{{ page.name }}</a
      >
    </div>
  </nav>
</template>

<style scoped>
.navbar-container {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(144, 144, 144, 0.49);
  box-shadow: 0px 3px 5px 0px rgba(144, 144, 144, 0.49);
}

.menu-button {
  display: none;
}

.logo {
  padding: 25px;
  color: var(--secondary-color);
}

.logo__title {
  font-family: "Playfair Display", serif;
  font-size: 40px;
  text-transform: uppercase;
}

.logo__subtitle {
  position: relative;
  left: 25%;
  padding-top: 10px;
  font-family: "Halimun", "Whisper", sans-serif;
  font-size: 20px;
}

.links-container {
  display: flex;
  justify-content: center;
}

a:link,
a:visited {
  text-decoration: none;
}

.link {
  font-family: "Lato", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9375rem;
  color: var(--secondary-color);
  position: relative;
  padding: 10px;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background-color: var(--secondary-color);
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.link:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

/* Mobile Styles */
@media only screen and (max-width: 1024px) {
  .navbar-container {
    display: block;
    overflow: hidden;
  }

  .logo__title {
    font-size: 25px;
  }

  .logo__subtitle {
    padding-top: 5px;
    font-size: 10px;
    left: 10%;
  }

  .links-container {
    display: none;
  }

  .menu-button {
    position: absolute;
    display: block;
    height: 100%;
    left: 5px;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
}
</style>
