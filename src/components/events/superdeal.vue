<template>
  <div>
    <transition name="fade">
      <div class="boostshopBloc" v-if="superdeal_s">
        <div class="header">
          <div
            class="selectFrequency"
            v-bind:class="{ active: step == 1 }"
            @click="toggletab(1)"
          >
            <span> Create Super Deal</span>
          </div>

          <div
            class="selectFrequency"
            v-bind:class="{ active: step == 2 }"
            @click="toggletab(2)"
          >
            <span>Create Discount</span>
          </div>
        </div>

        <!-- Product details -->
        <transition name="fade">
          <div class="body" v-if="step == 1">
            <div class="Products_details_db">
              <div class="product_selection">
                <p style="font-size: 18px">Select the product</p>
                <div class="selectGroup">
                  <select v-model="product">
                    <option disabled value="">Select product</option>
                    <option value="Tennis">Tennis</option>
                    <option value="USB">USB</option>
                    <option value="Television">Television</option>
                  </select>
                </div>
              </div>
              <div>
                <img
                  src="./../../assets/images/shop/Productimages/shoe.png"
                  alt=""
                  style="
                    width: 150px;
                    border-radius: 15px;
                    border: 1px solid #aaa;
                  "
                />
              </div>
              <div>
                <p style="font-size: 18px">Product Name</p>

                <h2>{{ product }}</h2>

                <p style="font-size: 18px; margin-top: 10px">Product price</p>
                <h2>10 000 XAF</h2>
              </div>
            </div>

            <!-- Setting the super deal -->
            <div
              class="superdeal"
              style="padding: 18px; border-radius: 18px; margin-top: 50px"
            >
              <div>
                <md-field class="hot">
                  <label>New price</label>
                  <md-input v-model="number" type="number"></md-input>
                </md-field>
              </div>

              <div>
                <md-field class="hot">
                  <label>Percentage off</label>
                  <md-input v-model="number" type="number"></md-input>
                </md-field>
              </div>

              <div>
                <md-field class="hot">
                  <label for="font">Time</label>
                  <md-select v-model="font" name="font" id="font">
                    <md-option value="arial">24H</md-option>
                    <md-option value="calibri">48H</md-option>
                    <md-option value="cambria">72H</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade">
          <div class="body" v-if="step == 2">
            <div class="Products_details_db">
              <div class="product_selection">
                <p style="font-size: 18px">Select the product</p>
                <div class="selectGroup">
                  <select v-model="product">
                    <option disabled value="">Select product</option>
                    <option value="Tennis">Tennis</option>
                    <option value="USB">USB</option>
                    <option value="Television">Television</option>
                  </select>
                </div>
              </div>
              <div>
                <img
                  src="./../../assets/images/shop/Productimages/shoe.png"
                  alt=""
                  style="
                    width: 150px;
                    border-radius: 15px;
                    border: 1px solid #aaa;
                  "
                />
              </div>
              <div>
                <p style="font-size: 18px">Product Name</p>

                <h2>{{ product }}</h2>

                <p style="font-size: 18px; margin-top: 10px">Product price</p>
                <h2>10 000 XAF</h2>
              </div>
            </div>

            <!-- Setting the super deal -->
            <div
              class="superdeal"
              style="padding: 18px; border-radius: 18px; margin-top: 50px"
            >
              <div>
                <md-field class="hot">
                  <label>New price</label>
                  <md-input v-model="number" type="number"></md-input>
                </md-field>
              </div>

              <div>
                <md-field class="hot">
                  <label>Percentage off</label>
                  <md-input v-model="number" type="number"></md-input>
                </md-field>
              </div>
            </div>
          </div>
        </transition>

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
          <div class="cancel" @click="closesuperdeal()">Cancel</div>

          <div class="next" @click="toggletab(3)">Submit</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "superdeal",
  data() {
    return {
      step: 1,
      product: "Tennis",
      font: null,
      number: null,
    };
  },
  props: {
    superdeal_s: Boolean,
  },
  methods: {
    closesuperdeal: function () {
      this.$emit("closesuperdeal");
    },
    toggletab: function (index) {
      this.step = index;
    },
  },
};
</script>

<style scoped>
.superdeal div {
  width: 30%;
}

.superdeal div .hot {
  width: 100%;
}
.superdeal {
  display: flex;
  justify-content: space-between;
}
.Products_details_db {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 17px 25px;
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

.selectFrequency {
  color: #797979;
  background-color: #14141438;
  padding: 14px 85px;
  font-weight: bold;
  border-radius: 65px;
  cursor: pointer;
}

.selectFrequency.active {
  background-color: #ea9c00;
  color: #fff;
}
</style>