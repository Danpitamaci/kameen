import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins

import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active"
});


Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalDirectives);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router
});
