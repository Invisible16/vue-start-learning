<template>
  <div class="wrap-modal" :class="type" @click="$emit('onClose')">
    <div class="modal-header">
      Title:
      <p>{{ title }}</p>
    </div>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
// The $emit() function is also available on the component instance as this.$emit()
export default {
  name: "BaseModal",
  props: {
    title: { type: String, required: true },
    type: {
      validator(value) {
        return ["success", "warning", "danger", "info"].includes(value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "BaseModal.scss";
</style>
