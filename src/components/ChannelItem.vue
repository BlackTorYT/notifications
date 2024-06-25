<template>
        <tbody>
          <tr class="channel">
            <td><input type="checkbox" :checked="selected" @change="toggle"></td>
            <td>{{ channel.id }}</td>
            <td>{{ channel.title }}</td>
            <td>{{ channel.code }}</td>
            <td>{{ channel.mailing }}</td>
            <td>{{ channel.disc }}</td>
            <td>{{ channel.status }}</td>
            <td>
              <div>Изменить</div>
              <div class="channel__delete" @click="$emit('remove', channel)"><my-button><img src="../assets/trash.png" alt="">Удалить</my-button></div>
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
    channel: {
    type: Object,
    required: true
    },
    selected: {
      type: Boolean,
      required: true
    } 
  },
  methods: {
    toggle() {
      this.$emit('toggle', this.channel.id);
    }
  }
};

</script>

<style scoped>

</style>
