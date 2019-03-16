import router from './router';

const AuthService = {
    getToken() {
        return window.localStorage.getItem("token");
    },

    isLoggedIn() {
        const token = this.getToken();
        return token ? true : false;
    }
};

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (AuthService.isLoggedIn()) {
            next();
        } else {
            next({
                path: '/',
                query: { redirect: to.fullPath },
            });
        }
    } else {
        next();
    }
})