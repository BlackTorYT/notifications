<template>
  <div class="app">
    <header class="header">
      <div class="header__nav">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item" id="nav__item_left">
              <img class="burger" src="./assets/burger.png" alt="menu">
              <router-link to="./">Панель управления</router-link>
            </li>
            <div class="nav__item__notification">
              <li class="nav__item">
                <img class="notification__img" src="./assets/burger.png" alt="notification">
              </li>
              <li class="nav__item" id="nav__item__exit">
                <img class="exit__img" src="./assets/burger.png" alt="exit">Выйти из аккаунта
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>

    <router-view 
      :channels="channels" 
      @updateChannel="updateChannel" 
      @createChannel="createChannel"
      @removeChannel="removeChannel" 
      @removeSelectedChannel="removeSelectedChannel" 
      :subscribers="subscribers" 
      @createSubscriber="createSubscriber"
      @removeSubscriber="removeSubscriber" 
      @removeSelectedSubscriber="removeSelectedSubscriber" 
      @updateSubscriber="updateSubscriber" 
    ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      channels: [
        { id: 1, title: "Telegram Bot", code: "TELEGRAM_BOT", mailing: "TELEGRAM_BOT", disc: "Тг бот", status: true },
        { id: 2, title: "MTS", code: "MTS_GW", mailing: "SMS", disc: "", status: true }
      ],
      subscribers: [
        { id: 1, name: "Кирилл", phone: "+79422313123", username: "apapa", tg: "13123", note: "", phoneConfirmed: true, status: true },
        { id: 2, name: "Иван", phone: "+79116241196", username: "marara", tg: "13111", note: "", phoneConfirmed: true, status: true }
      ]
    };
  },
  methods: {
    createChannel(channel) {
      this.channels.push(channel);
    },
    removeChannel(channel) {
      this.channels = this.channels.filter(c => c.id !== channel.id);
    },
    removeSelectedChannel(selectedChannelIds) {
      this.channels = this.channels.filter(channel => !selectedChannelIds.includes(channel.id));
    },
    updateChannel(updatedChannel) {
      const index = this.channels.findIndex(channel => channel.id === updatedChannel.id);
      if (index !== -1) {
        this.channels.splice(index, 1, updatedChannel);
      }
    },
    createSubscriber(subscriber) {
      this.subscribers.push(subscriber);
    },
    removeSubscriber(subscriber) {
      this.subscribers = this.subscribers.filter(s => s.id !== subscriber.id);
    },
    removeSelectedSubscriber(selectedSubscriberIds) {
      this.subscribers = this.subscribers.filter(subscriber => !selectedSubscriberIds.includes(subscriber.id));
    },
    updateSubscriber(updatedSubscriber) {
      const index = this.subscribers.findIndex(subscriber => subscriber.id === updatedSubscriber.id);
      if (index !== -1) {
        this.subscribers.splice(index, 1, updatedSubscriber);
      }
    }
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul, ul li {
  list-style: none;
}

img {
  height: 14px;
  width: 14px;
}

body {
  background-color: rgb(224, 224, 224);
}

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
  text-align: center;
  padding: 10px;
  border: 1px solid rgb(218, 218, 218);
}

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