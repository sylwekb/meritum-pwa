import Discover from './components/Discover.vue'
import Followed from './components/Followed.vue'
import Profile from './components/Profile.vue'
import Post from './components/Post.vue'


export const routes = [
    {path: '/', component: Discover, name: "discover"},
    {path: '/followed', component: Followed, name: "followed"},
    {path: '/profile', component: Profile, name: "profile"},
    {path: '/posts/:id', component: Post, name: "post", props: true},
]
