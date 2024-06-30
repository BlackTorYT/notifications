<template>
  <form class="wrapper" @submit.prevent="handleSubmitSubcsriber" style="background-color: white;">
    <div class="wrapper__head">
      <h1>{{ isEdit ? 'Редактирование' : 'Создание' }} канала отправки</h1>
      <span>Панель управления / Каналы отправки / {{ isEdit ? 'Редактирование' : 'Создание' }} канала отправки </span>
    </div>
    <div class="name">
      Имя пользователя
      <my-input type="text" class="input" v-model="localSubscriber.name" />
      <span v-if="errors.name" class="error">{{ errors.name }}</span>
    </div>
    <div class="phone">
      Телефон
      <my-input type="text" class="input" v-model="localSubscriber.phone" />
      <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
    </div>
    <div class="username">
      Никнейм(username)
      <my-input type="text" class="input" v-model="localSubscriber.username" />
      <!-- <span v-if="errors.code" class="error">{{ errors.code }}</span> -->
    </div>
    <div class="tg">
      Telegram Chatid
      <my-input type="text" class="input" v-model="localSubscriber.tg" />
      <!-- <span v-if="errors.code" class="error">{{ errors.code }}</span> -->
    </div>
    <div class="note">
      Примечание администратора
      <my-input type="text" class="input" placeholder="Произвольное примечение для администратора" 
      v-model="localSubscriber.note" />
      <!-- <span v-if="errors.code" class="error">{{ errors.code }}</span> -->
    </div>
    <div class="phoneConfirmed">
      Телефон подтвержден?
      <select class="input" v-model="localSubscriber.phoneConfirmed">
        <option :value="true">Да</option>
        <option :value="false">Нет</option>
      </select>
    </div>
    <div class="active">
      Статус подписчика
      <select class="input" v-model="localSubscriber.status">
        <option :value="true">Включен</option>
        <option :value="false">Отключен</option>
      </select>
    </div>
    <button class="save__btn">{{ isEdit ? 'Сохранить изменения' : 'Создать' }}</button>
  </form>
</template>

<script>
export default {
  props: {
    subscriber: {
      type: Object,
      default: () => ({
        name: '',
        phone: '',
        username: '',
        tg: '',
        note: '',
        phoneConfirmed: 'Да',
        status: true
      })
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    subscribers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localSubscriber: { ...this.subscriber },
      errors: {
        name: '',
        phone: ''
      }
    };
  },
  methods: {
    handleSubmitSubcsriber() {
      this.clearErrors();

      if (!this.localSubscriber.name) {
        this.errors.name = 'Имя обязательно для заполнения';
      }

      if (!this.localSubscriber.phone) {
        this.errors.phone = 'Телефон обязателен для заполнения';
      }

      if (this.errors.name || this.errors.phone) {
        return;
      }

      if (this.isEdit) {
        this.$emit('update', this.localSubscriber);
      } else {
        this.$emit('create', { ...this.localSubscriber, id: this.getNextId() });
      }
      this.$router.push('/subscribers');
    },
    clearErrors() {
      this.errors = {
        name: '',
        phone: ''
      };
    },
    getNextId() {
      if (this.subscribers.length === 0) {
        return 1;
      }
      const maxId = Math.max(...this.subscribers.map(subscriber => subscriber.id));
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
