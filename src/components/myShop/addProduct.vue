<template>
  <div class="product_details" v-if="ProductScreenActive">
    <img
      src="./../../assets/images/visualElement/close.svg"
      alt=""
      width="45px"
      id="close"
      @click="closeAddProductScreen()"
    />
    <div class="content_details_overflow"></div>
    <div class="container_details">
      <div class="title">
        <img
          src="./../../assets/images/visualElement/afeshopLogo.png"
          alt=""
          width="200px"
        />
        ADD NEW PRODUCT
      </div>
      <div class="header_addProduct">
        <div class="left_block">
          <div class="image_product" style="display: flex; cursor: pointer">
            <div class="import_image">Import image</div>
            <img
              src="./../../assets/images/visualElement/temp_image.svg"
              alt=""
              width="100px"
            />
          </div>
        </div>
        <div class="right_bloc">
          <div class="section">
            <span class="label">Name of the product</span>
            <input
              formControlName="code"
              type="text"
              name="code"
              placeholder="Name of the product"
              autocomplete="off"
            />
          </div>
          <div class="section">
            <span class="label">Colours</span>
            <input
              formControlName="code"
              type="text"
              name="code"
              id="code"
              placeholder="Input colors separate them with a comma"
              autocomplete="off"
            />
          </div>
          <div class="section">
            <span class="label">Sizes</span>
            <input
              formControlName="code"
              type="text"
              name="code"
              id="code"
              placeholder="Input Sizes separate them with a comma"
              autocomplete="off"
            />
          </div>
          <div class="section">
            <span class="label">Price</span>
            <input
              formControlName="code"
              type="text"
              name="code"
              id="code"
              placeholder="Input the price"
              autocomplete="off"
            />
          </div>
          <div class="section">
            <span class="label">Stock</span>
            <input
              formControlName="code"
              type="text"
              name="code"
              id="code"
              placeholder="Input the stock"
              autocomplete="off"
            />
          </div>
          <div class="section">
            <span class="label">Cathegorie</span>
            <select name="" id="">
              <option value="Electronique">Electronique</option>
              <option value="Habillement">Habillement</option>
              <option value="LOrem">Lorem</option>
              <option value="Lorem">Lorem</option>
              <option value="Lorem">Lorem</option>
            </select>
          </div>
          <div class="section">
            <span class="label">Specification</span>
            <select name="" id="">
              <option value="Taille">Taille</option>
              <option value="Couleur">Couleur</option>
              <option value="LOrem">Lorem</option>
              <option value="Lorem">Lorem</option>
              <option value="Lorem">Lorem</option>
            </select>
          </div>
          <div class="section" style="grid-column: 3/1">
            <span class="label">Description</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Entrez la description"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="footer_addProduct">
        <button class="annuler ripple" @click="closeAddProductScreen()">
          <img
            src="./../../assets/images/visualElement/reset.svg"
            alt=""
            width="25px"
          />
          Cancel
        </button>
        <button class="Ajouter ripple">
          <img
            src="./../../assets/images/visualElement/save.svg"
            alt=""
            width="25px"
          />
          ADD
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "add_product",
  props: {
    ProductScreenActive: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    closeAddProductScreen: function () {
      this.$emit("closeAddProductScreen");
    },
  },
};
</script>

<style scoped>
.import_image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px;
  background-color: #2196f3;
  color: #fff;
  border-radius: 25px;
}

/* Form Design */
.footer_addProduct {
  display: flex;
}
.footer_addProduct button {
  flex: 1;
  margin: 12px;
  padding: 10px 15px;
}
/* End */
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
  padding: 53px;
  /* border: 1px solid #aaa; */
  border-radius: 13px;
  cursor: pointer;
  margin-right: 25px;
  position: relative;
  /* box-shadow: 0px 0px 12px #0000000d; */
  background-color: #2196f30a;
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
  width: 60vw;
  max-height: 80vh;
  overflow: auto;
}

.header_addProduct {
  display: flex;
  align-items: stretch;
}

.container_details .right_bloc {
  /* padding-left: 67px; */
  flex: 1;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(2, 1fr);
  height: 300px;
  overflow: auto;
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
