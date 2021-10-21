<template>
  <div class="container">
    <div class="bg"></div>
    <span class="version">Версия - {{ version }}</span>
    <article>
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </article>
    <aside>
      <Calendar />
      <Navigation />
      <p class="tray">Антивирусные базы от 10.08.2021</p>
    </aside>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar";
import Navigation from "@/components/Navigation";
import { version } from "../package.json";

export default {
  components: {
    Navigation,
    Calendar,
  },
  data() {
    return {
      version,
    };
  },
  created() {
    this.$store.dispatch("getPostList");
    this.$store.dispatch("getNavigation");
    this.$store.commit("clearHistory");
    
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ". .";
  width: 100%;
  height: 100vh;
  overflow: hidden;
  user-select: none;
  margin: 0;
  padding: 0;
  font-family: "Roboto-Regular", "Arial", sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

.bg {
  position: fixed;
  z-index: -1;
  left: 0;
  height: 100%;
  width: 7000px;
  background: url("./assets/background.jpg") bottom left repeat-x;
  animation: bg 100s linear infinite;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
}

aside {
  background-color: rgba($color-primary, 0.8);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 2rem 2rem 0 2rem;
}

.tray {
  font-size: 1rem;
  color: $color-second;
  font-family: "Roboto-Regular", "Arial", sans-serif;
  padding: 1rem 0;
  text-align: center;

  letter-spacing: 1px;
}

.version {
  font-size: 12px;
  color: rgba($color-second, 0.3);
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes bg {
  from {
    transform: translate(0);
  }

  to {
    transform: translate(-3500px);
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}
</style>
