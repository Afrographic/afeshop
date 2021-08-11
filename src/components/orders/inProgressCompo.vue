<template>
  <div class="inProgressCompo">
    <div class="evolution_block" v-if="evolutionactive">
      <h2 class="title">
        <div style="display: flex; align-items: center">
          <img
            src="./../../assets/images/visualElement/backicon.svg"
            alt=""
            style="width: 25px; margin-right: 15px"
            @click="closeEvolution()"
            class="close"
          />
          <img
            src="./../../assets/images/visualElement/afeshopLogo.png"
            alt=""
            width="200px"
            class="logo_overlay"
          />
        </div>
        ORDER INFO
      </h2>
      <ul class="infos_details">
        <li>
          <ul>
            <li>Order id</li>
            <li>Quantity & Priice (QP)</li>
            <li>Voucher</li>
            <li>Value added Tax(VAT)</li>
            <li>Shipping Cost(SC)</li>
            <li>Total Price</li>
          </ul>
        </li>
        <li>
          <ul>
            <li style="font-weight: bold">AFESH9834</li>
            <li></li>
          </ul>

          <ul>
            <li>1 x 21</li>
            <li>21</li>
          </ul>

          <ul>
            <li style="font-weight: bold">VOUCH - 15</li>
            <li>(15% = 24,000)</li>
          </ul>

          <ul>
            <li>200</li>
            <li>(200 X 2)</li>
          </ul>

          <ul>
            <li>2500</li>
            <li>(2500 X 1)</li>
          </ul>

          <ul>
            <li>21</li>
            <li>(( QP + VOUCH - 15 ) + VAT + SC)</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="left">
      <div class="image">
        <img src="./../../assets/images/shop/Productimages/shoe.png" alt="" />
      </div>
      <div class="name">Tennis 24</div>
    </div>
    <div class="right">
      <div style="font-size: 1.2em; font-weight: bold">
        Ordered the 10 may 2020
      </div>
      <div style="color: #0085ff; font-size: 1.2em">In progress</div>
      <button class="ripple" style="font-size: 0.9em" @click="activeprogress()">
        Check details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "inProgressCompo",
  props: {},
  data() {
    return {
      evolutionactive: false,
    };
  },
  methods: {
    activeprogress: function() {
      this.evolutionactive = true;
      this.$emit("activeprogress");
    },

    closeEvolution: function() {
      this.evolutionactive = false;
      this.$emit("activeprogress");
    },
  },
};
</script>

<style scoped>
.evolution_block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 13px;
  padding: 25px 56px;
  overflow: auto;

  font-weight: 2em;
}

.evolution_block .infos_details {
  display: flex;
}

.infos_details {
  padding: 25px;
}

.evolution_block .infos_details > li:first-child {
  flex: 1;
  color: #a8a8a8;
}

.evolution_block .infos_details > li:last-child {
  flex: 3;
}

.infos_details > li:last-child ul {
  display: flex;
  justify-content: space-between;
}

.infos_details > li:last-child ul:nth-child(odd) {
  background-color: #e8e8e8;
  border-radius: 41px;
}

.infos_details > li:last-child ul li,
.evolution_block .infos_details > li:first-child li {
  padding: 15px;
}
.inProgressCompo {
  height: 130px;
  border-radius: 13px;
  display: flex;
  align-items: center;
}

.left {
  width: 40%;
  height: 100%;
  overflow: hidden;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #555;
  margin: 10px;
  border: 1px solid #004d93;
  border-radius: 13px;
}

.left img {
  width: 83%;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.right div {
  margin-bottom: 12px;
}
</style>
