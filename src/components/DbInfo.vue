<template>
  <div class="wrapper">
    <h1>Важно!</h1>
    <p>Дата антивирусных баз данных в открытой справочно-информационной системе (ОСИС) может отличаться<br> от даты после обновления их на ПЭВМ</p>
    <router-link class="close" to="/">
      <button>ОК</button>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: -22rem;
  background: rgba($color-second, 0.8);
  padding: 2rem;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

h1 {
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

    &::first-letter {
    text-transform: capitalize;
  }
}
 
p {
  font-size: 1.2rem;
}

.close {
  right: 0;
  align-self: flex-end;
}

button {
  margin-top: 1.2rem;
  padding: .6rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
  width: 130px;
  background-color: $color-primary;
  color: $color-second;
}
</style>
