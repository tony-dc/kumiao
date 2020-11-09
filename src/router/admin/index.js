export default {
    path: '/admin',
    component: () => import ('@/components/Admin'),
    children:[
        {
            path:'user',
            component:()=>import('@/components/User')
        },
        {
            path:'adminmovies',
            component:()=>import('@/components/adminMovies')
        },
        {
            path:'admincinemas',
            component:()=>import('@/components/admincinemas')
        },
        {
            path:'',
            redirect:'/admin/user'
        }
    ]
}