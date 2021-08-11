<template>
  <div class="product_details" v-if="DetailScreenActive">
    <img
      src="./../../assets/images/visualElement/close.svg"
      alt=""
      width="45px"
      id="close"
      @click="closeDetailsScreen()"
    />
    <div class="content_details_overflow"></div>
    <div class="container_details">
      <div class="title">
        <img
          src="./../../assets/images/visualElement/afeshopLogo.png"
          alt=""
          width="200px"
        />
        DETAILS PRODUITS
      </div>
      <div class="div_actualContent">
        <div class="left_block" style="position: fixed">
          <div class="image_product">
            <img
              src="./../../assets/images/shop/Productimages/shoe.png"
              alt=""
              width="200px"
            />
          </div>
          <div>
            <div class="name_product">Talons N33</div>
          </div>
          <div class="superdeal superdeal_off">ON SUPER DEAL</div>
          <div class="options" style="display: flex">
            <button
              class="ripple"
              style="flex: 1; margin: 0px 8px"
              width="25px"
            >
              <img
                src="./../../assets/images/menu_icons/delete.svg"
                alt=""
                width="25px"
              />
              Delete
            </button>
          </div>
        </div>
        <div class="right_bloc">
          <div class="section">
            <p>Ajouter le</p>
            <span>12 janvier 2020</span>
          </div>
          <div class="section">
            <p>Description</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              doloremque est dignissimos veniam voluptate id quae illo,
              perspiciatis ea, debitis quam aliquam? Perferendis, eaque
              possimus.
            </span>
          </div>
          <div class="section">
            <p>Taille disponible</p>
            <div>
              <span style="margin: 4px">34</span>
              <span style="margin: 4px">35</span>
              <span style="margin: 4px">36</span>
              <span style="margin: 4px">38</span>
            </div>
          </div>
          <div class="section">
            <p>Stock disponible</p>
            <span>5</span>
          </div>
          <div class="section">
            <p>Stock initale</p>
            <span>80</span>
          </div>
          <div class="section">
            <p>Nombre de pieces vendus</p>
            <span>40</span>
          </div>
          <div class="section couleur">
            <p>Couleur disponible</p>
            <div>
              <span
                style="
                  background-color: #ff7a76;
                  padding: 15px 25px;
                  margin: 4px;
                  cursor: pointer;
                "
              ></span>
              <span
                style="
                  background-color: #ffc859;
                  padding: 15px 25px;
                  margin: 4px;
                  cursor: pointer;
                "
              ></span>
              <span
                style="
                  background-color: #ff7ab0;
                  padding: 15px 25px;
                  margin: 4px;
                  cursor: pointer;
                "
              ></span>
            </div>
          </div>
          <div class="section">
            <p>Prix</p>
            <span>35$</span>
          </div>
          <div class="section" style="grid-column: 3 / 1">
            <p>Note</p>
            <p></p>
            <div>
              <img
                src="./../../assets/images/visualElement/star_active.svg"
                alt=""
                width="15px"
              />
              <img
                src="./../../assets/images/visualElement/star_active.svg"
                alt=""
                width="15px"
              />
              <img
                src="./../../assets/images/visualElement/star_active.svg"
                alt=""
                width="15px"
              />
              <img
                src="./../../assets/images/visualElement/star_inactive.svg"
                alt=""
                width="15px"
              />
              <img
                src="./../../assets/images/visualElement/star_inactive.svg"
                alt=""
                width="15px"
              />
            </div>
          </div>
          <!-- <div class="section" style="grid-column: 3 / 1">
            <p>Progression</p>
            <div>
              <chart v-bind:data="progression"></chart>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product_details",
  props: {
    DetailScreenActive: Boolean,
  },
  components: {},
  data() {
    return {
      progression: [15, 12, 6, 9],
    };
  },
  methods: {
    closeDetailsScreen: function () {
      this.$emit("closeDetailsScreen");
    },
  },
};
</script>

<style scoped>
.superdeal {
  padding: 15px;
  text-align: center;
  margin: 20px 8px;
  border-radius: 51px;
}

.superdeal_off {
  cursor: not-allowed;
  background-color: #dadada;
  color: black;
}

.superdeal_on {
  cursor: not-allowed;
  background-color: #ffb500;
  color: #fff;
}

.right_bloc .section {
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.div_actualContent {
  height: 100%;
  overflow: auto;
  display: flex;
  padding: 0px 15px;
}
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

#close {
  position: fixed;
  top: 50px;
  right: 90px;
  cursor: pointer;
  z-index: 100;
  animation: close_anim 0.5s ease-out 1;
}

@keyframes close_anim {
  0% {
    opacity: 0;
    transform: rotate(0) scale(0);
    right: 40px;
  }
  100% {
    opacity: 1;
    transform: rotate(360deg) scale(1);
    right: 90px;
  }
}

#close:hover {
  transform: scale(1.1);
}
/* Media Query */
/* .container_details .right_bloc[data-v-255cc012] { */
/* padding-left: 67px; */
/* border-top: 1px solid #acacac;
    flex: 1;
    width: 100%;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
} */

.name_product {
  padding: 15px;
  text-align: center;
  color: #008ae6;
  font-weight: bold;
  font-size: 2em;
}
.image_product {
  padding: 12px;
  /* border: 1px solid #aaa; */
  border-radius: 13px;
  box-shadow: 0px 0px 17px #0000001f;
}
.image_product img {
  width: 200px;
}
.container_details {
  opacity: 1;
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 25px 50px;
  border-radius: 13px;
  width: 70vw;
  height: 90vh !important;
  overflow: hidden;
  padding: 25px 15px;
}

.container_details .right_bloc {
  padding-left: 326px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  height: 80%;
  overflow: auto;
}

.section span {
  padding: 4px 13px;
  background-color: #008ae6;
  color: #fff;
  border-radius: 6px;
  margin: 0px 4px;
  display: inline-block;
  font-size: 1em;
}

.section {
  margin-bottom: 15px;
}

.section p {
  color: #aaa;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 10px;
}
.content_details_overflow {
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  z-index: 6;
}

.product_details h2 {
  font-size: 24px;
}
</style>
