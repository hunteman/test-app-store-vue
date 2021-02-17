<template>
    <main class="v-main-wrapper">
        <v-large-tile />
        <h4 class="related__products__title">Buy with this product</h4>
        <v-related-products />
        <v-product-attributes-block />
    </main>
</template>

<script>
    import vLargeTile from './v-large-tile.vue' 
    import vRelatedProducts from './v-related-products.vue' 
    import vProductAttributesBlock from './v-product-attributes-block.vue' 

    export default {
        name: "v-main-wrapper",
        components: {
            vLargeTile,
            vRelatedProducts,
            vProductAttributesBlock
        }
    }
</script>

<style lang="scss">
    .v-main-wrapper {
        margin: -46px 24px 0 24px;
        font-family: 'Noto Sans', sans-serif;
        color: #333333;
        padding-bottom: 60px;

        .related__products__title {
            font-family: 'Mukta', sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 36px;
        }
    }
</style>