<template>
  <section>
    <NovaProgress
      type="circle"
      :percent="0.25"
      :width="80"
      :stroke-width="5"
    ></NovaProgress>
    <NovaProgress
      type="circle"
      :percent="1"
      :width="80"
      :stroke-width="5"
    ></NovaProgress>
    <NovaProgress
      type="circle"
      :percent="0.5"
      :show-info="false"
      :width="80"
      :stroke-width="5"
    ></NovaProgress>
  </section>
</template>
