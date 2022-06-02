<template>
  <!-- <div @mousemove="onMouseMove">hello {{name}}</div> -->
  <div
    v-for="product in products"
    :key="product.id"
    @click="updateProduct($event, product.id)"
  >
    {{ product.name }}
  </div>
  <button v-on:click="onChangeName">Change name</button>
</template>

<script>
export default {
  name: "ButtonCustom",
  data() {
    return {
      name: "Lea",
      products: [
        {
          name: "sp 1",
          id: 1,
        },
        {
          name: "sp 2",
          id: 2,
        },
        {
          name: "sp 3",
          id: 3,
        },
      ],
    };
  },
  methods: {
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
