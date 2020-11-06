export default {
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
                import ('@/components/FindPassword')
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
        }
    ]
}