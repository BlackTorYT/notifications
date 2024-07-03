<template>
  <div class="wrapper__subs">
    <h1>Управление подписками</h1>
    <button @click="removeSelectedSubs">Удалить</button>
    <router-link to="/subs/create">
    <button>Создать</button>
    </router-link>
    <table>
      <thead>
        <tr>
          <th class="sub__checkbox"><input type="checkbox" @change="toggleAll"></th>
          <th class="sub__id">ID</th>
          <th class="sub__channel">Идентификатор канала</th>
          <th class="sub__subscriber">Идентификатор подписчика</th>
          <th class="sub__type">Тип события</th>
          <th class="sub__status">Подписка активна?</th>
          <th class="sub__action">Действия</th>
        </tr>
      </thead>
      <sub-item v-for="sub in subs" v-bind:sub="sub" v-bind:key="sub.id" 
        @remove="$emit('remove', sub)" :selected="selectedSubs.includes(sub.id)"
        @toggle="toggleSelection">
      </sub-item>
    </table>
  </div>
</template>

<script>
// Компонент для списка subscriber
import SubItem from "@/components/SubItem.vue"
export default {
components: {SubItem},
props: {
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
    selectedSubs: []
  };
},
methods: {
  toggleSelection(subId) {
    if (this.selectedSubs.includes(subId)) {
      this.selectedSubs = this.selectedSubs.filter(id => id !== subId);
    } else {
      this.selectedSubs.push(subId);
    }
  },
  toggleAll(event) {
    if (event.target.checked) {
      this.selectedSubs = this.subs.map(sub => sub.id);
    } else {
      this.selectedSubs = [];
    }
  },
  removeSelectedSubs() {
    this.$emit('removeSelected', this.selectedSubs);
    this.selectedSubs = [];
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

.wrapper__subs {
background-color: white;
}

.sub__checkbox {
width: 36px;
}

.sub__id {
width: 40px;
}

.sub__subscriber {
width: 150px;
}

.sub__channel {
width: 200px;
}

.sub__type {
width: 200px;
}

.subscriber__status {
width: 100px;
}

.subscriberl__action {
width: 150px;
}
</style>
