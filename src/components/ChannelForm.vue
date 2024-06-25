<template>
  <form class="wrapper" @submit.prevent="createChannel" style="background-color: white;">
      <div class="wrapper__head">
          <h1>Создание канала отправки: </h1>
          <span>Панель управления / Каналы отправки / Создание канала отправки </span>
      </div>
      <div class="name">
          Название 
          <my-input type="text" class="input" v-model="channel.title"/>
          <span v-if="errors.title" class="error">{{ errors.title }}</span>
      </div>
      <div class="uniqueCode">
          Уникальный код поля 
          <my-input type="text" class="input" v-model="channel.code"/>
          <span v-if="errors.code" class="error">{{ errors.code }}</span>
      </div>
      <div class="mailing">
          Обработчик 
          <select class="input" v-model="channel.mailing">
              <option value="Telegram Bot">Telegram Bot</option>
              <option value="SMS">SMS</option>
          </select>
      </div>
      <div class="disc">
          Описание 
          <my-input type="text" class="input" v-model="channel.disc"/>
      </div>
      <div class="json">
          Настройки JSON 
          <my-input type="text" class="input" v-model="channel.json"/>
      </div>
      <div class="active">
          Канал активен?
          <select class="input" v-model="channel.status">
              <option :value="true">Да</option>
              <option :value="false">Нет</option>
          </select>
      </div>
      <button class="save__btn">Сохранить</button>
  </form>
</template>

<script>
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
          },
          errors: {
              title: '',
              code: ''
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
          this.clearErrors();

          if (!this.channel.title) {
              this.errors.title = 'Название обязательно для заполнения';
          }

          if (!this.channel.code) {
              this.errors.code = 'Уникальный код обязательно для заполнения';
          }

          if (this.errors.title || this.errors.code) {
              return;
          }

          const newChannelId = this.getNextId();
          const newChannel = { ...this.channel, id: newChannelId };
          this.$emit('create', newChannel);
          this.resetForm();
      },
      clearErrors() {
          this.errors = {
              title: '',
              code: ''
          };
      },
      resetForm() {
          this.channel = {
              title: '',
              code: '',
              mailing: 'Telegram Bot',
              disc: '',
              json: '{ "telegram_token":""}',
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
  margin-bottom: 10px;
  padding: 8px;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
