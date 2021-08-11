<template>
  <div id="app" class="app">
    <signin v-if="!authenticated" />

    <transition name="fade">
      <div class="close_chat" v-if="authenticated">
        <md-button
          class="md-icon-button"
          v-if="chat_active"
          @click="togglechat()"
        >
          <md-icon>clear</md-icon>
        </md-button>
      </div>
    </transition>

    <transition name="fade">
      <div
        class="togglechat"
        v-if="!chat_active && authenticated"
        @click="togglechat()"
      >
        <div class="message_num">07</div>
        <img src="./assets/images/visualElement/chat.svg" alt="" />
      </div>
    </transition>

    <transition name="fade">
      <chat v-if="chat_active && authenticated" />
    </transition>
    <div
      class="side_bar"
      @mouseover="widen()"
      @mouseout="shrink()"
      v-bind:class="widenShrink"
      v-if="authenticated"
    >
      <div class="logoWrapper">
        <img
          src="./assets/images/visualElement/afeshopLogo.png"
          alt=""
          width="194px"
          class="logo_big_screen"
        />

        <!-- Only visible on small Screen -->
        <img
          src="./assets/images/visualElement/afeshopLogo_icon.png"
          alt=""
          width="50px"
          class="smallScreen_logo"
          style="margin-bottom: 12px"
        />
        <!-- end -->

        <p class="dashboard BigScreen_dasboardTitle">DASHBOARD</p>
        <!-- Only visible on small Screen -->
        <p class="dashboard smallScreen_dasboardTitle">D</p>
        <!-- end -->
      </div>
      <div class="routesLinks">
        <router-link
          v-bind:key="routeElt.id"
          v-for="routeElt in routeitems"
          v-bind:to="routeElt.path"
        >
          <div
            v-on:click="routenavigate(routeElt.name, routeElt.id)"
            class="side_bar_nav"
            v-bind:class="routeElt.active"
          >
            <img
              v-bind:src="
                require(`./assets/images/menu_icons/${routeElt.icon}`)
              "
              alt=""
            />
            <span>{{ routeElt.name }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="container" v-if="authenticated">
      <header_ v-bind:currentRoute="currentRoute" v-on:widen="widen()" />
      <div class="router_home">
        <transition name="fade">
          <router-view> </router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import json from "./router.json";
import header_ from "./components/header_";
import chat from "./views/chat";
import signin from "./auth/signin";

export default {
  name: "App",
  props: {},
  components: {
    header_,
    chat,
    signin,
  },
  data() {
    return {
      currentRoute: "Dashboard",
      routeitems: json,
      mediaquery: false,
      widenShrink: "",
      chat_active: false,
      authenticated: true,
    };
  },
  methods: {
    togglechat() {
      this.chat_active = !this.chat_active;
    },
    routenavigate: function(routename, id) {
      this.currentRoute = `Dashboard ${
        routename == "" ? "" : ">"
      } ${routename}`;

      //trigerring the active class
      for (let i = 0; i < this.routeitems.length; i++) {
        this.routeitems[i].active = "inactive";
      }
      this.routeitems[id].active = "active";
    },
    widen: function() {
      if (window.innerWidth < 800) {
        this.widenShrink = "widen";

        // SHowing the big logo
        this.$(".logo_big_screen").style.display = "block";
        this.$(".smallScreen_logo").style.display = "none";
        this.$(".smallScreen_dasboardTitle").style.display = "none";
        this.$(".BigScreen_dasboardTitle").style.display = "block";
      }
    },
    shrink: function() {
      if (window.innerWidth < 800) {
        this.widenShrink = "";
        // SHowing the big logo
        this.$(".logo_big_screen").style.display = "none";
        this.$(".smallScreen_logo").style.display = "block";
        this.$(".smallScreen_dasboardTitle").style.display = "block";
        this.$(".BigScreen_dasboardTitle").style.display = "none";
      }
    },
    $: function(target) {
      return document.querySelector(target);
    },
  },

  created() {},
};
</script>

<style>
.md-steppers-navigation {
  border-radius: 45px;
  overflow: hidden;
}
.md-stepper-header {
  pointer-events: none;
  cursor: not-allowed !important;
}
body {
  overflow: hidden;
  background-color: #fff;
}
.md-dialog-container {
  border-radius: 24px !important;
}
.close_chat {
  position: fixed;
  right: 20px;
  top: 40px;
  z-index: 50000;
}
.message_num {
  background-color: blue;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  color: white;
  text-align: center;
  font-size: 24px;
  padding: 15px;
  position: fixed;
  top: -32px;
  right: -28px;
  transform: scale(0.8);
  border: 6px solid white;
}
.togglechat {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #df9a00;
  transform: scale(0.5);
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 8;
  cursor: pointer;
}
.togglechat img {
  width: 50px;
}
.close {
  cursor: pointer;
  transition: 0.5s;
}

.close:hover {
  opacity: 0.5;
  transform: scale(1.2);
}
li {
  list-style: none;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

.md-dialog-actions {
  justify-content: center !important;
}
.md-dialog-title {
  text-align: center;
}
/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 8px;
}

@font-face {
  font-family: ProductSansBold;
  src: url(./assets/font/Product_Sans_Regular.ttf);
}

@font-face {
  font-family: ProductSansRegular;
  src: url(./assets/font/Product_Sans_Regular.ttf);
}

@font-face {
  font-family: google;
  src: url(./assets/font/google_sans.ttf);
}
.el-tooltip {
  flex: 1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: google;
  outline: none;
  transition: 0.25s;
}

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.877);
  transition: 0.5s;
}
.app {
  width: 100vw;
  display: flex;
  background-color: #fff;
  transition: 0.25s;
}

/* Side bar style */
.side_bar {
  height: 100vh;
  width: 230px;
  background-color: #fff;
  box-shadow: 0px 0px 9px #77777733;
  transition: 0.5s;
  border-bottom-right-radius: 22px;
  display: flex;
  flex-direction: column;
}

.widen {
  width: 230px !important;
  position: absolute;
  top: 0;
  left: 0;
}

.side_bar .logoWrapper {
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
}

.routesLinks {
  padding: 12px;
  overflow: auto;
}

.routesLinks .active span {
  color: #ffb000;
  font-weight: bold;
}
.routesLinks .active img {
  filter: invert(85%) sepia(39%) saturate(7335%) hue-rotate(3deg)
    brightness(108%) contrast(105%);
}
.routesLinks .active {
  background-color: #df9a0014 !important;
}

.side_bar .side_bar_nav {
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 81px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
}

.side_bar .side_bar_nav img {
  width: 20px;
  margin-right: 15px;
}

.side_bar .logoWrapper .dashboard {
  padding: 5px 10px;
  background-color: #0085ff;
  border-radius: 45px;
  color: #fff;
}

.side_bar .side_bar_nav:not(.active):hover {
  background-color: rgb(221 221 221 / 15%);
}

.logo {
  height: 60px;
  width: 194px;
  background-color: red;
}

.smallScreen_logo,
.smallScreen_dasboardTitle {
  display: none;
}

.smallScreen_dasboardTitle {
  width: 35px;
  text-align: center;
  padding: 0 !important;
}

/* End style */

.container {
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 12px;
}

.router_home {
  flex: 1;
  margin-top: 15px;
  border-radius: 13px;
  overflow: auto;
}

/* Media Query */
@media (max-width: 800px) {
  .side_bar {
    top: 0;
    left: 0px;
    content: "dessus";
    width: 73px;
    z-index: 5;
  }
  .side_bar .logoWrapper .BigScreen_dasboardTitle {
    display: none;
  }

  .smallScreen_logo,
  .smallScreen_dasboardTitle {
    display: block;
  }
  .logo_big_screen {
    display: none;
  }
}
/* End */

/* Ripple Effect */
button {
  border: none;
  padding: 12px 18px;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #2196f3;
  border-radius: 48px;
  outline: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

button img {
  margin-right: 15px;
}

.ripple {
  background-position: center;
  transition: background 0.8s;
}

.ripple:hover {
  background-color: #47a7f5;
  background-image: radial-gradient(circle, transparent 1%, #47a7f5 1%);
  background-position: center;
  background-size: 15000%;
}

.ripple:active {
  transition: background 0s;
  background-color: #6eb9f7;
  background-size: 100%;
}
/* End */

/* Close button */
#close {
  position: fixed;
  top: 50px;
  right: 25px;
  cursor: pointer;
  z-index: 100;
  animation: close_anim 0.5s ease-out 1;
}

@keyframes close_anim {
  0% {
    opacity: 0;
    transform: rotate(0) scale(0);
    right: -8px;
  }
  100% {
    opacity: 1;
    transform: rotate(360deg) scale(1);
    right: 25px;
  }
}

#close:hover {
  transform: scale(1.1);
}
/* Close */

h2 {
  font-size: 2rem;
  color: #aaa;
}

/* Form Template*/

.label {
  position: absolute;
  top: -9px;
  left: 7px;
  background-color: #fff;
  padding: 4px 9px;
  font-size: 1em;
}

.section {
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e7;
  margin: 10px;
  display: flex;
  align-items: center;
  position: relative;
}

.section input {
  background: transparent;
  border: none;
  outline: none;
  font-size: 11px;
  padding: 7px 8px;
  width: 100%;
}

select,
textarea {
  font-size: 1.35em;
  border: none;
  width: 100%;
}

.inactive_close {
  opacity: 0;
  pointer-events: none;
}

.title {
  text-align: center;
  font-size: 2em;
  color: #838383;
  padding: 10px 0px;
  margin: 0px 24px;
  transform: translate(-6px, -18px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.md-theme-default a:not(.md-button) {
  color: #555 !important;
}

a {
  text-decoration: none !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
  margin-left: -50px;
  transform: translateX(-100px);
}

.fade_in-enter-active,
.fade_in-leave-active {
  transition: 0.5s;
}
.fade_in-enter, .fade_in-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
  top: 10px;
  z-index: 2000;
}

.titleEvents {
  position: absolute;
  top: 20px;
  left: 0px;
  padding: 15px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  color: white;
  background-color: #ea9c00;
}
</style>
