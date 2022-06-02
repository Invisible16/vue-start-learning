<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="onToggleModal">Open modal</button>
    <Teleport to="body">
      <BaseModal
        v-if="showModal"
        title="About page"
        :type="typeModal"
        @onClose="onToggleModal"
      >
        <template v-slot:content> <div>this í si info</div> </template>
        <template v-slot:footer>
          Footer
          <button @click="onToggleModal">Cancel</button>
        </template>
      </BaseModal>
    </Teleport>
  </div>
</template>
<script>
import BaseModal from "@/components/BaseModal";
export default {
  name: "AboutView",
  data() {
    return {
      typeModal: "info",
      showModal: false,
    };
  },
  methods: {
    onToggleModal() {
      console.log("toggle modal");
      this.showModal = !this.showModal;
    },
  },
  components: {
    BaseModal,
  },
};
</script>
