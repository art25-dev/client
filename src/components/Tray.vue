<template>
  <section class="tray">
    <p v-if="!dbInfo.status" class="tray__date">Антивирусные базы недоступны</p>
    <p v-else class="tray__date">Антивирусные базы от {{ $moment(dbInfo.date).format('l') }} г.</p>
    <router-link to="dbinfo">
      <icon class="tray__info" name="info" />
    </router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getDbInfo");
  },
  methods: {
  },
  computed: {
    dbInfo() {
      return this.$store.getters.dbInfo;
    }
  },
};
</script>

<style lang="scss" scoped>
.tray {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tray__date {
  font-size: 1rem;
  color: $color-second;
  font-family: "Roboto-Regular", "Arial", sans-serif;
  padding: 1rem 0;
  text-align: center;
  letter-spacing: 1px;
}

.tray__info {
  animation: animate_pulse2 2s infinite;
  border-radius: 50%;
}
.animate-pulse2:hover {
	animation: none;
}

@keyframes animate_pulse2 {
	0% {
		box-shadow: 0 0 0 0 rgba($color-second, 0.4);
	}
	70% {
		box-shadow: 0 0 0 10px rgba($color-second, 0);
	}
	100% {
		box-shadow: 0 0 0 0 rgba($color-second, 0);
	}
}
</style>
