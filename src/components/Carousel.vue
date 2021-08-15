<template>
  <div class="slider">
    <carousel
      :autoplay="60000"
      :itemsToShow="1"
      :wrap-around="true"
      :transition="0"
    >
      <slide v-for="post in postList" :key="post._id">
        <h1 class="slider__item-title">{{ post.title }}</h1>
        <div class="slider__item-content">{{ post.content }}</div>
        <span class="slider__item-date">{{ post.date }}</span>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>


<script>
import { Carousel, Slide, Pagination } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  computed: {
    postList() {
      return this.$store.getters.postList;
    },
  },
};
</script>

<style lang="scss">
.slider {
  width: 100%;
  height: 100%;
}

.slider__item-title {
  display: block;
  padding-bottom: 0.3rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: $color-primary;
  position: relative;
  text-align: left;

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
  text-align: justify;
  flex: 1;
}

.slider__item-date {
  margin-top: 1rem;
  text-align: right;
  color: $color-primary;
  font-family: "Roboto-Bold", "Arial", sans-serif;
}

.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.carousel * {
  box-sizing: border-box;
}

.carousel__track {
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
}

.carousel__viewport {
  overflow: hidden;
  height: 100%;
}
.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 25px;
}
.carousel__pagination-button {
  position: relative;
  margin: 5px 10px;
  width: 26px;
  height: 26px;
  border: 2px rgba($color-second, 0.8) solid;
  border-radius: 50%;
  cursor: pointer;
  background: none;
}

.carousel__pagination-button--active {
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
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  &--active {
    border-radius: 5px;
    background: rgba($color-second, 0.8);
    animation: show 1s ease-in-out forwards;
  }
}
</style>
