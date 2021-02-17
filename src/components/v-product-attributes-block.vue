<template>
    <div class="v-product-attributes-block">
        <h3 class="v-product-attributes-block__title_attribute_group">Nutrition</h3>
        <p class="v-product-attributes-block__text">Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus</b>.</p>

        <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        <hr>

        <div class="v-product-attributes-block__spoiler_nutrition_attributes_block">
            <ul class="spoiler__attributes_wrapper">
                <li>
                    <span class="title__nutrition__count">28</span>
                    <span class="nutrition__attribute__name">Kkal.</span>
                    <div class="nutrition__attribute_img_wrapper">
                        <img src="../assets/img/spoiler_attr_img1.png">
                        <img src="../assets/img/spoiler_attr_img2.png">
                    </div>
                </li>
                <li>
                    <span class="title__nutrition__count">1.3 <small>g</small></span>
                    <span class="nutrition__attribute__name">Proteins</span>
                    <div class="nutrition__attribute_img_wrapper">
                        <img src="../assets/img/spoiler_attr_img1.png">
                    </div>
                </li>
                <li>
                    <span class="title__nutrition__count">0 <small>g</small></span>
                    <span class="nutrition__attribute__name">Fats</span>
                    <div class="nutrition__attribute_img_wrapper">
                        <img src="../assets/img/spoiler_attr_img1.png">
                    </div>
                </li>
                <li>
                    <span class="title__nutrition__count">28</span>
                    <span class="nutrition__attribute__name">Сarbs</span>
                    <div class="nutrition__attribute_img_wrapper">
                        <img src="../assets/img/spoiler_attr_img1.png">
                    </div>
                </li>
                <li>
                    <span class="title__nutrition__count">6,4 <small>mg</small></span>
                    <span class="nutrition__attribute__name">Niacin</span>
                    <div class="nutrition__attribute_img_wrapper">
                        <img src="../assets/img/spoiler_attr_img1.png">
                    </div>
                </li>
                <li>
                    <span class="title__nutrition__count">0,8 <small>g</small></span>
                    <span class="nutrition__attribute__name">Vitamin B6</span>
                    <div class="nutrition__attribute_img_wrapper">
                        <img src="../assets/img/spoiler_attr_img1.png">
                    </div>
                </li>
                <li>
                    <span class="title__nutrition__count">0 <small>g</small></span>
                    <span class="nutrition__attribute__name">Fats</span>
                    <div class="nutrition__attribute_img_wrapper">
                        <img src="../assets/img/spoiler_attr_img1.png">
                    </div>
                </li>
                <li>
                    <span class="title__nutrition__count">28</span>
                    <span class="nutrition__attribute__name">Сarbs</span>
                    <div class="nutrition__attribute_img_wrapper">
                        <img src="../assets/img/spoiler_attr_img1.png">
                    </div>
                </li>

            </ul>

            <div class="hide_or_show__action_block" @click="spoilerToggle">
                <span class="action__title">{{ isShow ? 'Hide' : 'Show' }}</span>
                <span class="action__arrow"><img src="../assets/img/arrow.png" alt="arrow"></span>
            </div>
        </div>
        <hr>
        <h3 class="v-product-attributes-block__title_attribute_group">Ingridients</h3>
        <p class="v-product-attributes-block__text">
            Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus</b>.
        </p>
        <hr>
        <h3 class="v-product-attributes-block__title_attribute_group">Other</h3>
        <div class="v-product-attributes-block__other__attributes">
            <span class="other__attribute__name">Страна производства</span>
            <span class="other__attribute__value">Россия</span>
        </div>
        <div class="v-product-attributes-block__other__attributes">
            <span class="other__attribute__name">Состав</span>
            <span class="other__attribute__value">цельное молоко</span>
        </div>
        <div class="v-product-attributes-block__other__attributes">
            <span class="other__attribute__name">Срок годности</span>
            <span class="other__attribute__value">12 дн.</span>
        </div>
        <div class="v-product-attributes-block__other__attributes">
            <span class="other__attribute__name">Изготовитель</span>
            <span class="other__attribute__value">ОАО "Компания "Юнимилк"</span>
        </div>
        <div class="v-product-attributes-block__other__attributes">
            <span class="other__attribute__name">Жирность</span>
            <span class="other__attribute__value">4.5 %</span>
        </div>
        <div class="v-product-attributes-block__other__attributes">
            <span class="other__attribute__name">Содержание лактозы</span>
            <span class="other__attribute__value">обычное (более 1% лактозы)</span>
        </div>
        <div class="v-product-attributes-block__other__attributes">
            <span class="other__attribute__name">Витаминизированное/ обогащенное</span>
            <span class="other__attribute__value">нет</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-product-attributes-block",
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            spoilerToggle() {
                document.querySelector('.spoiler__attributes_wrapper').classList.toggle('hide');
                document.querySelector('span.action__arrow').classList.toggle('hide');
                return this.isShow = !this.isShow;
            }
        }
    }
</script>

<style lang="scss">
.v-product-attributes-block {
    @include tile;
    align-items: flex-start;
    padding: 1rem;
    color: #999999;
    font-size: 12px;

    &__title_attribute_group {
        @include attributes_title;
    }

    &__text {
        text-align: justify;
        margin-bottom: 16px;

        b {
            color: #333333;
        }
    }

    ul {
        margin-left: 1rem;
        margin-bottom: 20px;

        li {
            margin-bottom: 4px;
        }

        li::marker {
            color: #333333;
        }
    }

    hr {
        width: 100%;
        color: $basic_lightgray_bg;
        opacity: 0.4;
    }

    &__spoiler_nutrition_attributes_block {
        width: 100%;

        .spoiler__attributes_wrapper {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            list-style-type: none;
            margin: 0;
            margin-top: 20px;
            height: auto;
            transition: all 0.5s ease-in-out;

            li {
                width: calc(25% - 12px);
                display: flex;
                flex-direction: column;
                align-items: center;

                .title__nutrition__count {
                    font-size: 18px;
                    font-weight: 500;
                    color: #333333;
                }

                .nutrition__attribute__name {
                    font-size: 11px;
                    margin: 2px 0 4px;
                }

                .nutrition__attribute_img_wrapper {
                    display: flex;
                }
            }
        }

        .spoiler__attributes_wrapper.hide {
            * {
                margin: 0;
                padding: 0;
                height: 0;
                opacity: 0;
                visibility: hidden;
            }
            height: 0;
            margin: 0;
        }

        .hide_or_show__action_block {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            cursor: pointer;

            .action__title {
                font-size: 14px;
                color: $basic_orange_color;
                font-weight: bold;
                margin-right: 10px;
            }

            .action__arrow {
                display: flex;
                align-items: center;
                transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
            }

            .action__arrow.hide {
                transform: rotate(180deg);
            }
        }
    }

    &__other__attributes {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 14px;

        .other__attribute__value {
            text-align: right;
            color: #333333;
        }
    }
}
</style>