<template>
  <div>
    <transition name="fade">
      <div class="boostshopBloc" v-if="boostShop_S">
        <div class="titleEvents">Boost Shop</div>
        <div class="header">
          <div class="selectFrequency" v-bind:class="{ active: step == 1 }">
            <span class="number_step">1</span>
            <span>Select frequency</span>
          </div>

          <div class="selectFrequency" v-bind:class="{ active: step == 2 }">
            <span class="number_step">2</span>
            <span>Select Payment method</span>
          </div>

          <div class="selectFrequency" v-bind:class="{ active: step == 3 }">
            <span class="number_step">3</span>
            <span>Validation</span>
          </div>
        </div>

        <!-- Step 1 -->
        <transition name="fade">
          <div class="body" v-if="step == 1">
            <h2>Increase your sales</h2>

            <div class="select_price">
              <div class="left_bloc">
                <p style="font-size: 18px">Billing cycle</p>
                <div class="selectGroup">
                  <select v-model="amount">
                    <option disabled value="">Select Cycle</option>
                    <option value="10 000 XAF">Monthly</option>
                    <option value="45 000 XAF">Yearly</option>
                    <option value="90 000 XAF">Quaterly</option>
                  </select>
                </div>
              </div>
              <div class="rightbloc">
                <p style="font-size: 18px">Amount</p>
                <h2>{{ amount }}</h2>
              </div>
            </div>
          </div>
        </transition>

        <!-- Step 2 -->
        <transition name="fade">
          <div class="body" v-if="step == 2">
            <div class="select_price">
              <div class="left_bloc">
                <p style="font-size: 18px">Amount</p>
                <h2>{{ amount }}</h2>
              </div>
              <div class="rightbloc">
                <h2>Moting Shop Ltd.</h2>
              </div>
            </div>
            <p style="margin-top: 30px; font-size: 18px">
              You have subscribe for a boosting from 12/12/2020 to 28/12/2020 ,
              <br />
              Please proceed to the payment.
            </p>

            <h2 style="margin-top: 60px">Select payment method</h2>
            <div>
              <md-radio v-model="radio" :value="false">Mobile Money</md-radio>
              <md-radio v-model="radio" value="my-radio">Orange Money</md-radio>
              <md-radio v-model="radio" :value="objA">Bank Card</md-radio>
            </div>
          </div>
        </transition>

        <!-- Step 3 -->
        <transition name="fade">
          <div class="body" v-if="step == 3">
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
          <div class="cancel" @click="closeBoostShop()">Cancel</div>
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
  name: "boostshop",
  data: () => ({
    step: 1,
    amount: "10 000 XAF",
    objA: { name: "a" },
    objB: { name: "b" },
    radio: false,
  }),

  methods: {
    nextstep: function() {
      if (this.step <= 2) {
        this.step++;
      }
    },

    previousstep: function() {
      this.step--;
    },

    closeBoostShop: function() {
      this.$emit("closeBoostShop");
    },
  },

  props: {
    boostShop_S: Boolean,
  },
};
</script>

<style scoped>
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
  padding: 35px 100px;
}
.select_price {
  margin-top: 45px;
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
}

.header {
  padding: 35px 25px;
  border-bottom: 1px solid #cbcac5;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.body {
  padding: 35px 100px;
  flex: 1;
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
