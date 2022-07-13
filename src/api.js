import config from "@/config";
export default {
    characterList(params)return config.request(params, config.BASE_URL + 'character/list'),
    characterInfo(params)return config.request(params, config.BASE_URL + 'character/info')
}
