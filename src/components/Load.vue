<template>
  <div class="wrapper">
    <h1>Подключите USB-накопитель</h1>
    <div class="info-container">
    <icon class="usb" name="usb"/>
    <div class="info">
      <p class="info__serial">Серийный номер: <span>MUNJYO12</span></p>
      <p class="info__space">Всего: <span>8024 МБ</span></p>
      <p class="info__free-space">Свободно: <span>2224 МБ</span></p>
      <hr noshade>
      <p class="info__file-size">Размер файла: <span>1024 МБ</span></p>
      <button>Загрузить</button>
    </div>
    </div>
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
  width: 600px;
  margin-top: -15rem;
  background: rgba($color-second, 0.8);
  padding: 2rem 0rem 2rem 0rem;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

h1 {
  padding-bottom: 0.4rem;
  margin-bottom: 1rem;
  color: $color-danger;
  text-align: center;
}

.usb {
  width: 150px;
  height: 250px;
  fill: #2c382c;
  margin-right: 1.5rem;
}

.info-container {
  display: flex;
  padding: 0 2rem;
}

.info {
  height: 250px;
  display: flex;
  flex-direction: column;
  & p {
    font-size: 1.5rem;
    margin-bottom: .5rem;
    color: $color-primary;
  }
}

hr {
  margin-bottom: .5rem;
  border: none;
  height: 5px;
  background-color: $color-second;
}

button {
  margin-top: 1.2rem;
  padding: .6rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
  width: 150px;
  background-color: $color-primary;
  color: $color-second;
}

</style>
