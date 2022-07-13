<template>
    <div class="index" v-if="tabName === 'crafts'">
        <p>{{item.name}}</p>
        <p>{{item.name_en}}</p>
        <p>{{item.perk}}</p>
        <p>{{item.durability}}</p>
        <p>{{item.crafting}}</p>
    </div>
    <table class="index" v-else>
        <tr v-for="(name, index) in item">
           <td> {{index}}</td>
            <td>{{name}}</td>
        </tr>
    </table>
</template>

<script>
    import config from '../config'

    export default {
        name: "index",
        data () {
            return {
                item: {},
                tabName: '',
                itemName: '',
                categoryName: ''
            }
        },
        mounted(){
            this.tabName = this.$route.params.tab;
            this.itemName = this.$route.params.item;
            this.categoryName = this.$route.params.category;

            let queryData = {};
            if(this.tabName === 'crafts'){ // 区分 craft 和 其它列表
                queryData = {
                    type: 'query',
                    table: 'crafts',
                    category: this.categoryName,
                    name: this.itemName
                };

            } else {
                queryData = {
                    type: 'query',
                    table: this.categoryName,
                    name: this.itemName
                };
            }
            config.getData(queryData, response => {
                this.item = response.data[0];
            });
        }
    }
</script>
