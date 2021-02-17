<template>
    <div class="swiper-slide v-product-tile">
        <img class="v-product-tile__header_like-icon_light" @click="isLikedAction" v-bind:src="isLiked ? require('../assets/img/like_icon_active_black.png') : require('../assets/img/like_icon.png')" alt="photo">
        <img :src="require('../assets/img/' + product_data.image)" alt="photo" class="v-product-tile__product-image">
        <p class="v-product-tile__product-title">
            {{ product_data.name }}
        </p>
        <p class="v-product-tile__product-subtitle-light">
            1 pc / £{{ product_data.cost }}
        </p>
        <div class="v-product-tile__product__add_to_cart_block">
            <span class="product__cost">&pound;{{ product_data.cost }}</span>
            <div class="add_to_cart_block">
                <div v-if="quantity" class="is_quantity_count__wrapper">
                    <span class="delete__product" @click="quantity = 0"><img src="../assets/img/delete_product_icon.png" alt="photo"></span>
                    <span class="quantity">{{ quantity }}</span>
                </div>
                <span v-else class="is_quantity_add">Add</span>
                <span class="add__product__increment"  @click="quantity++"><img src="../assets/img/plus_icon.png" alt="photo"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-product-tile",
        props: {
            product_data: {
            type: Object,
            default: () => {}
            }
        },
        data() {
            return {
                isLiked: false,
                quantity: 1,
            }
        },
        methods: {
            isLikedAction() {
                this.isLiked = !this.isLiked;
            },
        }
    }
</script>

<style lang="scss">
    .v-product-tile {
        @include tile;
        padding: 1rem 0.5rem;
        width: 140px !important;
        margin-right: 1rem;
        cursor: pointer;

        &__header_like-icon_light {
            position: absolute;
            top: 9px;
            right: 9px;
            width: 16px;
        }

        &__product-image {
            width: 100px;
            min-height: 80px;
            max-height: 80px;
            margin-bottom: $margin_bottom_tile;
        }

        &__product-title {
            font-size: 13px;
            font-weight: 500;
            height: 36px;
            overflow: hidden;
        }

        &__product-subtitle-light {
            font-size: 12px;
            font-weight: 500;
            margin-right: auto;
            color: $basic_gray_color;
            margin-top: 4px;
        }

        .v-product-tile__product__add_to_cart_block {
            width: 100%;
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .product__cost {
                line-height: 36px;
                font-family: 'Mukta', sans-serif;
                font-weight: 700;
                font-size: 16px;
            }

            .add_to_cart_block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 60%;

                .quantity {
                    font-weight: 500;
                    font-size: 12px;
                    margin-bottom: 3px;
                }

                img {
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                }

                .is_quantity_count__wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 50%;
                }

                .is_quantity_add {
                    font-size: 12px;
                    font-weight: 700;
                    color: $basic_orange_color;
                    width: 100%;
                    text-align: right;
                    margin-right: 6px;
                    margin-bottom: 3px;
                }
            }
        }
    }
</style>