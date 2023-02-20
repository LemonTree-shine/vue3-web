import { createRouter, createWebHistory } from 'vue-router'
const Index = ()=> import('./pages')
const ProductList = ()=>import('./pages/productList')

const routes = [  
    {   
        path: '/',    
        component: Index,  
    }, 
    {   
        path: '/index',    
        name: 'index',  
        component: Index,  
    }, 
    {   
        path: '/productList',    
        name: 'productList',  
        component: ProductList  
    } 
]
const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router