<template>
  <!-- <div @mousemove="onMouseMove">hello {{name}}</div> -->
  <div
    v-for="product in products"
    :key="product.id"
    @click="updateProduct($event, product.id)"
  >
    {{ product.title }} - {{ product.userId }}
  </div>
  <button v-on:click="onChangeName">Change name</button>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ButtonCustom",
  data() {
    return {
      name: "Lea",
    };
  },
  created() {
    console.log(this.$store.state.todos);
    this.getData(2);
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      console.log("sub", mutation, state);
      if (mutation.type === "updateFilter") {
        console.log(`Updating to ${state.filterObj.userId}`);
        this.getData(state.filterObj.userId);
      }
    });
  },
  beforeUnmount() {
    this.unsubscribe();
  },
  computed: {
    ...mapState({
      // arrow functions can make the code very succinct!
      products: (state) => state.todos,
    }),
  },
  methods: {
    ...mapActions({
      getData: "fetchTodos", // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    onChangeName() {
      this.name = "Phuong";
    },
    onMouseMove(e) {
      console.log(e);
    },
    updateProduct(event, productId) {
      console.log(event, productId);
    },
  },
};
</script>

<style></style>
