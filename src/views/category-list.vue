<template>
    <div class="index">
        <item-cell
                v-for="item in items"
                imgPath="all/"
                :item="item"
                :key="item.id"
        ></item-cell>
    </div>
</template>

<script>
    import config from '../config'
    import itemCell from '../components/item-cell'

    export default {
        name: "category-list",
        components: {
            itemCell
        },
        data(){
            return {
                items: [],
                categoryName : '',
                tabName: ''
            }
        },
        mounted: function () {

            this.categoryName = this.$route.params.category;
            this.tabName = this.$route.params.tab;

            let queryData = {};
            if(this.tabName === 'crafts'){
                queryData = {
                    type: 'list',
                    table: 'crafts',
                    category: this.categoryName,
                };
            } else {
                queryData = {
                    type: 'list',
                    table: this.categoryName
                };
            }
            config.getData(queryData, response => {
                this.items = response.data;
            });

        }
    }
</script>

