<template>
  <div>
    <h1>Панель управления</h1>
    <router-link to="./channels">Каналы отправки сообщений</router-link>
    <router-link to="./subscribers">Каналы подписчиков</router-link>
    <router-link to="./subs">Управление подписками</router-link>
  </div>
</template>

<script>

export default {
  name: 'MainPage'
};
</script>

<style scoped>

</style>
