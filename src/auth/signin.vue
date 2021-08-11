<template>
  <div class="auth_block">
    <transition name="fade">
      <register
        :active="registerActive"
        v-on:ShowSiginScreen="ShowSiginScreen"
      />
    </transition>
    <transition name="fade">
      <div class="content_auth" v-if="!registerActive">
        <img
          src="./../assets/images/visualElement/afeshopLogo.png"
          alt=""
          width="200px"
        />
        <p style="font-size:16px;margin:10px 0px;">Welcome to Afeshop</p>
        <h2>Sign In</h2>
        <div class="formContainer">
          <div>
            <md-icon>account_circle</md-icon>
            <md-field>
              <label>Email/phone number</label>
              <md-input v-model="email_phone"></md-input>
            </md-field>
          </div>
          <div>
            <md-icon>lock</md-icon>
            <md-field>
              <label>Password</label>
              <md-input v-model="password" type="password"></md-input>
            </md-field>
          </div>
          
        </div>

        <md-button
          class="md-raised md-primary"
          style="box-shadow:initial;border-radius:65px;"
          @click="signIn()"
          >Sign in</md-button
        >
        <md-progress-spinner
          :md-diameter="30"
          :md-stroke="3"
          md-mode="indeterminate"
          v-if="api_loading"
        ></md-progress-spinner>
        <p style="margin:10px 0px;">
          Don't have a account yet?
          <span class="createAccount" @click="openRegisterScrenn()"
            >create your account here</span
          >
        </p>

        <md-snackbar
          :md-position="'center'"
          :md-duration="4000"
          :md-active.sync="showSnackbar"
          md-persistent
        >
          <span>{{ error_message }}</span>
          <md-button class="md-primary" @click="showSnackbar = false"
            >CLOSE</md-button
          >
        </md-snackbar>
      </div>
    </transition>
  </div>
</template>
<script>
/* eslint-disable */
import register from './register';
export default {
  name: 'signin',
  data() {
    return {
      email_phone: null,
      password: null,
      registerActive: false,
      showSnackbar: false,
      error_message: '',
      api_loading: false,
    };
  },
  components: {
    register,
  },

  methods: {
    openRegisterScrenn: function() {
      this.registerActive = true;
    },
    ShowSiginScreen: function() {
      this.registerActive = false;
    },
    signIn: function() {
      console.log(this.email_phone);
      console.log(this.password);

      let that = this;
      this.api_loading = true;

      const options = {
        method: 'POST',
        url: 'https://afeshop.africa/app/api/route237/login',
        data: {
          email: this.email_phone,
          password: this.password,
        },
      };

      this.axios
        .request(options)
        .then(function(response) {
          that.api_loading = false;
          // that.showDialog = true;
          console.log(response.data);
          that.error_message = 'You are logged in!';
          that.showSnackbar = true;
        })
        .catch(function(error) {
          // that.setDone('first', 'second');
          that.api_loading = false;
          that.error_message = 'Bad credentials, please try again';
          that.showSnackbar = true;
        });
    },
  },
};
</script>
<style>
.formContainer > div {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
}
.formContainer i {
  margin-right: 10px;
}
.formContainer {
  margin: 25px 0px;
  width: 100%;
  padding: 0px 16px;
}
.content_auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  /* border: 1px solid #aaaaaa40; */
  padding: 25px 75px;
  border-radius: 20px;
}

.content_auth.register {
  height: 100%;
  /* overflow: hidden; */
}
.createAccount {
  color: #df9a00;
  cursor: pointer;
}
.auth_block {
  /* position: absolute; */
  /* overflow: hidden;
  height: 100vh; */
  width: 100vw;
  margin: 0px auto;
  background-color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
}
</style>
