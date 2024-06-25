<template>
  <div>
    <header class="header">
      <div class="header__nav">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item" id="nav__item_left"><img class="burger" src="./assets/burger.png" alt="menu">Панель управления</li>
            <div class="nav__item__notification">
              <li class="nav__item"><img class="notification__img" src="./assets/burger.png" alt="notification"></li>
              <li class="nav__item" id="nav__item__exit"><img class="exit__img" src="./assets/burger.png" alt="exit">Выйти из аккаунта</li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
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
