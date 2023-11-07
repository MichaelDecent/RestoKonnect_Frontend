import {createRouter, createWebHistory} from "vue-router"
import LandingView from "../views/Landing.vue"
import Cust_SignInView from "../views/Cust_SignIn.vue" 
import Cust_SignUpView from "../views/Cust_SignUp.vue"
import HomeView from "../views/Home.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "landing page",
            component: LandingView
        },

        {
            path: "/customerSignIn",
            name: "Customer Sign In page",
            component: Cust_SignInView
        },

        {
            path: "/customerSignUp",
            name: "Customer Sign Up page",
            component: Cust_SignUpView
        },

        {
            path: "/Home/:id",
            name: "Home page",
            component: HomeView
        }

    ]
})

export default router
