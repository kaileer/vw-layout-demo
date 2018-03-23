import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import webQuery from '@/components/webQuery'
import twoPage from '@/components/two'
import threePage from '@/components/three'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: HelloWorld,
            redirect: '/webQuery',
            children: [
                {
                    path: '/webQuery',
                    component: webQuery
                },
                {
                    path: '/twoPage',
                    component: twoPage
                },
                {
                    path: '/threePage',
                    component: threePage
                }
            ]
        }
    ]
})
