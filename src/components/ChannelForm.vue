<template>
    <form class="wrapper" @submit.prevent style="background-color: white;">
      <div class="wrapper__head">
        <h1>Создание канала отправки: </h1>
        <span>Панель управления / Каналы отправки / Создание канала отправки </span>
      </div>
      <div class="name">Название <my-input type="text" class="input" v-model="channel.title"/></div>
      <div class="uniqueCode">Уникальный код поля <my-input type="text" class="input" v-model="channel.code"/></div>
      <div class="mailing">Обработчик 
      <select class="input" v-model="channel.mailing">
        <option value="Telegram Bot">Telegram Bot</option>
        <option value="SMS">SMS</option>
      </select>
    </div>
      <div class="disc">Описание <my-input type="text" class="input" v-model="channel.disc"/></div>
      <div class="json">Настройки JSON <my-input type="text" class="input" v-model="channel.json"/></div>
      <div class="active">
      Канал активен?
      <select class="input" v-model="channel.status">
        <option :value="true">Да</option>
        <option :value="false">Нет</option>
      </select>
    </div>
      <button class="save__btn" @click="createChannel">Сохранить</button>
    </form>
</template>

<script>
// Компонент для формы по созданию каналов

export default {
  props: {
    channels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      channel: {
      title: '',
      code: '',
      mailing: 'Telegram Bot',
      disc: '',
      json: '{ "telegram_token":""}',
      status: true
      }
    }
  },
  methods: {
    getNextId() {
      if (this.channels.length === 0) {
        return 1;
      }
      const maxId = Math.max(...this.channels.map(channel => channel.id));
      return maxId + 1;
    },
    createChannel() {
      const newChannelId = this.getNextId();
      const newChannel = { ...this.channel, id: newChannelId };
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
        status: true
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
