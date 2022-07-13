<template>
    <router-link class="content-item" :to="'/' + tabName+ '/' + category + '/' + item.name_en">
        <div class="icon-container">
            <img onerror="this.src='./src/img/pic_fail.png'" :src="itemImgPath(imgPath + item.pic)" :alt="item.name">
        </div>
        <img v-show="showVersion(item.version)" class="version-icon" :src="versionImgPath(item.version)" :alt="item.version">
        <h5 class="title">{{item.name}}</h5>
    </router-link>
</template>

<script>
    import config from '../config'

    export default {
        name: 'item-cell',
        props:['item','imgPath'],
        data(){
            return {
                tabName: this.$route.params.tab,
                category: this.$route.params.category,
            }
        },
        methods: {
            itemImgPath (imgName){
                return 'src/img/' + imgName + '@2x.png';
            },
            versionImgPath (version) {
                if (version !== config.VERSIONS.normal) {
                    return 'src/img/version/'+ version + '@2x.png'
                } else {
                    return ''
                }
            },
            showVersion (version){
                return (version !== config.VERSIONS.normal)
            }
        },
        watch:{
            '$route' (to, from) {
                this.tabName = this.$route.params.tab;
                this.category = this.$route.params.category;
            }
        },
    }
</script>
