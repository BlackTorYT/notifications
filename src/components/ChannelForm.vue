<template>
    <form class="wrapper" @submit.prevent style="background-color: white;">
      <div class="wrapper__head">
        <h1>Создание канала отправки: </h1>
        <span>Панель управления / Каналы отправки / Создание канала отправки </span>
      </div>
      <div class="name">Название <my-input type="text" class="input" v-model="channel.title"/></div>
      <div class="uniqueCode">Уникальный код поля <my-input type="text" class="input" v-model="channel.code"/></div>
      <div class="handler">Обработчик <my-input type="text" class="input" v-model="channel.mailing"/></div>
      <div class="disc">Описание <my-input type="text" class="input" v-model="channel.disc"/></div>
      <div class="json">Настройки JSON <my-input type="text" class="input" v-model="channel.json"/></div>
      <div class="active">Канал активен? <my-input type="text" class="input" v-model="channel.status"/></div>
      <button class="save__btn" @click="createChannel">Сохранить</button>
    </form>
</template>

<script>
// Компонент для формы по созданию каналов

export default {

  data() {
    return {
      channel: {
      title: '',
      code: '',
      mailing: '',
      disc: '',
      json: '',
      status: ''
      }
    }
  },
  methods: {
    createChannel() {
      const newChannel = { ...this.channel, id: Date.now() };
      this.$emit('create', newChannel);
      this.resetForm();
    },
    resetForm() {
      this.channel = {
        title: '',
        code: '',
        mailing: '',
        disc: '',
        json: '',
        status: ''
      };
    }
  }
};
</script>

<style scoped>
.save__btn {
  display: block;
  width: 100%;
  background-color: #3386f3;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.input {
  /* width: 100%;
  border: 1px solid rgb(218, 218, 218); */
  margin-bottom: 10px;
  padding: 8px;
}
</style>
