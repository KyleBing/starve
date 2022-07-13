<template>
    <div class="character">
        <div class="character-info">
            <div class="half pic-wrapper"><img :src="'./src/img/all/'+characterName+'_build@2x.png'" alt=""></div>
            <div class="half name-wrapper">
                <div>
                    <h3 class="name">{{character.name}}</h3>
                    <h6 class="name-en">{{character.name_en}}</h6>
                </div>
                <p class="perk">{{character.perk}}</p>
            </div>
        </div>
        <div class="character-attr">
            <div class="item">
                <img :src="'./src/img/icons/profile_health@2x.png'" alt="Heart">
                <h4>{{character.health}}</h4>
                <h4>健康</h4>
            </div>
            <div class="item">
                <img :src="'./src/img/icons/profile_hunger@2x.png'" alt="Hunger">
                <h4>{{character.hunger}}</h4>
                <h4>饥饿</h4>
            </div>
            <div class="item">
                <img :src="'./src/img/icons/profile_sanity@2x.png'" alt="Sanity">
                <h4>{{character.sanity}}</h4>
                <h4>脑力</h4>
            </div>
        </div>
        <div class="debug-spawn">
            <div>
                <img :src="'./src/img/icons/icon_terminal@2x.png'" alt="spawn code">
                <h5>{{character.debugspawn}}</h5>
            </div>
        </div>
        <div class="extra">
            <table class="w-10p">
                <tr>
                    <td class="value-title w-4p">昵称</td>
                    <td class="value-content">{{character.nick_name}}</td>
                </tr>
                <tr>
                    <td class="value-title">座右铭</td>
                    <td class="value-content">{{character.motto}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import config from '../config'

    export default {
        name: "index",
        data () {
            return {
                character: {},
                characterName: '',
            }
        },
        mounted(){
            this.characterName = this.$route.params.character;

            let queryData = {
                type: 'query',
                table: 'characters',
                name: this.characterName
            };
            config.getData(queryData, response => {
                this.character = response.data[0];
            });
        }
    }
</script>
