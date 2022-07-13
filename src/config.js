import axios from "axios";

const BASE_URL = 'https://kylebing.cn/portal/dont-starve';

export default {
    VERSIONS: {
        normal: 'NORMAL',
        giant: 'GIANT',
        sea: 'SEA',
        together: 'TOGETHER'
    },
    BASE_URL,
    request(params, url) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'GET',
                url,
                params
            })
                .then(res => {
                    if (res.success) {
                        resolve(res.data)
                    } else {
                        reject(res)
                    }
                })
                .catch(err => {
                    reject(res)
                })
        })
    }
}


