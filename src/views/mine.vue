<template>
    <div class="index">
        <item-cell
            v-for="item in plants"
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
        name: "mine",
        components: {
            itemCell
        },
        data(){
            return {
                plants: []
            }
        },
        mounted: function () {
            config.getData({type:'query',table:'plants'}, data => {
                this.plants = data;
            });
        }
    }
</script>
