<template>
    <div class="v-related-products">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                    <v-product-tile 
                        v-for="tile in Products" 
                        :key="tile.art"
                        v-bind:product_data="tile"
                    />
            </div>
        </div>         
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';
    import vProductTile from './v-product-tile.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "v-related-products",
        components: {
            vProductTile
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'Products'
            ]),
        },
        methods: {
            ...mapActions([
                'Get_Products_List'
            ]),
        },
        mounted() {
            new Swiper('.swiper-container', {
                speed: 400,
                slidesPerView: 3,
                spaceBetween: 10,
                slidesOffsetAfter: 130
            });

            this.Get_Products_List();
        }
    }
</script>

<style lang="scss">
    .v-related-products {
        margin-bottom: 23px;

        .swiper-container {
            width: 336px;
            height: 228px;
        }
    }
</style>