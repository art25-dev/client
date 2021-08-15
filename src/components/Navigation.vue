<template>
  <section class="menu">
    <h1 class="menu__title">Навигация</h1>
    <div class="menu-container__list">
      <ul class="menu__list">
        <li
          v-for="item in navigation"
          :key="item._id"
          class="menu__item"
          @click="getSubMenu(item._id, item.type)"
        >
          <p class="menu__item-text">{{ item.title }}</p>
        </li>
      </ul>
    </div>
    <div class="menu__controls">
      <icon @click="getPrevMenu()" class="menu__controls-btn" name="arrow" />
      <icon @click="getMainMenu()" class="menu__controls-btn" name="home" />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getSubMenu(id, type) {
      this.$store.dispatch("getNavigation", id);
      this.$store.commit("addHistory", id);
    },
    getPrevMenu() {
      this.$store.dispatch(
        "getNavigation",
        this.$store.getters.prevNavigation[0]
      );
      this.$store.commit("delHistory");
    },
    getMainMenu() {
      this.$store.dispatch("getNavigation");
      this.$store.commit("clearHistory");
    }
  },
  computed: {
    navigation() {
      return this.$store.getters.navigation;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  padding-bottom: 2rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: $color-second;
    display: block;
  }

  &__title {
    padding-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
    letter-spacing: 2px !important;
    font-weight: bold;
    text-transform: uppercase !important;
    color: $color-second;
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  &__controls-btn {
    width: 50px;
    height: 50px;
    transform: scaleX(-1);
    cursor: pointer;
    fill: rgba($color-second, 1);
  }
}

.menu-container__list {
  height: calc(100vh - 410px);
  margin-bottom: 2rem;
  overflow: hidden;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
  }
}

.menu__list {
  border: none;
  background: none;
  position: relative;

  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: $color-second;
    top: 0;
  }
}

.menu__item {
  position: relative;
  color: $color-second;
  padding: 0.6rem 0;
  user-select: none;
  font-size: 1.3rem;
  letter-spacing: 1px;
  opacity: 0;
  animation: 0.5s show ease-in-out forwards;

  &::after {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: $color-second;
    bottom: 0;
  }

  &::first-letter {
    text-transform: capitalize;
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
