<template>
  <div class="container">
    <inProgress v-if="InProgressActive" @hideInProgress="hideInProgress()" />
    <delivered v-if="DeliveredActive" @hideDelivered="hideDelivered()" />
    <div class="content">
      <div class="totalOrders">18 Orders</div>
      <div class="containerDelPro">
        <div class="orders inProgress">
          <div class="orders_num">9</div>
          <div class="text_orders" style="font-weight: bold; color: #0085ff">
            In Progress
          </div>
          <button class="text_orders vDetails ripple" @click="showinProgress()">
            View details
          </button>
        </div>
        <div class="orders delivered">
          <div class="orders_num">9</div>
          <div class="text_orders" style="font-weight: bold; color: #0085ff">
            Delivered
          </div>
          <button
            class="text_orders vDetails ripple"
            @click="showinDelivered()"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inProgress from "./../components/orders/inProgress";
import delivered from "./../components/orders/delivered";

export default {
  name: "orders",
  components: {
    inProgress,
    delivered,
  },
  data() {
    return {
      InProgressActive: false,
      DeliveredActive: false,
    };
  },

  methods: {
    showinProgress: function () {
      this.InProgressActive = true;
    },
    showinDelivered: function () {
      this.DeliveredActive = true;
    },

    hideInProgress: function () {
      this.InProgressActive = false;
    },
    hideDelivered: function () {
      this.DeliveredActive = false;
    },
  },
};
</script>

<style scoped>
.totalOrders {
  color: #0085ff;
  font-weight: bold;
  border-radius: 13px;
  padding: 12px;
  text-align: center;
  width: 94%;
}
.vDetails {
  margin: 15px 0px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
}

.orders {
  margin: 15px;
  border-radius: 13px;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.25s;
  cursor: pointer;
  position: relative;
  top: 0px;
}

.containerDelPro {
  display: flex;
}
.orders:hover {
  top: -8px;
  box-shadow: -1px 20px 15px #00000036;
}
.orders:hover ~ div {
  opacity: 0.5;
}

.orders_num {
  font-size: 2em;
  font-weight: bold;
  padding: 12px 80px;
  background-color: #0085ff;
  color: #fff;
}

.text_orders {
  padding: 12px;
}
</style>