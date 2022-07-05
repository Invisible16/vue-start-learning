<template>
  <div class="hello">
    <h1>{{ msg + name }}</h1>
    <Filter />
    <BaseModal title="Header modal" />
    <ButtonCustom />
  </div>
</template>

<script>
import ButtonCustom from "./ButtonCustom/Button.vue";
import BaseModal from "./BaseModal";
import Filter from "./Filter.vue";
export default {
  name: "HelloWorld",
  // template:
  props: {
    msg: String,
  },
  data() {
    return {
      name: "Lea",
    };
  },
  components: {
    ButtonCustom,
    BaseModal,
    Filter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
