<template>
  <div>
    <transition name="fade">
      <div class="boostshopBloc" v-if="withdraw_active">
        <div class="titleEvents">Withdrawal</div>
        <div class="header">
          <div class="selectFrequency" v-bind:class="{ active: step == 1 }">
            <span class="number_step">1</span>
            <span>Select the account</span>
          </div>

          <div class="selectFrequency" v-bind:class="{ active: step == 2 }">
            <span class="number_step">2</span>
            <span>Processing</span>
          </div>
        </div>

        <!-- Step 1 -->
        <transition name="fade">
          <div class="body" v-if="step == 1" style="font-size: 28px">
            <h2>Select the account that will receive the CashIn</h2>

            <div style="margin-top: 15px">
              <md-radio
                v-model="bank"
                value="Mobile Money"
                style="font-size: 20px"
                >Mobile Money</md-radio
              >
              <md-radio
                v-model="bank"
                value="Orange Money"
                style="font-size: 20px"
                >Orange Money</md-radio
              >

              <md-radio
                v-model="bank"
                value="Bank account"
                style="font-size: 20px"
                >Bank account</md-radio
              >
            </div>

            <div style="display: flex; align-items: center">
              <div style="flex: 1">
                <md-field>
                  <label>Amount</label>
                  <md-input v-model="amount" type="number"></md-input>
                </md-field>

                <md-field>
                  <label>Account information</label>
                  <md-input v-model="account_info" type="text"></md-input>
                </md-field>
              </div>

              <div
                style="
                  margin-left: 50px;
                  border-radius: 13px;
                  border: 1px solid #aaa;
                  padding: 15px;
                "
              >
                Amount <br />
                <h2>{{ amount != null ? amount : "0.0" }} XAF</h2>
              </div>
            </div>
          </div>
        </transition>

        <!-- Step 2 -->
        <transition name="fade">
          <div class="body" v-if="step == 2">
            <h2 style="margin: 45px 0px">
              Processing the deposit of {{ amount }} XAF inside your {{ bank }}
            </h2>
            <div>
              <md-progress-bar
                class="md-accent"
                md-mode="indeterminate"
              ></md-progress-bar>
            </div>
          </div>
        </transition>

        <div class="footer_boosthop">
          <div class="next" @click="reset()" v-if="step == 1">Reset</div>
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
  name: "withdraw",
  data: () => ({
    step: 1,
    bank: "Orange Money",
    amount: null,
    account_info: null,
  }),

  methods: {
    reset: function() {
      this.amount = null;
      this.account_info = null;
    },
    nextstep: function() {
      if (this.step < 2) {
        this.step++;
      }
    },

    previousstep: function() {
      this.step--;
    },
  },

  mounted() {
    this.decount();
  },

  props: {
    withdraw_active: Boolean,
  },
};
</script>

<style scoped>
.titleEvents {
  background-color: #1565c0;
}
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
  background-color: #1565c0 !important;
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
  color: #1565c0;
}

.selectFrequency.active .number_step {
  background-color: #1565c0;
}
</style>
