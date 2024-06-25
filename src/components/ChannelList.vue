<template>
    <div class="wrapper__channels">
      <h1>Каналы отправки уведомлений</h1>
      <table>
        <thead>
          <tr>
            <th class="channel__checkbox"><input type="checkbox"></th>
            <th class="channel__id">ID</th>
            <th class="channel__name">Название</th>
            <th class="channel__code">Код</th>
            <th class="channel__mailing">Шлюз рассылки</th>
            <th class="channel__disc">Описание</th>
            <th class="channel__status">Статус</th>
            <th class="channel__action">Действия</th>
          </tr>
        </thead>
        <channel-item v-for="channel in channels" v-bind:channel="channel" v-bind:key="channel.id" @remove="$emit('remove', channel)"></channel-item>
      </table>
    </div>
</template>

<script>
// Компонент для списка каналов
import ChannelItem from "@/components/ChannelItem.vue"
export default {
  components: {ChannelItem},
  props: {
    channels: {
      type: Array,
      required: true
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

.wrapper__channels {
  background-color: white;
}

.channel__checkbox {
  width: 36px;
}

.channel__id {
  width: 40px;
}

.channel__name {
  width: 150px;
}

.channel__code {
  width: 200px;
}

.channel__mailing {
  width: 200px;
}

.channel__status {
  width: 100px;
}

.channel__action {
  width: 150px;
}
</style>
