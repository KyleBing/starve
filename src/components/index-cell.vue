<template>
    <router-link :to="'/' + tabName + '/'+ item.nameEn" class="index-item">
        <div class="icon-container">
            <img :src="itemImgPath(item.img)" :alt="item.title">
        </div>
        <img v-show="showVersion(item.version)" class="version-icon" :src="versionImgPath(item.version)" :alt="item.version">
        <h5 class="title">{{item.title}}</h5>
    </router-link>
</template>

<script>
    import config from '../config'

    export default {
        name: 'index-cell',
        props:['item'],
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
