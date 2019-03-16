import router from './router';

const AuthService = {
    loggedIn() {
        return false;
    },
};

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (AuthService.loggedIn()) {
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