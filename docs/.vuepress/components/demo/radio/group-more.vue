<template>
  <NovaRadioGroup v-model="value" class="group-more">
    <NovaRadio value="apple">Apple</NovaRadio>
    <NovaRadio value="peach">Peach</NovaRadio>
    <NovaRadio value="orange">Orange</NovaRadio>
    <NovaRadio value="more">
      More...
      <NovaInput v-show="value === 'more'" class="more-input" type="text" />
    </NovaRadio>
  </NovaRadioGroup>
</template>

<script>
export default {
  data() {
    return {
      value: 'apple'
    };
  }
};
</script>

<style scoped>
.group-more .nova-radio {
  display: block;
}

.more-input {
  width: 100px;
  margin: -5px 0 -5px 5px;
}
</style>
