<template>
  <div>
    <verifyStore v-bind:verifyshopScreen="verifyshopScreen" />
    <verify_email
      v-bind:verify_email_screen="verify_email_screen"
      v-bind:email="email"
      v-bind:counter_time="60"
    />
    <verify_phone
      v-bind:verify_phone_screen="verify_phone_screen"
      v-bind:phone="phone"
      v-bind:counter_time="60"
    />

    <div
      class="close"
      v-if="verifyshopScreen || verify_email_screen || verify_phone_screen"
    >
      <md-button
        style="background-color: red; box-shadow: initial"
        class="md-icon-button md-raised md-primary"
        @click="toggleVerifyShopScreen()"
      >
        <md-icon>clear</md-icon>
      </md-button>
    </div>
    <div class="container">
      <transition name="fade">
        <div
          class="verify_shop"
          v-if="!verifyshopScreen"
          @click="show_shop_verification_screen()"
        >
          <div class="blob yellow">
            <md-icon style="color: #fff">info</md-icon> Verify your shop
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="header" v-if="!verifyshopScreen">
          <h1 style="color: #202124; font-size: 2rem">Shop details</h1>
          <p class="description">
            We show here all the informations concerning your shop, feel free to
            update them anytime
          </p>
        </div>
      </transition>
      <div class="details">
        <div class="detailsItem">
          <div>Shop name</div>
          <div class="val_details">BlaBla Shop</div>
          <md-button class="md-icon-button" @click="active_name = true">
            <md-icon> create </md-icon>
            <md-tooltip md-direction="bottom">edit</md-tooltip>
          </md-button>
          <md-dialog-prompt
            style="border-radius: 13px"
            :md-active.sync="active_name"
            v-model="new_name"
            md-title="What's your new shop name?"
            md-input-maxlength="100"
            md-input-placeholder="Shop name"
            md-confirm-text="submit"
          />
        </div>
        <div class="detailsItem">
          <div>Shop email</div>
          <div class="val_details">{{ email }}</div>
          <md-button class="md-icon-button" @click="active_email = true">
            <md-icon> create </md-icon>
            <md-tooltip md-direction="bottom">edit</md-tooltip>
          </md-button>

          <md-dialog-prompt
            style="border-radius: 13px"
            :md-active.sync="active_email"
            v-on:md-confirm="toggleVerify_email_screen()"
            v-model="email"
            md-title="What's your new email?"
            md-input-maxlength="100"
            md-input-placeholder="email"
            md-confirm-text="submit"
          />
        </div>

        <div class="detailsItem">
          <div>Shop phone number</div>
          <div class="val_details">{{ phone }}</div>
          <md-dialog-prompt
            style="border-radius: 13px"
            :md-active.sync="active_phone"
            v-on:md-confirm="toggleVerify_phone_screen()"
            v-model="phone"
            md-title="What's your new phone number?"
            md-input-maxlength="9"
            md-input-placeholder="Phone number"
            md-confirm-text="submit"
          />
          <md-button class="md-icon-button" @click="active_phone = true">
            <md-icon> create </md-icon>
            <md-tooltip md-direction="bottom">edit</md-tooltip>
          </md-button>
        </div>

        <div class="detailsItem">
          <div>Shop cathegory</div>
          <div class="val_details">Clothes&shoes</div>
          <md-dialog :md-active.sync="active_cath">
            <md-dialog-title>Edit cathegory</md-dialog-title>

            <div style="margin: 15px; min-width: 800px">
              <md-field>
                <md-select
                  v-model="new_cath"
                  name="country"
                  id="country"
                  placeholder="Shop cathegory"
                >
                  <md-option value="australia">Electronics</md-option>
                  <md-option value="brazil">Shoes</md-option>
                  <md-option value="japan">Grocery</md-option>
                </md-select>
              </md-field>
            </div>

            <md-dialog-actions>
              <md-button class="md-primary" @click="active_cath = false"
                >Close</md-button
              >
              <md-button class="md-primary" @click="active_cath = false"
                >Save</md-button
              >
            </md-dialog-actions>
          </md-dialog>
          <md-button class="md-icon-button" @click="active_cath = true">
            <md-icon> create </md-icon>
            <md-tooltip md-direction="bottom">edit</md-tooltip>
          </md-button>
        </div>
        <div class="detailsItem">
          <div>Shop description</div>
          <div class="val_details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            laboriosam saepe beatae iste, libero quibusdam optio fugiat
            provident itaque quia ex odit dolores laborum.
          </div>
          <md-dialog :md-active.sync="active_description">
            <md-dialog-title>Edit description</md-dialog-title>

            <div style="margin: 15px; min-width: 800px">
              <md-field>
                <label>Description</label>
                <md-textarea v-model="new_description"></md-textarea>
              </md-field>
            </div>

            <md-dialog-actions>
              <md-button class="md-primary" @click="active_description = false"
                >Close</md-button
              >
              <md-button class="md-primary" @click="active_description = false"
                >Save</md-button
              >
            </md-dialog-actions>
          </md-dialog>

          <md-button class="md-icon-button" @click="active_description = true">
            <md-icon> create </md-icon>
            <md-tooltip md-direction="bottom">edit</md-tooltip>
          </md-button>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import verifyStore from "./../components/shopDetails/verifyStore";
import verify_email from "./../components/shopDetails/verify_email";
import verify_phone from "./../components/shopDetails/verify_phone";
export default {
  name: "details",
  components: {
    verifyStore,
    verify_email,
    verify_phone,
  },
  data() {
    return {
      verifyshopScreen: false,
      verify_phone_screen: false,
      verify_email_screen: false,

      active_description: false,
      active_email: false,
      active_phone: false,
      active_cath: false,
      active_name: false,

      new_description: null,
      new_name: null,
      new_email: null,
      new_phone: null,
      new_cath: null,

      email: "blabla@gmail.com",
      phone: "+237 697 862 124",
      shopname: "BlaBla Shop",
    };
  },
  methods: {
    toggleVerifyShopScreen: function () {
      this.verifyshopScreen = false;
      this.verify_email_screen = false;
      this.verify_phone_screen = false;
    },

    show_shop_verification_screen: function () {
      this.verifyshopScreen = true;
    },

    toggleVerify_email_screen: function () {
      this.verify_email_screen = true;
      this.active_email = false;
    },

    toggleVerify_phone_screen: function () {
      this.verify_phone_screen = true;
      this.active_phone = true;
    },
  },
};
</script>

<style scoped>
.md-dialog-container {
  border-radius: 24px !important;
  background-color: red;
}
.close {
  position: absolute;
  top: 25px;
  right: 17px;
  z-index: 5000;
}
.verify_shop {
  position: absolute;
  right: 33px;
  z-index: 2;
  top: 85px;
  cursor: pointer;
}
.blob {
  background: black;
  border-radius: 48px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  margin: 10px;
  padding: 10px 15px;
  color: #fff;

  /* height: 20px;
  width: 20px; */
  transform: scale(1);
  animation: pulse-black 2s infinite;
}

@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.blob.yellow {
  background: rgba(255, 177, 66, 1);
  box-shadow: 0 0 0 0 rgba(255, 177, 66, 1);
  animation: pulse-yellow 2s infinite;
}

@keyframes pulse-yellow {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 177, 66, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 177, 66, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 177, 66, 0);
  }
}

.header {
  padding-top: 33px;
  top: 73px;
  position: absolute;
  background-color: #ffffff;
  /* width: 100%; */
}
.details {
  margin-top: 73px;
  height: 300px;
  padding-right: 15px;
}
.detailsItem {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.detailsItem div:first-child {
  width: 400px;
}

.detailsItem .val_details {
  flex: 1;
  border: 1px solid #20212430;
  border-radius: 8px;
  padding: 16px;
}

.detailsItem div {
  font-size: 16px;
}
.description {
  margin-top: 8px;
  font-size: 16px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(170 170 170 / 22%);
}
.container {
  padding: 18px;
  font-size: 0.875rem;
}
.title {
  border-radius: 54px;
  border: 1px solid #0085ff;
  padding: 15px;
  text-align: center;
}
.title h2 {
  color: #0085ff;
}
.detailsItem {
  margin: 25px 0px;
}

.detailsItem p {
  font-size: 16px;
  margin-bottom: 5px;
}

.detailsItem h2 {
  font-size: 20px;
}
</style>