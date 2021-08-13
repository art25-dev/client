<template>
  <section class="calendar">
    <div class="clock">
      <span class="hour">{{ hour }}</span>
      <span class="dots">:</span>
      <span class="minute">{{ minute }}</span>
    </div>
    <div class="date">
      <span class="day">{{ day }}</span>
      <span class="slash">/</span>
      <span class="month">{{ month }}</span>
    </div>
    <icon class="gerb" v-on:click.shift="goAdmin" name="gerb" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      hour: 10,
      minute: 20,
      day: "пятница",
      month: "15 августа"
    };
  },
  methods: {
    goAdmin() {
      this.$router.push({ path: "/admin" });
    }
  },
  mounted() {}
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
