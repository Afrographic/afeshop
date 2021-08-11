<template>
  <div>
    <transition name="fade">
      <div class="boostshopBloc" v-if="affiliate_s">
        <div class="titleEvents">Affiliate</div>
        <div class="header">
          <div class="selectFrequency" v-bind:class="{ active: step == 1 }">
            <span class="number_step">1</span>
            <span>Input the code</span>
          </div>

          <div class="selectFrequency" v-bind:class="{ active: step == 2 }">
            <span class="number_step">2</span>
            <span>Processing</span>
          </div>
        </div>

        <!-- Step 1 -->
        <transition name="fade">
          <div class="body" v-if="step == 1" style="font-size: 28px">
            <h2>Input the afeshop brand code</h2>

            <div style="display: flex; align-items: center; margin-top: 45px">
              <div style="flex: 1">
                <md-field>
                  <label>Afeshop Brabd code</label>
                  <md-input v-model="brand_code" type="number"></md-input>
                </md-field>
              </div>
            </div>
          </div>
        </transition>

        <!-- Step 2 -->
        <transition name="fade">
          <div class="body" v-if="step == 2">
            <h2 style="margin: 45px 0px">
              Adding {{ shop_name }} to Afeshop brand
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
          <div class="next" @click="close_affiliate()">Cancel</div>
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
  name: "affiliate",
  data: () => ({
    step: 1,
    shop_name: "Gopro Shop",
    brand_code: null,
  }),

  methods: {
    reset: function() {
      this.brand_code = null;
    },
    nextstep: function() {
      if (this.step < 2) {
        this.step++;
      }
    },

    previousstep: function() {
      this.step--;
    },

    close_affiliate: function() {
      this.$emit("close_affiliate");
    },
  },

  mounted() {
    this.decount();
  },

  props: {
    affiliate_s: Boolean,
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
  font-size: 12px;
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
  line-height: 25px;
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
