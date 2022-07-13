<template>
    <div class="container">
        <!--tabbar-->
        <div class="tabbar" id="tabbar">
            <router-link
                v-for="tab in tabs"
                :key="tab"
                :to="tab.route"
                :class="['tab-btn', tab.class]"
            ></router-link>
        </div>

        <!--content-->
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: "TabBar",
    data (){ // ES6 方法简写
        return {
            tabs: [
                {title: '主页', tab: 'index',         route: '/index',        class: 'tab-index'},
                {title: '制造', tab: 'crafts',        route: '/crafts',       class: 'tab-craft'},
                {title: '我的', tab: 'mine',          route: '/mine',         class: 'tab-mine'}
            ]
        }
    },
    mounted(){
    }
}
</script>

<style lang="scss">
@import "@/scss/starve.scss";
</style>

