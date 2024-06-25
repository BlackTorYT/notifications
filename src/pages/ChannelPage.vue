<template>
  <div>

    <channel-form @create="createChannel"/>
    <channel-list v-bind:channels="channels" @remove="removeChannel"/>


  </div>
</template>

<script>
import ChannelList from "@/components/ChannelList.vue";
import ChannelForm from "@/components/ChannelForm.vue";
export default {
  components: {
    ChannelList, ChannelForm
  },
  name: 'App',
  data() {
    return {
      channels: [
        {id: 1, title: "Telegram Bot", code: "TELEGRAM_BOT", mailing: "TELEGRAM_BOT", disc: "Тг бот", status: true},
        {id: 2, title: "MTS", code: "MTS_GW", mailing: "SMS", disc: "", status: true}
      ]
    };
  },
  methods: {
    createChannel(channel) {
      this.channels.push(channel);
    },
    removeChannel(channel) {
      this.channels = this.channels.filter(c => c.id !== channel.id) //в результат. массив попадают посты, все проме того, который мы пытаемся удалить
    }
  }
};
</script>

<style>


.header {
  height: 56px;
  padding: 16px;
  background-color: white;
}

.nav__list {
  display: flex;
  justify-content: space-between;
}

.nav__item__notification {
  display: flex;
  justify-content: space-between;
  width: 230px;
}

#nav__item_left {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.exit__img {
  margin-right: 10px;
}

.nav__item__exit {
  width: 200px;
}




</style>
