import Router from "vue-router";
import Vue from "vue";
import orders from "./views/orders";
import myShop from "./views/myShop";
import boost_shop from "./views/boost_shop";
import statistics from "./views/statistics";
import shopDetails from "./views/shopDetails";
import wallet from "./views/wallet";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "myShop",
      component: myShop,
      id: 0,
    },
    {
      path: "/orders",
      name: "orders",
      component: orders,
      id: 1,
    },
    {
      path: "/boost_shop",
      name: "parametres",
      component: boost_shop,
      id: 2,
    },
    {
      path: "/statistics",
      name: "Statistics",
      component: statistics,
      id: 3,
    },
    {
      path: "/details",
      name: "details",
      component: shopDetails,
      id: 4,
    },
    {
      path: "/wallet",
      name: "wallet",
      component: wallet,
      id: 5
    }
  ],
});
