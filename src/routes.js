import Discover from './components/Discover.vue'
import Followed from './components/Followed.vue'
import Profile from './components/Profile.vue'
import Post from './components/Post.vue'


export const routes = [
    {path: '/', component: Followed, name: "followed"},
    {path: '/discover', component: Discover, name: "discover"},
    {path: '/profile', component: Profile, name: "profile"},
    {path: '/posts/:id', component: Post, name: "post", props: true},
]
