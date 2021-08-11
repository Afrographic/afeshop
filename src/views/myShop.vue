<template>
  <div>
    <transition name="fade_in">
      <product_details
        v-if="DetailScreenActive"
        v-bind:DetailScreenActive="DetailScreenActive"
        v-on:closeDetailsScreen="showDetailsScreen"
      />
    </transition>
    <transition name="fade_in">
      <add_product
        v-if="ProductScreenActive"
        v-bind:ProductScreenActive="ProductScreenActive"
        v-on:closeAddProductScreen="AddProductScreen"
      />
    </transition>
    <transition name="fade_in">
      <modify_product
        v-if="ModifyProductScreenActive"
        v-on:closeModifyProductScreen="showModifyProductScreen"
        v-bind:ModifyProductScreenActive="ModifyProductScreenActive"
        v-bind:OldData="data_place"
      />
    </transition>
    <div class="header_mySHop">
      <div id="changeCover">
        <img
          src="./../assets/images/visualElement/camera.png"
          alt=""
          width="25px"
        />
      </div>
      <div class="search_bar">
        <img
          src="./../assets/images/visualElement/search_icon.svg"
          alt=""
          width="25px"
        />
        <input type="text" placeholder="Nom du produit" class="search_elt" />
      </div>
    </div>
    <div class="productContainer">
      <!-- Products items -->
      <product_item
        v-for="product_it in product_items"
        v-bind:key="product_it.id"
        v-on:showDetailsScreen="showDetailsScreen()"
        v-on:showModifyProductScreen="showModifyProductScreen"
      />
      <!-- End -->
      <div class="product_item last" @click="AddProductScreen()">
        <h1>+</h1>
      </div>
    </div>
    <div class="footer_mySHop">
      <div class="pagination">
        <div>
          <span
            ><img
              src="./../assets/images/visualElement/backpage.svg"
              alt=""
              width="15px"
          /></span>
          <span class="page active" @click="paginate(1)" page_num="1">1</span>
          <span class="page" @click="paginate(2)" page_num="2">2</span>
          <span class="page" @click="paginate(3)" page_num="3">3</span>
          <span class="page" @click="paginate(4)" page_num="4">4</span>
          <span class="page" @click="paginate(5)" page_num="5">5</span>
          <span class="page" @click="paginate(6)" page_num="6">6</span>
          <span class="page" @click="paginate(7)" page_num="7">7</span>
          <span>...</span>
          <span class="page" @click="paginate(30)" page_num="30">30</span>
          <span class="page" @click="paginate(31)" page_num="31">31</span>
          <span
            ><img
              src="./../assets/images/visualElement/nextpage.svg"
              alt=""
              width="15px"
          /></span>
        </div>
      </div>
      <div class="reachPage">
        <div style="display: flex; align-items: center">
          <span>Go to page</span>
          <input
            type="number"
            placeholder="page number"
            class="page_number"
            v-model="page_number"
          />
          <button class="submit_page_btn" @click="paginate(page_number)">
            <span style="position: relative">GO</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product_item from "./../components/myShop/product_item";
import product_details from "./../components/myShop/product_details";
import add_product from "./../components/myShop/addProduct";
import modify_product from "./../components/myShop/modify_product";

export default {
  name: "MyShop",
  components: {
    product_item,
    product_details,
    add_product,
    modify_product,
  },
  data() {
    return {
      currentPage: 1,
      page_number: 5,
      product_items: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
      ],
      DetailScreenActive: false,
      ProductScreenActive: false,
      ModifyProductScreenActive: false,
      data_place: {},
    };
  },
  methods: {
    $: function (target) {
      return document.querySelector(target);
    },
    $$: function (target) {
      return document.querySelector(target);
    },
    paginate: function (page_num) {
      this.$(`span[page_num='${this.currentPage}']`).classList.remove("active");
      this.$(`span[page_num='${page_num}']`).classList.add("active");
      this.currentPage = page_num;
    },
    showDetailsScreen: function () {
      this.DetailScreenActive = !this.DetailScreenActive;
      console.log(this.DetailScreenActive);
    },
    AddProductScreen: function () {
      this.ProductScreenActive = !this.ProductScreenActive;
    },
    showModifyProductScreen: function (data) {
      this.ModifyProductScreenActive = !this.ModifyProductScreenActive;
      this.data_place = data;
    },
  },
};
</script>

<style scoped>
.search_bar {
  position: absolute;
  padding: 12px;
  top: 10px;
  right: 10px;
  background-color: #c5c5c5;
  border-radius: 13px;
  display: flex;
  align-items: center;
}

.search_bar img {
  cursor: pointer;
  order: 2;
}

.search_bar img:hover {
  transform: scale(1.1) rotate(360deg);
}

.search_bar input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
}
/* Footer */
.submit_page_btn {
  color: #fff;
  background-color: #0085ff;
  border: none;
  cursor: pointer;
  border-radius: 13px;
  padding: 12px;
  position: relative;
  overflow: hidden;
  /* 004D93 */
}

.submit_page_btn:before {
  content: "";
  width: 0%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fdb100;
  transition: 0.5s;
}

.submit_page_btn:hover {
  transform: scale(1.1);
}

.submit_page_btn:hover:before {
  width: 100%;
}
.page_number {
  margin: 0 12px;
  text-align: center;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 13px;
  padding: 12px 0px;
}
.footer_mySHop {
  height: 70px;
  width: 100%;

  display: flex;
  font-size: 1.5em !important;
}

.footer_mySHop .pagination,
.footer_mySHop .reachPage {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
}
.pagination {
  flex: 3;
}

.reachPage {
  flex: 2;
}

.pagination span.page {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0px 8px;
  border-radius: 50%;
  background-color: rgb(0 0 0 / 7%);
  cursor: pointer;
  line-height: 30px;
  text-align: center;
}

.pagination span.page.active {
  color: #fff;
  background-color: #0085ff;
}

.pagination span img {
  margin: 0px 12px;
  width: 10px;
  position: relative;
  top: 4px;
}

/* End */
/* Product last component */
.product_item.last {
  background-color: #0085ff2b;
  color: #0085ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  cursor: pointer;
}

.product_item.last h1 {
  font-size: 10em !important;
}
/* End */
#changeCover {
  position: absolute;
  padding: 12px;
  top: 10px;
  left: 10px;
  background-color: #00000059;
  border-radius: 13px;
  cursor: pointer;
}

#changeCover img:hover {
  transform: scale(1.1) rotate(360deg);
}

.header_mySHop {
  position: relative;
  height: 261px;
  width: 100%;
  border-radius: 13px;
  border: 1px solid #ddd;
  background-size: cover;
  background-image: url("../assets/images/shop/cover_image/header.png");
}

.productContainer {
  margin: 20px 0px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  /* grid-template-columns: repeat(5, 1fr); */
}
</style>
