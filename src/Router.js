import { createRouter, createWebHistory } from 'vue-router'
const Index = ()=> import('./pages')

const routes = [  
    {   
        path: '/',    
        name: 'Index1',  
        component: Index  
    },  
    {   
        path: '/index',    
        name: 'Index',  
        component: Index  
    },  
]
const router = createRouter({  
    history: createWebHistory(),  
    routes
})

export default router