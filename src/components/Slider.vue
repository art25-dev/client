<template>
  <section class="slider">
    <ul class="slider__list">
      <li
        ref="slide"
        class="slider__item"
      >
        <h1 class="slider__item-title">{{ first.title }}</h1>
        <div class="slider__item-content">{{ first.content }}</div>
        <span class="slider__item-date">{{ first.date }}</span>
      </li>
    </ul>
    
    <ul class="dot__list">
      <li
        @click="goSlide(post._id)"
        ref="dot"
        class="dot__item"
        v-for="(post) in postList"
        :key="post._id"
      ></li>
    </ul>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  beforeCreate() {
    this.$store.dispatch("getPostList")
  },
  destroyed() {},
  computed: {
    postList() {
      return this.$store.getters.postList;
    },
    first() {
      return this.$store.getters.first;
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
}

.slider__list {
  display: flex;
  position: relative;
  flex: 1;
  list-style: none;
  background: rgba($color-second, 0.8);
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px 0 rgba(0, 0, 0, 0.2);
}


.slider__item {
  flex-basis: 100%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  opacity: 1;

  &--active {
    flex-direction: column;
    display: flex;
    animation: show 1s ease-in-out forwards;
  }
}

.slider__item-title {
  display: block;
  padding-bottom: 0.3rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: $color-primary;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: $color-danger;
    display: block;
  }
}

.slider__item-file {
  display: block;
  border-radius: 5px;
}

.slider__item-content {
  display: block;
  flex: 1;

}

.slider__item-date {
  margin-top: 1rem;
  text-align: right;
  color: $color-primary;
  font-family: "Roboto-Bold", "Arial", sans-serif;
}

.dot__list {
  margin: 2rem 0 0 0;
  display: flex;
  list-style: none;
  width: 300px;
  justify-content: center;
}

.dot__item {
  position: relative;
  cursor: pointer;
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }

  &::before {
    display: block;
    content: "";
    width: 20px;
    height: 20px;
    border: 3px rgba($color-second, 0.8) solid;
    border-radius: 50%;
  }

  &--active {
    &::after {
      position: absolute;
      display: block;
      content: "";
      width: 15px;
      height: 15px;
      background-color: rgba($color-second, 0.8);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: show 0.5s ease-in-out forwards;
    }
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
</style>

