<template>
  <section>
    <NovaButton @click="showModal">
      Open Modal
    </NovaButton>
    <NovaModal
      title="Basic Modal"
      v-model="state.visible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </NovaModal>
  </section>
</template>

<script>
import { reactive } from '@vue/composition-api';

export default {
  setup() {
    const state = reactive({
      visible: false
    });

    function showModal() {
      state.visible = true;
    }

    function handleOk(e) {
      console.log(e);
      state.visible = false;
    }

    function handleCancel(e) {
      console.log(e);
      state.visible = false;
    }

    return {
      state,
      showModal,
      handleOk,
      handleCancel
    };
  }
};
</script>
