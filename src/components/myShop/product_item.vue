<template>
  <div class="product_item">
    <div
      class="detailsBox"
      @mouseover="activelabel()"
      @mouseout="desactivatelabel()"
      @click="showDetailsScreen()"
    >
      <md-button class="md-icon-button">
        <md-icon> more_horiz </md-icon>
        <md-tooltip md-direction="bottom">Details</md-tooltip>
      </md-button>
    </div>
    <div
      class="detailsBox modify"
      @mouseover="activelabel2()"
      @mouseout="desactivatelabel2()"
      @click="showModifyProductScreen()"
    >
      <md-button class="md-icon-button">
        <md-icon> create </md-icon>
        <md-tooltip md-direction="bottom">edit</md-tooltip>
      </md-button>
    </div>
    <div class="image_product"></div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
      "
    >
      <div class="name">Tennis 25</div>
      <div class="price">25$</div>
    </div>
    <div class="stock">Stock <b>45</b></div>
  </div>
</template>

<script>
export default {
  name: "product_item",
  props: {
    name: String,
    image_path: String,
    stock: Number,
    Colors: String,
    size: String,
    DetailsScreenActive: Boolean,
  },
  data() {
    return {
      detail_label_active: false,
      detail_label2_active: false,
    };
  },
  methods: {
    activelabel() {
      this.detail_label_active = true;
    },
    desactivatelabel() {
      this.detail_label_active = false;
    },
    activelabel2() {
      this.detail_label2_active = true;
    },
    desactivatelabel2() {
      this.detail_label2_active = false;
    },
    showDetailsScreen() {
      this.$emit("showDetailsScreen");
    },
    showModifyProductScreen() {
      let data = {
        name: "Tennis 25",
        sizes: "34,38",
        colors: "red,green",
        stock: 45,
        image: "shoe.png",
        price: "25$",
      };
      this.$emit("showModifyProductScreen", data);
    },
  },
};
</script>

<style scoped>
.price {
  color: #aaa;
}
.detailsBox {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modify {
  left: 10px !important;
}

.product_item {
  overflow: hidden;
  background-color: #fff;
  border-radius: 13px;
  cursor: pointer;
  position: relative;
  top: 0px;
  border: 1px solid #aaaaaa47;
}

.product_item:not(.last):hover {
  top: -10px;
  box-shadow: rgb(0 0 0 / 8%) 1px 20px 30px;
}

.image_product {
  height: 100px;
  background-image: url("./../../assets/images/shop/Productimages/shoe.png");
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.details {
  display: flex;
}

.details div {
  padding: 12px;
  border-radius: 13px;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #0000000d;
  margin: 6px 10px;
}

.name {
  text-align: center;
  font-size: 1.2em !important;
  padding: 7px 0px;
  color: rgb(19, 18, 18);
  font-weight: bold;
}

.stock {
  padding: 12px;
  text-align: center;
  color: #df9a00;
  background-color: #fafafc;
}
</style>