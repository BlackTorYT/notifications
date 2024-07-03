<template>
  <tbody>
    <tr class="sub">
      <td><input type="checkbox" :checked="selected" @change="toggle"></td>
      <td>{{ sub.id }}</td>
      <td>{{ sub.subscriber }}</td>
      <td>{{ sub.type }}</td>
      <td>{{ sub.channel }}</td>
      <td>{{ statusText }}</td>
      <td>
        <router-link :to="'/subs/edit/' + sub.id">
          <button>Изменить</button>
        </router-link>
        <div class="sub__delete" @click="$emit('remove', sub)"><my-button><img src="../assets/trash.png" alt="">Удалить</my-button></div>
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
    sub: {
      type: Object,
      required: true
     },
  selected: {
    type: Boolean,
    required: true
    },
    // channels: {
    //   type: Array,
    //   required: true
    // },
    // subscribers: {
    //   type: Array,
    //   required: true
    // }
  },
  computed: {
    statusText() {
    return this.sub.status ? 'Включен' : 'Отключен';
    }
  },
  methods: {
    toggle() {
    this.$emit('toggle', this.sub.id);
    }
  }
};

</script>

<style scoped>

</style>
