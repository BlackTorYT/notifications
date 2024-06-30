<template>
  <tbody>
    <tr class="subscriber">
      <td><input type="checkbox" :checked="selected" @change="toggle"></td>
      <td>{{ subscriber.id }}</td>
      <td>{{ subscriber.name }}</td>
      <td>{{ subscriber.phone }}</td>
      <td>{{ subscriber.tg }}</td>
      <!-- <td>{{ subscriber.disc }}</td> -->
      <td>{{ statusText }}</td>
      <td>
        <router-link :to="'/subscribers/edit/' + subscriber.id">
          <button>Изменить</button>
        </router-link>
        <div class="subscriber__delete" @click="$emit('remove', subscriber)"><my-button><img src="../assets/trash.png" alt="">Удалить</my-button></div>
      </td>
    </tr>
  </tbody>
</template>

<script>
// Компонент для отдельного канала
import MyButton from "@/components/UI/MyButton.vue";
export default {
  components: {
    MyButton
  },
  props: {
    subscriber: {
      type: Object,
      required: true
     },
  selected: {
    type: Boolean,
    required: true
    } 
  },
  computed: {
    statusText() {
    return this.subscriber.status ? 'Включен' : 'Отключен';
    }
  },
  methods: {
    toggle() {
    this.$emit('toggle', this.subscriber.id);
    }
  }
};

</script>

<style scoped>

</style>
