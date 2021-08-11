<template>
  <div v-if="active">
    <div class="loader_block" v-if="api_loading">
      <md-progress-spinner
        :md-diameter="30"
        :md-stroke="3"
        md-mode="indeterminate"
      ></md-progress-spinner>
    </div>
    <verify_email :verify_email_screen="verify_email_screen" />
    <verify_phone />
    <div class="content_auth register">
      <div class="header_regis">
        <img
          src="./../assets/images/visualElement/afeshopLogo.png"
          alt=""
          width="200px"
        />
        <h2 style="text-align:left;margin-top:45px;margin-bottom:20px">
          Register
        </h2>
        <p style="font-size:16px;margin:10px 0px;text-align:left;">
          Create your Shop account by filling this form
        </p>

        <p style="margin:25px 0px;">
          Already have an account? <br />
          <span class="createAccount" @click="ShowSiginScreen()"
            >Sign in here</span
          >
        </p>
      </div>

      <div class="stepper_register">
        <md-steppers :md-active-step.sync="active_">
          <md-step
            id="first"
            md-label="Basic shop information"
            :md-done.sync="first"
          >
            <form
              novalidate
              class="md-layout"
              @submit.prevent="validateUser"
              style="margin:auto;max-width:70%;flex:1;display:flex;flex-direction:column;overflow:auto;"
            >
              <div class="formContainer">
                <div>
                  <md-icon>account_circle</md-icon>
                  <md-field :class="getValidationClass('firstName')">
                    <label>First Name</label>
                    <md-input v-model="form.firstName"></md-input>
                    <span class="md-error">This field is required</span>
                  </md-field>
                </div>
                <div>
                  <md-icon>account_circle</md-icon>
                  <md-field :class="getValidationClass('lastName')">
                    <label>Last Name</label>
                    <md-input v-model="form.lastName"></md-input>
                    <span class="md-error">This field is required</span>
                  </md-field>
                </div>

                <div>
                  <md-icon>place</md-icon>
                  <md-field :class="getValidationClass('address')">
                    <label>Adresse</label>
                    <md-input v-model="form.address"></md-input>
                    <span class="md-error">This field is required</span>
                  </md-field>
                </div>

                <div>
                  <md-icon>shopping_cart</md-icon>
                  <md-field :class="getValidationClass('shop_name')">
                    <label>Shop name</label>
                    <md-input v-model="form.shop_name"></md-input>
                    <span class="md-error">Incorrect value</span>
                  </md-field>
                </div>
                <div style="margin:10px 0px;">
                  <md-icon>chrome_reader_mode</md-icon>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Shop type"
                    placement="bottom"
                  >
                    <el-select v-model="form.shop_type" placeholder="Shop type">
                      <el-option
                        v-for="item in shop_types"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name"
                      >
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </div>
                <div>
                  <md-icon>email</md-icon>
                  <md-field :class="getValidationClass('email')">
                    <label>Email</label>
                    <md-input v-model="form.email" type="email"></md-input>
                    <span class="md-error" v-if="!$v.form.email.required"
                      >The email is required</span
                    >
                    <span class="md-error" v-else-if="!$v.form.email.email"
                      >Invalid email</span
                    >
                  </md-field>
                </div>
                <div>
                  <md-icon>call</md-icon>
                  <md-field :class="getValidationClass('phone')">
                    <label>Phone Number</label>
                    <md-input v-model="form.phone" type="number"></md-input>
                    <span class="md-error" v-if="!$v.form.email.minLength"
                      >Invalid Phone number</span
                    >
                  </md-field>
                </div>

                <div style="margin:10px 0px;" class="eui_style">
                  <md-icon>inventory</md-icon>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Shop cathegory"
                    placement="bottom"
                  >
                    <el-select
                      v-model="form.shop_cath"
                      placeholder="Shop cathegory"
                    >
                      <el-option
                        v-for="item in shops_caths"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </div>

                <div class="eui_style">
                  <md-icon>language</md-icon>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="Country"
                    placement="bottom"
                  >
                    <el-select v-model="form.country" placeholder="Country">
                      <el-option
                        v-for="item in countries"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </div>
                <div class="eui_style" v-if="form.country != null">
                  <md-icon>language</md-icon>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="State"
                    placement="bottom"
                  >
                    <el-select v-model="form.state" placeholder="State">
                      <el-option
                        v-for="item in countries[0].states"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </div>
                <div class="eui_style" v-if="form.state != null">
                  <md-icon>language</md-icon>
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="City"
                    placement="bottom"
                  >
                    <el-select v-model="form.city" placeholder="City">
                      <el-option
                        v-for="item in countries[0].states[form.state - 1]
                          .cities"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </el-tooltip>
                </div>
              </div>

              <md-button
                type="submit"
                class="md-raised md-primary"
                style="box-shadow:initial;border-radius:65px;flex:1;"
                >NEXT
              </md-button>
            </form>
          </md-step>

          <md-step
            id="second"
            md-label="Legal Shop information "
            :md-done.sync="second"
          >
            <div class="logo_cover_block" style="margin-top:40px;">
              <input
                type="file"
                id="cover"
                hidden
                @change="load_cover()"
                ref="cover"
              />
              <input
                type="file"
                id="logo"
                hidden
                @change="load_logo()"
                ref="logo"
              />
              <el-tooltip
                class="item"
                effect="dark"
                content="Click to set a custom cover of your shop!"
                placement="bottom"
              >
                <div
                  class="cover_shop"
                  @click="loadCoverShop()"
                  v-bind:style="{
                    backgroundImage:
                      temp_cover != null ? `url('${temp_cover}')` : null,
                  }"
                ></div>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="Click to the logo of your shop!"
                placement="bottom"
              >
                <div
                  class="logo_shop"
                  @click="loadLogoShop()"
                  v-bind:style="{
                    backgroundImage:
                      temp_logo != null ? `url('${temp_logo}')` : null,
                  }"
                ></div>
              </el-tooltip>
            </div>
            <form
              novalidate
              class="md-layout"
              @submit.prevent="submitFile"
              style="margin:auto;max-width:70%;flex:1;display:flex;flex-direction:column;overflow:auto;"
            >
              <div class="formContainer">
                <div>
                  <md-field>
                    <label>Id Card Scanned images</label>
                    <md-file
                      v-model="id_card_temp"
                      multiple
                      @md-change="onFileUpload"
                    />
                  </md-field>
                </div>
                <div v-if="form.shop_type == 'Business'">
                  <md-field>
                    <label>Shop Legal document</label>
                    <md-file
                      v-model="shop_doc_temp"
                      multiple
                      @md-change="onFileUpload2"
                    />
                  </md-field>
                </div>

                <md-button
                  type="submit"
                  class="md-raised md-primary"
                  style="box-shadow:initial;border-radius:65px;width:100%;text-align:center;"
                  @click="register()"
                  >NEXT
                </md-button>
              </div>
            </form>
          </md-step>
          <md-step
            id="third"
            md-label="Submit the password"
            :md-done.sync="third"
          >
            <div class="formContainer" style="margin:auto;max-width:70%;">
              <div>
                <md-icon>lock</md-icon>
                <md-field>
                  <label>Password</label>
                  <md-input v-model="form.password" type="password"></md-input>
                </md-field>
              </div>

              <div>
                <md-icon>lock</md-icon>
                <md-field>
                  <label>Confirm password</label>
                  <md-input
                    v-model="form.confirm_password"
                    type="password"
                  ></md-input>
                </md-field>
              </div>
              <md-button
                type="submit"
                class="md-raised md-primary"
                style="box-shadow:initial;border-radius:65px;width:100%;text-align:center;"
                @click="finalRegister()"
                >REGISTER
              </md-button>
            </div>
          </md-step>
        </md-steppers>
      </div>
    </div>

    <md-snackbar
      :md-position="'center'"
      :md-duration="Infinity"
      :md-active.sync="showSnackbar"
    >
      <span>{{ error_message }}</span>
      <md-button class="md-primary" @click="showSnackbar = false"
        >CLOSE</md-button
      >
    </md-snackbar>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Account created</md-dialog-title>

      <div style="margin:12px 45px;">{{ messageSucess }}</div>

      <md-dialog-actions>
        <md-button class="md-primary" @click="mdDialog()"
          >Go to login Screen</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
<script>
import {validationMixin} from 'vuelidate';
import {required, email, minLength} from 'vuelidate/lib/validators';
import verify_email from './../components/shopDetails/verify_email';
import verify_phone from './../components/shopDetails/verify_phone';
export default {
  data() {
    return {
      temp_logo: null,
      temp_cover: null,
      active_: 'first',
      first: false,
      second: false,
      third: false,
      verify_email_screen: false,
      error_message: null,
      showSnackbar: false,
      api_loading: false,
      messageSucess: null,
      multiple: null,
      showDialog: false,
      id_card_temp: null,
      shop_doc_temp: null,
      form: {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        id_card: null,
        shop_doc: null,
        shop_name: null,
        shop_cath: null,
        password: null,
        confirm_password: null,
        country: null,
        shop_type: null,
        address: null,
        state: null,
        city: null,
        cover: null,
        logo: null,
        docs: null,
      },
      countries: [],
      states: [],
      cities: [],
      shops_caths: [],
      shop_types: [
        {
          id: 0,
          name: 'Personnal',
        },
        {
          id: 1,
          name: 'Business',
        },
      ],
      value: '',
    };
  },

  mounted() {
    // Get the country names
    const options = {
      method: 'GET',
      url: 'https://afeshop.africa/app/api/route237/countries/all',
    };

    this.axios
      .request(options)
      .then(function(response) {
        renderCountry(response.data.data.countries);
      })
      .catch(function(error) {
        console.error(error);
      });

    let that = this;

    function renderCountry(countries) {
      countries.forEach(function(country) {
        that.countries.push({
          id: country.id,
          name: country.name,
          phone_code: country.phone_code,
          states: country.states,
        });
      });
    }

    console.log('Countries');
    console.log(this.countries);

    // Getting all the cathegories
    const options2 = {
      method: 'GET',
      url: 'https://afeshop.africa/app/api/route237/main/categories',
    };

    this.axios
      .request(options2)
      .then(function(response) {
        LoadCathegories(response.data.data.all_categories);
      })
      .catch(function(error) {
        console.error(error);
      });

    function LoadCathegories(cath_array) {
      cath_array.forEach(function(cath_item) {
        that.shops_caths.push({
          id: cath_item.id,
          name: cath_item.name,
        });
      });
    }
  },
  components: {
    verify_email,
    verify_phone,
  },
  name: 'register',
  mixins: [validationMixin],
  props: {
    active: Boolean,
  },
  methods: {
    $: function(target) {
      return document.querySelector(target);
    },
    $$: function(target) {
      return document.querySelectorAll(target);
    },
    loadLogoShop: function() {
      console.log(this.$('#logo'));
      this.$('#logo').click();
    },
    loadCoverShop: function() {
      console.log(this.$('#cover'));
      this.$('#cover').click();
    },
    load_logo() {
      this.form.logo = this.$refs.logo.files[0];
      let that = this;
      let reader = new FileReader();
      reader.onload = function() {
        that.temp_logo = this.result;
      };
      reader.readAsDataURL(this.$refs.logo.files[0]);
    },
    load_cover() {
      this.form.cover = this.$refs.cover.files[0];
      let that = this;
      let reader = new FileReader();
      reader.onload = function() {
        that.temp_cover = this.result;
      };
      reader.readAsDataURL(this.$refs.cover.files[0]);
    },
    errorElementUi() {
      this.$message.error({message: this.error_message, duration: 2000});
    },
    submitFile: function() {
      console.log('Reprise directe');
    },
    ShowSiginScreen: function() {
      this.$emit('ShowSiginScreen');
    },
    mdDialog: function() {
      this.showDialog = false;
      this.ShowSiginScreen();
    },

    setDone(id, index) {
      this[id] = true;

      if (index) {
        this.active_ = index;
      }
    },

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
    },

    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        if (this.form.shop_type == null) {
          this.error_message = 'Shop type cannot be empty!';
          this.showSnackbar = true;
        } else if (this.form.password != this.form.confirm_password) {
          this.error_message = "Password don't match!";
          this.showSnackbar = true;
        } else if (this.form.shop_cath == null) {
          this.error_message = 'Shop cathegory cannot be empty!';
          this.showSnackbar = true;
        } else if (this.form.country == null) {
          this.error_message = 'Country cannot be empty!';
          this.showSnackbar = true;
        } else if (this.form.state == null) {
          this.error_message = 'state is required!';
          this.errorElementUi();
        } else if (this.form.city == null) {
          this.error_message = 'City is required!';
          this.errorElementUi();
        } else {
          console.log('shop name ' + this.form.shop_name);
          console.log('shop email ' + this.form.email);
          console.log('shop phone ' + this.form.phone);
          console.log('shop cathegory ' + this.form.shop_cath);
          console.log('shop country ' + this.form.country);
          console.log('shop password ' + this.form.password);

          // Fetching the country code
          const country_user = this.countries.filter(
            (country) => country.id == this.form.country
          );
          console.log(country_user);
          let newPhone = `+${country_user[0].phone_code}${this.form.phone}`;
          console.log('Phone ' + newPhone);

          this.form.phone = newPhone;

          // Persisting to the API

          const options = {
            method: 'POST',
            url: 'https://afeshop.africa/app/api/route237/shop/register?step=1',
            data: {
              shop_name: this.form.shop_name,
              // password: this.form.password,
              email: this.form.email,
              phone: this.form.phone,
              country_id: this.form.country,
              category_id: this.form.shop_cath,
              first_name: this.form.firstName,
              last_name: this.form.lastName,
              type: this.form.shop_type,
              address: this.form.address,
              city_id: this.form.city,
              state_id: this.form.state,
            },
          };

          this.api_loading = true;
          let that = this;
          this.axios
            .request(options)
            .then(function(response) {
              that.setDone('first', 'second');
              that.api_loading = false;
              that.messageSucess = response.data.msg;
              // that.showDialog = true;
              console.log(that.messageSucess);
            })
            .catch(function(error) {
              // that.setDone('first', 'second');
              that.api_loading = false;
              let errorArray = error.response.data.msg;

              let errormessages = '';
              for (const property in errorArray) {
                errormessages += `${errorArray[property][0]} - `;
              }
              that.error_message = errormessages;
              that.showSnackbar = true;
            });
        }
      }
    },
    showVerifyEmailScreen() {
      this.verify_email_screen = true;
    },
    onFileUpload(evt) {
      this.form.id_card = evt[0];
      console.log('Id_card value');
      console.log(evt[0]);
      console.log(this.form.id_card);
    },
    onFileUpload2(evt) {
      this.form.docs = evt[0];
      console.log('Docs value');
      console.log(evt[0]);
      console.log(this.form.docs);
    },
    register() {
      this.api_loading = true;
      console.log(this.form.id_card);
      console.log(this.form.docs);
      console.log(this.form.logo);
      console.log(this.form.cover);
      let shopDoc = this.form.docs ?? null;
      let that = this;
      var formData = new FormData();
      formData.append('logo', this.form.logo);
      formData.append('cover', this.form.cover);
      formData.append('id_card', this.form.id_card);
      formData.append('documents', shopDoc);
      this.axios
        .post(
          'https://afeshop.africa/app/api/route237/shop/register?step=2',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then(function(response) {
          that.setDone('second', 'third');
          that.api_loading = false;
          that.messageSucess = response.data.msg;
          // that.showDialog = true;
          console.log(that.messageSucess);
        })
        .catch(function(error) {
          // that.setDone('first', 'second');
          that.api_loading = false;
          let errorArray = error.response.data.msg;

          console.log('Error message from server');
          console.log(error.response.data);

          let errormessages = '';
          for (const property in errorArray) {
            errormessages += `${errorArray[property][0]} - \n`;
          }
          that.error_message = errormessages;
          that.showSnackbar = true;
        });

      // Last step
      // Persisting to the API
    },
    finalRegister() {
      this.api_loading = true;
      console.log('You call this route');
      let data = {
        shop_name: this.form.shop_name,
        // password: this.form.password,
        email: this.form.email,
        phone: this.form.phone,
        country_id: this.form.country,
        category_id: this.form.shop_cath,
        first_name: this.form.firstName,
        last_name: this.form.lastName,
        type: this.form.shop_type,
        address: this.form.address,
        city_id: this.form.city,
        state_id: this.form.state,
        password: this.form.password,
        confirm_password: this.form.confirm_password,
      };

      var formData = new FormData();
      formData.append('logo', this.form.logo);
      formData.append('cover', this.form.cover);
      formData.append('id_card', this.form.id_card);
      formData.append('documents', this.form.docs);

      // appending the data object
      for (var key in data) {
        formData.append(key, data[key]);
      }

      // Making the final API call
      let that = this;
      this.axios
        .post(
          'https://afeshop.africa/app/api/route237/shop/register?step=3',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then(function() {
          // that.setDone('second', 'third');
          that.api_loading = false;
          that.messageSucess = 'Your account has been successfully created';
          that.showDialog = true;
          console.log(that.messageSucess);
        })
        .catch(function(error) {
          // that.setDone('first', 'second');
          that.api_loading = false;
          let errorArray = error.response.data.msg;

          console.log('Error message from server');
          console.log(error.response.data);

          let errormessages = '';
          for (const property in errorArray) {
            errormessages += `${errorArray[property][0]} - \n`;
          }
          that.error_message = errormessages;
          that.showSnackbar = true;
        });
    },
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },
      shop_name: {
        required,
      },
      lastName: {
        required,
      },
      firstName: {
        required,
      },
      shop_type: {
        required,
      },
      address: {
        required,
      },
      phone: {
        required,
        minLength: minLength(9),
      },
    },
  },
};
</script>
<style scoped>
.eui_style {
  margin: 10px 0px;
}
.logo_cover_block {
  width: 100%;
  position: relative;
  margin-bottom: 66px;
}
.logo_shop {
  width: 120px;
  height: 120px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  position: absolute;
  bottom: -59px;
  left: 45px;
  border: 4px solid #fff;
  background-image: url('./../assets/images/default_logo.jpeg');
  cursor: pointer;
  transition: 0.5s;
}
.cover_shop:hover,
.logo_shop:hover {
  transform: scale(0.95);
}
.cover_shop {
  width: 100%;
  transition: 0.5s;
  cursor: pointer;
  height: 132px;
  border-radius: 18px;
  background-image: url('./../assets/images/default_cover.jpeg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.header_regis {
  margin-right: 82px;
}
.formContainer {
  overflow: auto;
  overflow: scroll;
  height: calc(100vh - 251px);
  position: relative;
}
.stepper_register {
  /* margin: 41px 15px; */
}
.register {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
}

.loader_block {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
  background-color: #eeeeee6b;
  border-radius: 13px;
  padding: 45px;
}
</style>
