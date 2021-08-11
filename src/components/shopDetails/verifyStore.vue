<template>
  <div>
    <transition name="fade">
      <div class="boostshopBloc" v-if="verifyshopScreen">
        <div class="titleEvents">Shop Verification</div>
        <div class="header">
          <div class="selectFrequency" v-bind:class="{ active: step == 1 }">
            <span class="number_step">1</span>
            <span>Select Owner type</span>
          </div>

          <div class="selectFrequency" v-bind:class="{ active: step == 2 }">
            <span class="number_step">2</span>
            <span>Select verification method</span>
          </div>

          <div class="selectFrequency" v-bind:class="{ active: step == 3 }">
            <span class="number_step">3</span>
            <span>Enter verification code</span>
          </div>

          <div class="selectFrequency" v-bind:class="{ active: step == 4 }">
            <span class="number_step">4</span>
            <span>Verification</span>
          </div>
        </div>

        <!-- Step 1 -->
        <transition name="fade">
          <div class="body first_view" v-if="step == 1">
            <div>
              <h2>Shop verification</h2>
              <p style="font-size: 16px; margin-top: 8px">
                Verify your shop or your products won't be visible on our
                platform
              </p>

              <div class="select_price">
                <div class="left_bloc">
                  <div>
                    <p style="font-size: 18px">
                      <md-icon>shopping_cart</md-icon>
                      Shop owner type
                    </p>
                    <div>
                      <md-field>
                        <label for="movie">Owner type</label>
                        <md-select
                          v-model="shoptype"
                          name="shoptype"
                          id="shoptype"
                        >
                          <md-option value="fight-club"
                            >Personnal Shop</md-option
                          >
                          <md-option value="godfather">Business shop</md-option>
                          <md-option value="godfather-ii">Company</md-option>
                        </md-select>
                      </md-field>
                    </div>
                  </div>
                  <div>
                    <p style="font-size: 18px">
                      <md-icon>subtitles</md-icon>
                      Select your legal document
                    </p>
                    <div>
                      <md-field>
                        <label>CNI</label>
                        <md-file v-model="your_CNI" />
                      </md-field>

                      <md-field>
                        <label>Business Docs</label>
                        <md-file v-model="businessDocs" />
                      </md-field>
                    </div>
                  </div>
                  <div style="color: red; display: flex; align-items: center">
                    <md-icon style="color: red">warning</md-icon>
                    Select your legal document or your shop will be banned
                  </div>
                </div>
              </div>
            </div>

            <img
              src="./../../assets/images/visualElement/verfification.jpg"
              alt=""
              style="height: 422px; width: 422px"
            />
          </div>
        </transition>

        <!-- Step 2 -->
        <transition name="fade">
          <div class="body" v-if="step == 2" style="font-size: 28px">
            <h2 style="margin-top: 30px">Select a verification method</h2>
            <div style="margin-top: 15px">
              <md-radio v-model="radio" value="email" style="font-size: 20px"
                >By Email</md-radio
              >
              <md-radio v-model="radio" value="phone" style="font-size: 20px"
                >By Phone number</md-radio
              >
            </div>
          </div>
        </transition>

        <!-- Step 3 -->
        <transition name="fade">
          <div class="body" v-if="step == 3" style="font-size: 28px">
            <p style="font-size: 18px" v-if="radio == 'email'">
              We send a verification code at your email
              <b style="font-size: 18px">blabla@gmail.com</b> , please insert
              that code below to verify your shop
            </p>

            <p style="font-size: 18px" v-if="radio == 'phone'">
              We send a verification code at your phone number
              <b style="font-size: 18px">+2375858951</b> , please insert that
              code below to verify your shop
            </p>

            <div style="width: 60%; margin-top: 45px">
              <md-field>
                <label>verification code</label>
                <md-input v-model="verification_code"></md-input>
              </md-field>
            </div>
            <div>
              <md-button
                class="md-raised md-primary"
                style="border-radius: 45px; text-transform: lowercase"
                >Resend</md-button
              >
            </div>

            <div class="counter">
              Verification code expired in
              <span class="counter_time">{{ counter_time }}</span> seconds.
            </div>
          </div>
        </transition>

        <!-- Step 4 -->
        <transition name="fade">
          <div class="body" v-if="step == 4">
            <h2 style="margin: 45px 0px">Validation</h2>
            <div>
              <md-progress-bar
                class="md-accent"
                md-mode="indeterminate"
              ></md-progress-bar>
            </div>
          </div>
        </transition>

        <div class="footer_boosthop">
          <div class="next" @click="previousstep()" v-if="step > 1">
            Previous
          </div>
          <div class="next" @click="nextstep()">Next</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "verifyStore",
  data: () => ({
    step: 1,
    radio: "email",
    verification_code: null,
    counter_time: 60,
    businessDocs: null,
    your_CNI: null,
    shoptype: null,
  }),

  methods: {
    nextstep: function() {
      if (this.step <= 3) {
        this.step++;

        if (this.step == 3) {
          this.decount();
        }
      }
    },

    previousstep: function() {
      this.step--;
    },

    decount() {
      const self = this;
      var id = setInterval(function() {
        if (self.counter_time == 0) {
          clearInterval(id);
        } else {
          self.counter_time--;
        }
      }, 1000);
    },
  },

  props: {
    verifyshopScreen: Boolean,
  },
};
</script>

<style scoped>
.counter {
  padding: 25px 0px;
  display: inline-block;
  font-size: 24px;
}

.counter span {
  display: inline-block;
  padding: 8px;
  background-color: red;

  color: #fff;
  border-radius: 45px;
  font-size: 24px;
}

.first_view {
  display: flex;
  justify-content: space-between;
}
.left_bloc > div {
  margin-top: 45px;
}
.md-radio-label {
  font-size: 20px !important;
}
small {
  display: block;
}
.footer_boosthop div {
  padding: 15px 25px;
  border-radius: 45px;
  background-color: #cbcac5;
  color: #575653;
  font-weight: bold;
  margin-left: 15px;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  top: 0px;
}

.footer_boosthop div:hover {
  box-shadow: 1px 13px 15px #0000004a;
  top: -5px;
}
.next {
  background-color: #ea9c00 !important;
  color: white !important;
}
.footer_boosthop {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 100px;
}
.select_price {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left_bloc {
  width: 400px;
}
.selectGroup {
  margin: 10px 0px;
  border: 1px solid #cbcac5;
  border-radius: 100px;
  padding: 16px;
}
.boostshopBloc {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  font-size: 18px;
  overflow: auto;
  z-index: 10;
}

.header {
  padding: 35px 60px;
  border-bottom: 1px solid #cbcac5;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.body {
  padding: 35px 100px;
  flex: 1;
  padding-bottom: 0px;
}

.body h2 {
  color: #4e5652;
  padding: 3px 0px;
}

.number_step {
  display: inline-block;
  height: 25px;
  width: 25px;
  background-color: #cbcac5;
  color: white;
  text-align: center;
  border-radius: 50%;
  margin-right: 15px;
}

.selectFrequency {
  color: #cbcac5;
}

.selectFrequency.active {
  color: #ea9c00;
}

.selectFrequency.active .number_step {
  background-color: #ea9c00;
}
</style>
