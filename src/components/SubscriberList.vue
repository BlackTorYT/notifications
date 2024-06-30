<template>
  <div class="wrapper__subscribers">
    <h1>Список подписчиков на уведомления</h1>
    <button @click="removeSelectedSubscribers">Удалить</button>
    <router-link to="/subscribers/create">
    <button>Создать</button>
    </router-link>
    <table>
      <thead>
        <tr>
          <th class="subscriber__checkbox"><input type="checkbox" @change="toggleAll"></th>
          <th class="subscriber__id">ID</th>
          <th class="subscriber__name">Имя</th>
          <th class="subscriber__phone">Телефон</th>
          <th class="subscriber__tg">Telegram Chatid</th>
          <th class="subscriber__status">Статус</th>
          <th class="subscriber__action">Действия</th>
        </tr>
      </thead>
      <subscriber-item v-for="subscriber in subscribers" v-bind:subscriber="subscriber" v-bind:key="subscriber.id" 
        @remove="$emit('remove', subscriber)" :selected="selectedSubscribers.includes(subscriber.id)"
        @toggle="toggleSelection">
      </subscriber-item>
    </table>
  </div>
</template>

<script>
// Компонент для списка subscriber
import SubscriberItem from "@/components/SubscriberItem.vue"
export default {
components: {SubscriberItem},
props: {
  subscribers: {
    type: Array,
    required: true
  }
},
data() {
  return {
    selectedSubscribers: []
  };
},
methods: {
  toggleSelection(subscriberId) {
    if (this.selectedSubscribers.includes(subscriberId)) {
      this.selectedSubscribers = this.selectedSubscribers.filter(id => id !== subscriberId);
    } else {
      this.selectedSubscribers.push(subscriberId);
    }
  },
  toggleAll(event) {
    if (event.target.checked) {
      this.selectedSubscribers = this.subscribers.map(subscriber => subscriber.id);
    } else {
      this.selectedSubscribers = [];
    }
  },
  removeSelectedSubscribers() {
    this.$emit('removeSelected', this.selectedSubscribers);
    this.selectedSubscribers = [];
  }
}
};
</script>

<style scoped>
table {
width: 100%;
border-top: 7px solid rgb(218, 218, 218);
border-collapse: collapse;
text-align: center;
margin-bottom: 20px;
border: 1px solid #dddddd;
}

td {
text-align: left;
padding: 10px;
border: 1px solid rgb(218, 218, 218);
}

th {
text-align: left;
padding: 10px;
border: 1px solid rgb(218, 218, 218);
}

.wrapper__subscribers {
background-color: white;
}

.subscribers__checkbox {
width: 36px;
}

.subscriber__id {
width: 40px;
}

.subscriber__name {
width: 150px;
}

.subscriber__code {
width: 200px;
}

.subscriber__tg {
width: 200px;
}

.subscriber__status {
width: 100px;
}

.subscriberl__action {
width: 150px;
}
</style>
