<template>
  <div class="container">
    <withdraw v-bind:withdraw_active="withdraw_active" />

    <div class="close" v-if="withdraw_active == true">
      <md-button
        style="background-color: red; box-shadow: initial"
        class="md-icon-button md-raised md-primary"
        @click="toggle_withdrawScreen()"
      >
        <md-icon>clear</md-icon>
      </md-button>
    </div>

    <div style="display: flex; justify-content: space-between">
      <div class="wallet">
        <div style="font-size: 18px; color: #ffffffb8">Balance</div>
        <div class="wallet_lc">
          <div style="font-size: 36px; font-weight: bold">478 000 XAF</div>
          <div>
            <md-button
              @click="toggle_withdrawScreen()"
              style="
                border-radius: 50px;
                text-transform: initial;
                background-color: white;
                color: #1565c0;
                margin-top: 46px;
              "
            >
              Witdraw
            </md-button>
          </div>
        </div>
      </div>
      <div class="illustration">
        <img
          src="./../assets/images/visualElement/cash.jpg"
          alt=""
          width="193px"
        />
      </div>
    </div>

    <div class="history" style="margin-top: 45px">
      <md-table v-model="paymenthistory" md-card>
        <md-table-toolbar>
          <h1 class="md-title">Cash activity history</h1>
        </md-table-toolbar>

        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          v-bind:class="{
            avalaible: item.status == 'Avalaible',
            not_avalaible: item.status == 'Not avalaible',
            cash_in: item.status == 'Cash In',
          }"
        >
          <md-table-cell md-label="Order_ID" md-sort-by="orderID" md-numeric>{{
            item.orderID
          }}</md-table-cell>
          <md-table-cell md-label="Amount" md-sort-by="amount">{{
            item.amount
          }}</md-table-cell>
          <md-table-cell md-label="Date" md-sort-by="date">{{
            item.date
          }}</md-table-cell>
          <md-table-cell md-label="Status" md-sort-by="status">{{
            item.status
          }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import withdraw from "./../components/wallet/withdraw";
export default {
  name: "wallet",
  components: {
    withdraw,
  },
  data() {
    return {
      withdraw_active: false,
      paymenthistory: [
        {
          orderID: 14526541,
          amount: "5000 F",
          status: "Not avalaible",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "15000 F",
          status: "Avalaible",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "15000 F",
          status: "Cash In",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "5000 F",
          status: "Not avalaible",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "15000 F",
          status: "Cash In",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "15000 F",
          status: "Avalaible",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "15000 F",
          status: "Cash In",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "15000 F",
          status: "Cash In",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "15000 F",
          status: "Avalaible",
          date: "12/05/20",
        },
        {
          orderID: 14526541,
          amount: "15000 F",
          status: "Cash In",
          date: "12/05/20",
        },
      ],
    };
  },
  methods: {
    updateScroll() {
      console.log(window.scrollY);

      console.log("Call this shit");
    },

    toggle_withdrawScreen() {
      this.withdraw_active = !this.withdraw_active;
    },
  },

  mounted() {
    console.log("Not working shit");
    window.addEventListener("scroll", this.updateScroll());
  },

  destroy() {
    window.removeEventListener("scroll", this.updateScroll());
  },
};
</script>

<style scoped>
.close {
  position: absolute;
  top: 25px;
  right: 17px;
  z-index: 5000;
}
.wallet_lc {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%; */
  margin-top: 25px;
}
.container {
  padding: 15px;
}
.wallet {
  border-radius: 8px;
  background-color: #1565c0;
  padding: 20px;
  color: #fff;
  width: 300px;

  /* display: flex;
  justify-content: space-between;
  align-items: center; */
}

.avalaible {
  background-color: #1565c0;
  color: #fff;
}

.not_avalaible {
  color: #0000005c;
}

.cash_in {
  color: rgba(0, 0, 0, 0.767);
  font-weight: bold;
}
</style>