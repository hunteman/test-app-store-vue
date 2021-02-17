<template>
  <div id="product-app" class="container__full">
      <v-header />
      <v-main-wrapper />
  </div>
</template>

<script>
    import vHeader from './components/v-header.vue'
    import vMainWrapper from './components/v-main-wrapper.vue'

    export default {
      name: 'ProductApp',
      components: {
        vHeader,
        vMainWrapper
      }
    }
</script>

<style lang="scss">
    .container__full {
        width: 100%;
        max-width: 360px;
        background-color: $basic_lightgray_bg;
        margin: 0 auto;
        overflow: hidden;
    }
</style>
