<template>
  <section class="calendar" v-cloak>
    <div class="clock">
      <span class="hour">{{ $moment(dateNow).format("HH") }}</span>
      <span class="dots">:</span>
      <span class="minute">{{ $moment(dateNow).format("mm") }}</span>
    </div>
    <div class="date">
      <span class="day">{{ $moment(dateNow).format("dddd") }}</span>
      <span class="slash">/</span>
      <span class="month">{{ $moment(dateNow).format("LL") }}</span>
    </div>
    <icon class="gerb" name="gerb" />
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getDate");
        setInterval(() => {
      this.$store.dispatch("getDate");
    }, 60000);
  },
  computed: {
    dateNow() {
      if(typeof(this.$store.getters.dateNow) != 'number') {
        return 0
      } else {
        return this.$store.getters.dateNow;
      }
      
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  color: $color-second;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
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

.gerb {
  position: absolute;
  top: 0;
  right: 0;
}

.clock {
  font-size: 5rem;
  display: block;
  font-family: "Roboto-Black", "Arial", sans-serif;
}

.dots {
  margin: 0 0.5rem;
  animation: 1.5s show infinite ease forwards;
}

.date {
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: "Roboto-Regular", "Arial", sans-serif;
}

.slash {
  margin: 0 0.3rem;
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
