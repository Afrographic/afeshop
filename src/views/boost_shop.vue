<template>
  <div class="boostShop">
    <boostshop
      v-bind:boostShop_S="boostShop_S"
      v-on:closeBoostShop="closeBoostShop()"
    />
    <bigpromo
      v-bind:bigpromo_s="bigpromo_s"
      v-on:closebigpromo="closebigpromo()"
    />
    <superdeal
      v-bind:superdeal_s="superdeal_s"
      v-on:closesuperdeal="closesuperdeal()"
    />

    <affiliate
      v-bind:affiliate_s="affiliate_s"
      v-on:close_affiliate="close_affiliate()"
    />
    <div class="header"></div>
    <div class="body">
      <div class="boost_item">
        <div class="image im1"></div>
        <!-- <div class="selectwrapper">
          <div class="selectitem">
            <div class="selected">
              <img src="./../assets/images/visualElement/inactive.svg" alt="" />
            </div>
            <div class="period_price">
              <div>1 day</div>
              <div><b>2$</b></div>
            </div>
          </div>
          <div class="selectitem">
            <div class="selected">
              <img src="./../assets/images/visualElement/inactive.svg" alt="" />
            </div>
            <div class="period_price">
              <div>3 days</div>
              <div><b>4$</b></div>
            </div>
          </div>
          <div class="selectitem">
            <div class="selected">
              <img src="./../assets/images/visualElement/inactive.svg" alt="" />
            </div>
            <div class="period_price">
              <div>1 week</div>
              <div><b>6$</b></div>
            </div>
          </div>
          <div class="selectitem">
            <div class="selected">
              <img src="./../assets/images/visualElement/inactive.svg" alt="" />
            </div>
            <div class="period_price">
              <div>2 weeks</div>
              <div><b>10$</b></div>
            </div>
          </div>
          <div class="selectitem">
            <div class="selected">
              <img src="./../assets/images/visualElement/inactive.svg" alt="" />
            </div>
            <div class="period_price">
              <div>1 month</div>
              <div><b>12$</b></div>
            </div>
          </div>
          <div class="selectitem">
            <div class="selected">
              <img src="./../assets/images/visualElement/inactive.svg" alt="" />
            </div>
            <div class="period_price">
              <div>3 months</div>
              <div><b>14$</b></div>
            </div>
          </div>
          <div class="selectitem">
            <div class="selected">
              <img src="./../assets/images/visualElement/inactive.svg" alt="" />
            </div>
            <div class="period_price">
              <div>6 months</div>
              <div><b>16$</b></div>
            </div>
          </div>
          <div class="selectitem">
            <div class="selected">
              <img src="./../assets/images/visualElement/inactive.svg" alt="" />
            </div>
            <div class="period_price">
              <div>1 year</div>
              <div><b>40$</b></div>
            </div>
          </div>
        </div> -->
        <h2>Boost my shop</h2>
        <p>you can put your articles or page at the top of our plateform</p>

        <button class="ripple" @click="showBoostShop()">Subscribe</button>
      </div>
      <div class="boost_item">
        <div class="image im2"></div>
        <h2>Big Promo</h2>
        <p>
          This will display your banner as direct link to your shop in our
          slide-show
        </p>
        <button class="ripple" @click="showbigpromo()">Subscribe</button>
      </div>
      <div class="boost_item">
        <div class="image im3"></div>
        <!-- <div class="search_bar">
          <img
            src="./../assets/images/visualElement/search_b.svg"
            alt=""
            width="20px"
            style="cursor: pointer"
          />
          <input type="text" placeholder="Article name" class="search_elt" />
        </div>
        <div class="articles_boost">
          <div class="articles">
            <div class="superDeal">
              <div class="section" style="margin: 6px 10px; margin-top: 12px">
                <span class="label">New Price</span>
                <input type="text" style="padding: 0" />
              </div>
              <div class="section" style="margin: 6px 10px">
                <span class="label">Discount</span>
                <input type="text" style="padding: 0" />
              </div>
              <button class="ripple" style="flex: 1; border-radius: 0px">
                Super Deal
              </button>
            </div>
            <img
              src="./../assets/images/shop/Productimages/shoe.png"
              alt=""
              width="80%"
            />
            <div>
              <ul
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <li>Tennis 25</li>
                <li style="font-weight: bold">30$</li>
              </ul>
            </div>
          </div>
          <div class="articles">
            <div class="superDeal">
              <div class="section" style="margin: 6px 10px; margin-top: 12px">
                <span class="label">New Price</span>
                <input type="text" style="padding: 0" />
              </div>
              <div class="section" style="margin: 6px 10px">
                <span class="label">Discount</span>
                <input type="text" style="padding: 0" />
              </div>
              <button class="ripple" style="flex: 1; border-radius: 0px">
                Super Deal
              </button>
            </div>
            <img
              src="./../assets/images/shop/Productimages/shoe.png"
              alt=""
              width="80%"
            />
            <div>
              <ul
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <li>Tennis 25</li>
                <li style="font-weight: bold">30$</li>
              </ul>
            </div>
          </div>
        </div> -->
        <h2 class="b_articles">Add Article to Super Deal</h2>
        <p>
          This feature allow you to create super deal and discount on your
          existing products
        </p>
        <button class="ripple" @click="showsuperdeal()">Create</button>
      </div>
      <div class="boost_item">
        <div class="image im4"></div>
        <h2 class="b_articles">Become an Afeshop brand</h2>
        <p>
          Become an Afeshop brand part will allow your shop to enjoy boosting
          and big promo at all times
        </p>
        <button class="ripple" @click="show_affiliate()">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
import bigpromo from "./../components/events/bigpromo";
import boostshop from "./../components/events/boostshop";
import superdeal from "./../components/events/superdeal";
import affiliate from "./../components/events/affiliate";

export default {
  name: "boost_shop",
  components: {
    bigpromo,
    boostshop,
    superdeal,
    affiliate,
  },
  data() {
    return {
      boostShop_S: false,
      bigpromo_s: false,
      superdeal_s: false,
      affiliate_s: false,
    };
  },

  methods: {
    closeBoostShop: function() {
      this.boostShop_S = false;
    },
    showBoostShop: function() {
      this.boostShop_S = true;
    },

    closebigpromo: function() {
      this.bigpromo_s = false;
    },

    showbigpromo: function() {
      this.bigpromo_s = true;
    },

    closesuperdeal: function() {
      this.superdeal_s = false;
    },

    showsuperdeal: function() {
      this.superdeal_s = true;
    },

    close_affiliate: function() {
      this.affiliate_s = false;
    },

    show_affiliate: function() {
      this.affiliate_s = true;
    },
  },
};
</script>

<style scoped>
.im1 {
  background-image: url("./../assets/images/visualElement/boostShop.jpg");
}
.im2 {
  background-image: url("./../assets/images/visualElement/bigPromo.jpg");
}

.im3 {
  background-image: url("./../assets/images/visualElement/superdeal.jpg");
}

.im4 {
  background-image: url("./../assets/images/visualElement/affiliate.jpg");
}
.boost_item .image {
  width: 100%;
  height: 300px;
  background-size: cover;
}
.boost_item {
  background-color: white;
  border-radius: 13px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #aaaaaa47;
}

.boost_item h2 {
  font-size: 2em !important;
  text-align: center;
  margin-top: 20px;
  padding: 12px;
}

.boost_item p {
  text-align: center;
  font-size: 1.3em !important;
  margin: 10px 0px !important;
  padding: 0px 31px;
}
.boost_item button {
  margin-bottom: 20px;
}
.period_price img {
  position: relative;
  left: 21px;
}
.footer {
  margin: 25px 0px;
}
.articles_boost {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
}
.superDeal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 0px 1px rgba(153, 149, 149, 0);
  opacity: 0;
  transform: scale(0);
}
.articles:hover .superDeal {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0px 0px 18px 9px #00000021;
}

.articles {
  background-color: #fff;
  border-radius: 13px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  position: relative;
  border: 1px solid #00000026;
}

.search_bar {
  display: flex;
  border: 1px solid rgba(80, 80, 80, 0.493);
  padding: 8px;
  border-radius: 13px;
  margin: 8px 0px;
  width: 100%;
}
.selectitem {
  font-size: 1.2em;
}
.search_bar input {
  background-color: transparent;
  border: none;
  order: 1;
  flex: 1;
}
.search_bar img {
  order: 2;
}
.body {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(3, 1fr);
}
.period_price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
/* Select style */
.selectwrapper {
  margin-top: 15px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
}
.selectitem {
  background-color: #fff;
  margin: 4px;
  box-shadow: -3px 10px 12px rgb(0 0 0 / 11%);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  overflow: hidden;
}

.selectitem .selected {
  width: 50px;
  background-color: #fafbfc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected_active {
  background-color: #008ae6 !important;
}

.selectitem .selected img {
  width: 50%;
  animation: scale 0.25s ease-out 1;
}
@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.selectitem div:last-child {
  padding: 7px 12px;
}

/* end */
.boostShop {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header {
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}
</style>
