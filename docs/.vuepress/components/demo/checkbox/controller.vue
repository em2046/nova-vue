<template>
  <section>
    <p>
      <NovaCheckbox v-model="checked" :disabled="disabled">
        {{ checked ? 'Checked' : 'Unchecked' }}
        -
        {{ disabled ? 'Disabled' : 'Enabled' }}
      </NovaCheckbox>
    </p>
    <p>
      <NovaButton @click="toggleChecked">
        {{ checked ? 'Uncheck' : 'Check' }}
      </NovaButton>
      <NovaButton @click="toggleDisabled">
        {{ disabled ? 'Enable' : 'Disable' }}
      </NovaButton>
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      disabled: false
    };
  },
  methods: {
    toggleChecked() {
      this.checked = !this.checked;
    },
    toggleDisabled() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

<style scoped>
p {
  line-height: 20px;
  margin-top: 0;
  margin-bottom: 10px;
}
</style>
