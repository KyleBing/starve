import { createRouter, createWebHashHistory } from 'vue-router'


import categoryList         from'@/views/category-list'
import tabList              from'@/views/tab-list'
import itemDetail           from'@/views/item-detail'

import detailCharacter           from'@/views/detail-character'



const routes = [
  {path: '/:tab',                         component: tabList },
  {path: '/:tab/:category',               component: categoryList },
  {path: '/:tab/characters/:character',   component: detailCharacter },
  {path: '/:tab/:category/:item',         component: itemDetail },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
