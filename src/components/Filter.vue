<template>
  <div>
    <input v-model="userId" type="number" />
    <label class="switch">
      <input type="checkbox" v-model="completed" />
    </label>
    <button @click="addNumber">Add new number</button>
  </div>
</template>

<script>
export default {
  name: "NumberSubmit",
  data() {
    return {
      userId: 0,
      completed: false,
    };
  },
  methods: {
    addNumber() {
      this.$store.commit("updateFilter", {
        userId: Number(this.userId),
        completed: this.completed,
      });
    },
  },
};
</script>
