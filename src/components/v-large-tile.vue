<template>
    <div class="v-large-tile">
        <div class="v-large-tile__header">
            <div class="v-large-tile__header_icons_group">
                <img class="v-large-tile__header_icons_group__icon-item" src="../assets/img/tile_header_icon_1.png" alt="photo">
                <img class="v-large-tile__header_icons_group__icon-item" src="../assets/img/tile_header_icon_2.png" alt="photo">
                <img class="v-large-tile__header_icons_group__icon-item" src="../assets/img/tile_header_icon_3.png" alt="photo">
                <span>+3</span>
            </div>

            <img class="v-large-tile__header_like-icon_light" @click="isLikedAction" v-bind:src="isLiked ? require('../assets/img/like_icon_active_black.png') : require('../assets/img/like_icon.png')" alt="photo">
        </div>

        <img src="../assets/img/milk_img.jpg" alt="photo" class="v-large-tile__product-image">

        <div class="v-large-tile__dots">
            <span class="active"></span>
            <span></span>
            <span></span>
        </div>

        <p class="v-large-tile__product-title">
            Just Milk Semi-Skimmed 6 x 1L (Case of 2)
        </p>
        <p class="v-large-tile__product-subtitle-light">
            1 pc / £1.59
        </p>

        <div class="v-large-tile__product__add_to_cart_block">
            <span class="product__cost">&pound;1.59</span>

            <div class="add_to_cart_block">
                <div v-if="quantity" class="is_quantity_count__wrapper">
                    <span class="delete__product" @click="quantity = 0"><img src="../assets/img/delete_product_icon.png" alt="photo"></span>
                    <span class="quantity">{{ quantity }}</span>
                </div>
                <span v-else class="is_quantity_add">Add</span>


                <span class="add__product__increment"  @click="quantity++"><img src="../assets/img/plus_icon.png" alt="photo"></span>
            </div>
        </div>

        <div class="v-large-tile__product__attribute-link">
            <a href="javascript: void(0);">Nutrition</a>
            <a href="javascript: void(0);">Ingredients</a>
            <a href="javascript: void(0);">Other</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-large-tile",
        data() {
            return {
                isLiked: false,
                quantity: 1,
            }
        },
        methods: {
            isLikedAction() {
                this.isLiked = !this.isLiked;
            }
        }
    }
</script>

<style lang="scss">
    .v-large-tile {
        @include tile;
        width: 100%;
        padding: 1rem;
        margin-bottom: $margin_bottom_tile;

        &__header {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: $margin_bottom_tile;

        &_icons_group {
            color: $basic_gray_color;
            font-size: 10px;
            line-height: 24px;
            transform: translateX(100%);

            &__icon-item {
                width: 24px;
                height: 24px;
                margin-right: $margin_right_tile;
            }

            span {
                display: inline-block;
                vertical-align: top;
            }
        }

            &_like-icon_light {
                width: 20px;
                height: 20px;
                margin-left: auto;
                align-self: flex-start;
            }
        }

        &__product-image {
            margin-bottom: $margin_bottom_tile;
        }

        &__dots {
            display: inline-block;
            margin: 0 auto;
            margin-bottom: $margin_bottom_tile;

            span {
                display: inline-block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: $basic_gray_color;
                margin-right: $margin_right_tile;
            }

            span.active {
                width: 17px;
                background: #000;
                border-radius: 3px;
            }
        }

        &__product-title {
            font-size: 16px;
            font-weight: 600;
        }

        &__product-subtitle-light {
            font-size: 16px;
            font-weight: 500;
            margin-right: auto;
            color: $basic_gray_color;
            margin-top: $margin_bottom_tile;
        }

        .v-large-tile__product__add_to_cart_block {
            width: 100%;
            height: 54px;
            border-bottom: 1px solid #EBEBEB;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: $margin_bottom_tile;

            .product__cost {
                line-height: 36px;
                font-family: 'Mukta', sans-serif;
                font-weight: 700;
                font-size: 30px;
            }

            .add_to_cart_block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 40%;

                .quantity {
                    font-weight: 500;
                    font-size: 16px;
                    margin-bottom: 3px;
                }

                img {
                    cursor: pointer;
                }

                .is_quantity_count__wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 50%;
                }

                .is_quantity_add {
                    font-size: 14px;
                    font-weight: 700;
                    color: $basic_orange_color;
                    width: 100%;
                    text-align: right;
                    margin-right: 1rem;
                }
            }
        }

        &__product__attribute-link {
            width: 100%;
            display: flex;
            justify-content: space-between;
            line-height: 20px;
            font-size: 14px;
            font-weight: 700;

            a {
                text-decoration: none;
                color: $basic_orange_color;
                cursor: pointer;
            }
        }
    }
</style>