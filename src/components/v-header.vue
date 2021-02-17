<template>
    <div id="header" class="v-header">
        <img class="v-header__img" src='../assets/img/header_arrow.png' alt="arrow">
        <h2 class="v-header__title">Milk & Cheese</h2>
    </div>
</template>
<script>
    export default {
        name: "v-header",
        methods: {
            handleScroll() {
                window.pageYOffset >= 20 ? document.getElementById('header').classList.add('sticky') : document.getElementById('header').classList.remove('sticky');
            }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>
<style lang="scss">
    .v-header {
        width: 100%;
        max-width: 360px;
        // position: fixed;
        top: 0;
        background-color: $basic_orange_color;
        border-radius: 0px 0px $radius $radius;
        padding: 14px 14px 56px;
        font-family: 'Mukta', sans-serif;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.45s cubic-bezier(0.075, 0.82, 0.165, 1);

        &__img {
            width: 14px;
            margin-right: auto;
        }

        &__title {
            margin-right: auto;
        }
    }

    .v-header.sticky {
        position: fixed;
        padding: 14px 14px 14px;
        z-index: 2;
    }
</style>