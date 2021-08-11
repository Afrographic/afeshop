<template>
  <div class="delivered">
    <img
      src="./../../assets/images/visualElement/close.svg"
      alt=""
      width="45px"
      id="close"
      v-bind:class="{ inactive_close: inactive_close }"
      @click="hideDelivered()"
    />
    <div class="overflow"></div>
    <div class="content">
      <h2>Orders in Delivered (<b>9</b>)</h2>
      <div class="orderInProgress">
        <deliveredCompo v-on:activeComments="activecommments" />
        <deliveredCompo v-on:activeComments="activecommments" />
        <deliveredCompo v-on:activeComments="activecommments" />
        <deliveredCompo v-on:activeComments="activecommments" />
        <deliveredCompo v-on:activeComments="activecommments" />
        <deliveredCompo v-on:activeComments="activecommments" />
        <deliveredCompo v-on:activeComments="activecommments" />
        <deliveredCompo v-on:activeComments="activecommments" />
        <deliveredCompo v-on:activeComments="activecommments" />
      </div>
    </div>
  </div>
</template>

<script>
import deliveredCompo from "./deliveredCompo";
export default {
  name: "delivered",
  components: {
    deliveredCompo,
  },
  data() {
    return {
      inactive_close: false,
    };
  },
  methods: {
    hideDelivered: function () {
      this.$emit("hideDelivered");
    },

    activecommments: function () {
      this.inactive_close = !this.inactive_close;
    },
  },
};
</script>

<style scoped>
@keyframes showUp {
  0% {
    opacity: 0;
    top: 20%;
  }
  100% {
    opacity: 1;
    top: 50%;
  }
}
.delivered {
  animation: showUp 0.5s ease-out 1;
}
.orderInProgress {
  margin-top: 20px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, 1fr);
}
.overflow {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 8;
  background-color: #fff;
}

.content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 80vw;
  overflow: auto;
  background-color: white;
  padding: 18px;
  z-index: 10;
  border-radius: 13px;
}
</style>