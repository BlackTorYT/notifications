<template>
  <form class="wrapper" @submit.prevent="handleSubmitSub" style="background-color: white;">
    <div class="wrapper__head">
      <h1>{{ isEdit ? 'Редактирование' : 'Создание' }} канала отправки</h1>
      <span>Панель управления / Каналы отправки / {{ isEdit ? 'Редактирование' : 'Создание' }} канала отправки </span>
    </div>
    <div class="subscriber">
      Подписчик на рассылку
      <select class="input" v-model="localSub.subscriber">
        <option v-for="subscriber in subscribers" :key="subscriber.id" :value="subscriber.name">
          {{ subscriber.name }} ({{ subscriber.id }})
        </option>
      </select>
      <span v-if="errors.subscriber" class="error">{{ errors.subscriber }}</span>
    </div>
    <div class="type">
      Тип события
      <my-input type="text" class="input" v-model="localSub.type" />
      <span v-if="errors.type" class="error">{{ errors.type }}</span>
    </div>
    <div class="channel">
      Способ уведомления
      <select class="input" v-model="localSub.channel">
        <option v-for="channel in channels" :key="channel.id" :value="channel.title">
          {{ channel.title }}
        </option>
      </select>
    </div>
    <div class="active">
      Канал активен?
      <select class="input" v-model="localSub.status">
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
    sub: {
      type: Object,
      default: () => ({
        subscriber: '',
        type: '',
        channel: '',
        status: true
      })
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    subs: {
      type: Array,
      required: true
    },
    channels: {
      type: Array,
      required: true
    },
    subscribers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localSub: { ...this.sub },
      errors: {
        subscriber: '',
        type: ''
      }
    };
  },
  methods: {
    handleSubmitSub() {
      this.clearErrors();
      
      if (!this.localSub.subscriber) {
        this.errors.subscriber = 'Имя обязательно для заполнения';
      }

      if (!this.localSub.type) {
        this.errors.type = 'Телефон обязателен для заполнения';
      }

      if (this.errors.subscriber || this.errors.type) {
        return;
      }

      if (this.isEdit) {
        this.$emit('update', this.localSub);
      } else {
        this.$emit('create', { ...this.localSub, id: this.getNextId() });
      }
      this.$router.push('/subs');
    },
    clearErrors() {
      this.errors = {
        subscriber: '',
        type: ''
      };
    },
    getNextId() {
      if (this.subs.length === 0) {
        return 1;
      }
      const maxId = Math.max(...this.subs.map(sub => sub.id));
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
