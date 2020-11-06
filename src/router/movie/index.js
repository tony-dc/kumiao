export default {
    path: '/movie',
    component: () =>
        import ('@/views/Movie'),
    children: [{
            path: 'city',
            component: () =>
                import ('@/components/City')
        },
        {
            path: 'nowplaying',
            component: () =>
                import ('@/components/NowPalying')
        },
        {
            path: 'comingsoon',
            component: () =>
                import ('@/components/ComingSoon')
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/Search')
        },
        {
            path: 'detail/1/:moveId',
            //多视图显示规则
            components: {
                default: () =>
                    import ('@/components/NowPalying'),
                detail: () =>
                    import ('@/views/Movie/movieDetail.vue')
            },
            props: {
                detail: true
            }
        },
        {
            path: 'detail/2/:moveId',
            //多视图显示规则
            components: {
                default: () =>
                    import ('@/components/ComingSoon'),
                detail: () =>
                    import ('@/views/Movie/movieDetail.vue')
            },
            props: {
                detail: true
            }
        },
        {
            // path:'/movie',
            path: '',
            redirect: '/movie/nowplaying'
        }
    ]
}