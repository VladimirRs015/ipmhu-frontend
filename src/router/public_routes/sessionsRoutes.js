import $store from '@/store/index' 
export default [
    {
        path : '/signin',
        component : ()=> import('@/views/auth/signin'),
        name : 'signin',
        beforeEnter(to ,from ,next){
            if($store.state.auth.logged){
                return next({name : 'Home'})
            }
            return next();
        },
        
    },
    {
        path : '/signup',
        component : ()=> import('@/views/auth/signup'),
        name : 'signup',
        beforeEnter(to ,from ,next){
            if($store.state.auth.logged){
                return next({name : 'Home'})
            }  
            return next();
        }
    }
]