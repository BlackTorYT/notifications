<template>
  <form class="wrapper" @submit.prevent="handleSubmit" style="background-color: white;">
    <div class="wrapper__head">
      <h1>{{ isEdit ? 'Редактирование' : 'Создание' }} канала отправки</h1>
      <span>Панель управления / Каналы отправки / {{ isEdit ? 'Редактирование' : 'Создание' }} канала отправки </span>
    </div>
    <div class="name">
      Название
      <my-input type="text" class="input" v-model="localChannel.title" />
      <span v-if="errors.title" class="error">{{ errors.title }}</span>
    </div>
    <div class="uniqueCode">
      Уникальный код поля
      <my-input type="text" class="input" v-model="localChannel.code" />
      <span v-if="errors.code" class="error">{{ errors.code }}</span>
    </div>
    <div class="mailing">
      Обработчик
      <select class="input" v-model="localChannel.mailing">
        <option value="Telegram Bot">Telegram Bot</option>
        <option value="SMS">SMS</option>
      </select>
    </div>
    <div class="disc">
      Описание
      <my-input type="text" class="input" v-model="localChannel.disc" />
    </div>
    <div class="json">
      Настройки JSON
      <my-input type="text" class="input" v-model="localChannel.json" />
    </div>
    <div class="active">
      Канал активен?
      <select class="input" v-model="localChannel.status">
        <option :value="true">Да</option>
        <option :value="false">Нет</option>
      </select>
    </div>
    <button class="save__btn">{{ isEdit ? 'Сохранить изменения' : 'Создать' }}</button>
  </form>
</template>

<script>
export default {
  props: {
    channel: {
      type: Object,
      default: () => ({
        title: '',
        code: '',
        mailing: 'Telegram Bot',
        disc: '',
        json: '{ "telegram_token":""}',
        status: true
      })
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    channels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localChannel: { ...this.channel },
      errors: {
        title: '',
        code: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.clearErrors();

      if (!this.localChannel.title) {
        this.errors.title = 'Название обязательно для заполнения';
      }

      if (!this.localChannel.code) {
        this.errors.code = 'Уникальный код обязательно для заполнения';
      }

      if (this.errors.title || this.errors.code) {
        return;
      }

      if (this.isEdit) {
        this.$emit('update', this.localChannel);
      } else {
        this.$emit('create', { ...this.localChannel, id: this.getNextId() });
      }
      this.$router.push('/channels');
    },
    clearErrors() {
      this.errors = {
        title: '',
        code: ''
      };
    },
    getNextId() {
      if (this.channels.length === 0) {
        return 1;
      }
      const maxId = Math.max(...this.channels.map(channel => channel.id));
      return maxId + 1;
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
