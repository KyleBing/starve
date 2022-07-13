<template>
    <div class="index">
        <index-cell
                v-for="item in currentArray"
                :item="item"
                :key="item.id"
        ></index-cell>
    </div>
</template>

<script>
    import config from '../config'
    import indexCell from '../components/index-cell'

    export default {
        name: "TabList",
        components: {
            indexCell
        },
        data(){
            return {
                index: [
                    {id: 0, title: '人物', nameEn: 'characters',  img: 'category/Character',      version: config.VERSIONS.normal, link: ''},
                    {id: 1, title: '动物', nameEn: 'mobs',        img: 'category/Animal',         version: config.VERSIONS.normal, link: ''},
                    {id: 2, title: '植物', nameEn: 'plants',      img: 'category/Plant',          version: config.VERSIONS.normal, link: ''},
                    {id: 3, title: '食谱', nameEn: 'cookrecipes', img: 'category/Recipe',         version: config.VERSIONS.normal, link: ''},
                    {id: 4, title: '趣物', nameEn: 'things',      img: 'category/Eye_Bone',       version: config.VERSIONS.normal, link: ''},
                    {id: 5, title: '材料', nameEn: 'materials',   img: 'category/Cut_Grass',      version: config.VERSIONS.normal, link: ''}
                ],
                crafts: [
                    {id: 1,   nameEn: 'Tools',      title: '工具',version: config.VERSIONS.normal     ,img: 'craft/Tools',         link: ''},
                    {id: 2,   nameEn: 'Light',      title: '火源',version: config.VERSIONS.normal     ,img: 'craft/Light',         link: ''},
                    {id: 3,   nameEn: 'Survival',   title: '生存',version: config.VERSIONS.normal     ,img: 'craft/Survival',      link: ''},
                    {id: 4,   nameEn: 'Food',       title: '食物',version: config.VERSIONS.normal     ,img: 'craft/Food',          link: ''},
                    {id: 5,   nameEn: 'Structures', title: '建筑',version: config.VERSIONS.normal     ,img: 'craft/Build',         link: ''},
                    {id: 6,   nameEn: 'Fight',      title: '战斗',version: config.VERSIONS.normal     ,img: 'craft/Fight',         link: ''},
                    {id: 7,   nameEn: 'Dress',      title: '穿戴',version: config.VERSIONS.normal     ,img: 'craft/Dress',         link: ''},
                    {id: 8,   nameEn: 'Books',      title: '书籍',version: config.VERSIONS.normal     ,img: 'craft/Book',          link: ''},
                    {id: 9,   nameEn: 'Science',    title: '科学',version: config.VERSIONS.normal     ,img: 'craft/Science',       link: ''},
                    {id: 10,  nameEn: 'Refine',     title: '精炼',version: config.VERSIONS.normal     ,img: 'craft/Refine',        link: ''},
                    {id: 11,  nameEn: 'Magic',      title: '魔法',version: config.VERSIONS.normal     ,img: 'craft/Magic',         link: ''},
                    {id: 12,  nameEn: 'Ancient',    title: '远古',version: config.VERSIONS.normal     ,img: 'craft/Ancient',       link: ''},
                    {id: 13,  nameEn: 'Nautical',   title: '航海',version: config.VERSIONS.sea        ,img: 'craft/Nautical',      link: ''},
                    {id: 14,  nameEn: 'Volcanic',   title: '火山',version: config.VERSIONS.sea        ,img: 'craft/Volcanic',      link: ''},
                    {id: 15,  nameEn: 'Cartography',title: '地图',version: config.VERSIONS.together   ,img: 'craft/Cartography',   link: ''},
                    {id: 16,  nameEn: 'Shadow',     title: '暗影',version: config.VERSIONS.together   ,img: 'craft/Shadow',        link: ''},
                    {id: 17,  nameEn: 'Critters',   title: '宠物',version: config.VERSIONS.together   ,img: 'craft/Critters',      link: ''},
                    {id: 18,  nameEn: 'Offering',   title: '祈福',version: config.VERSIONS.together   ,img: 'craft/Offerings',     link: ''},
                    {id: 19,  nameEn: 'Sculpt',     title: '雕塑',version: config.VERSIONS.together   ,img: 'craft/Sculpt',        link: ''},
                ],

                items: [],
                tabName: this.$route.params.tab,
                category: this.$route.params.category
            }
        },
        computed: {
            currentArray (){
                return this.$data[this.tabName]
            },
        },
        watch:{
            '$route' (to, from) {
                this.tabName = this.$route.params.tab;
                this.category = this.$route.params.category;
            }
        },
    }
</script>

