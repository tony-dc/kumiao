export default {
<<<<<<< HEAD
    path:'/mine',
    component:()=>import('@/views/Mine'),
    children:[
        {
            path:'center',
            component:()=>import('@/views/Mine/center.vue')
        },
        {
            path:'Login',
            component:()=>import('@/components/Login')
        },
        {
            path:'findpassword',
            component:()=>import('@/components/FindPassword')
        },
        {
            path:'register',
            component:()=>import('@/components/Register')
        },
        {
            path:'',
            redirect:'/mine/Login'
=======
    path: '/mine',
    component: () =>
        import ('@/views/Mine'),
    children: [{
            path: 'login',
            component: () =>
                import ('@/components/Login')
        },
        {
            path: 'register',
            component: () =>
                import ('@/components/Register')
        },
        {
            path: 'findpassword',
            component: () =>
                import ('@/components/Findpassword')
        },
        {
            path: 'center',
            component: () =>
                import ('@/views/Mine/center.vue')
        },
        //来个重定向
        {
            path: '',
            redirect: '/mine/center'
>>>>>>> abaa3d056be3139bbae09df4aa595ae0e8ddc3dc
        }
    ]
}