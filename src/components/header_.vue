<template>
  <div class="header">
    <div class="left_bloc">
      <img
        src="../assets/images/visualElement/left-arrow.png"
        alt=""
        class="back_arrow"
        v-on:click="widen()"
      />
      <b>{{ currentRoute }}</b>
    </div>
    <div class="right_bloc">
      <div class="name_user">Brunel</div>
      <div class="profileAdmin">
        <div class="dropDownProfile" id="dropDownProfile" v-if="seen">
          <img
            src="../assets/images/profileUser/Penguins.jpg"
            alt=""
            class="profile_image dropDown"
          />
          <p class="profile_name">Brunel tesse</p>
          <div class="options">
            <p>Gerer votre compte</p>
            <p>Deconnexion</p>
          </div>
        </div>
        <img
          src="../assets/images/profileUser/Penguins.jpg"
          alt=""
          class="profile_image"
        />
        <img
          src="../assets/images/visualElement/drop-down-arrow.png"
          alt=""
          class="dropDownArrow"
          id="dropDownArrow"
          v-on:click="showdropdown()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header_",
  props: {
    currentRoute: String,
  },
  data() {
    return {
      seen: false,
    };
  },
  methods: {
    showdropdown: function () {
      this.seen = !this.seen;
    },
    widen() {
      this.$emit("widen");
    },
  },
};
</script>

<style scoped>
.name_user {
  padding: 8px;
  background-color: #0085ff;
  color: #fff;
  border-radius: 47px;
}
.header {
  border-radius: 54px;
  background-color: #fff;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #aaaaaa47;
}

.header .left_bloc,
.header .right_bloc .profileAdmin {
  display: flex;
  align-items: center;
}

.right_bloc {
  display: flex;
  flex: 1;
  /* align-items: flex-end; */
  justify-content: flex-end;
  align-items: center;
}

.profileAdmin {
  position: relative;
}

.dropDownProfile {
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 0px 9px #77777733;
  border-radius: 13px;
  z-index: 1;
  top: 41px;
  left: -43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  overflow: hidden;
}

.dropDownProfile .options {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  width: 100%;
  background-color: #ffce08;
}

.dropDownProfile .options p {
  padding: 8px 12px;
  transition: 0.25s;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  text-align: center;
}

.dropDownProfile .options p:hover {
  background-color: #000;
  color: #fadb2c;
}
.dropDownProfile .profile_image.dropDown {
  margin-top: 12px;
}
.dropDownProfile .profile_name {
  margin-top: 8px;
}
.profileAdmin .profile_image {
  clip-path: circle();
  width: 50px;
}

.profileAdmin .dropDownArrow,
.header .back_arrow {
  width: 15px;
  cursor: pointer;
  transition: 0.5s;
}

.profileAdmin .dropDownArrow:hover,
.header .back_arrow:hover {
  opacity: 0.6;
  transform: scale(1.2);
}

.header .back_arrow {
  margin-right: 15px;
}

@media (max-width: 800px) {
  .back_arrow {
    transform: rotate(180deg);
  }
}
</style>