<template>
  <div class="inProgressCompo">
    <div class="comment_block" v-if="commentactive">
      <ul class="title" style="grid-column: 5/1">
        <div style="display: flex; align-items: center">
          <img
            src="./../../assets/images/visualElement/backicon.svg"
            alt=""
            class="close"
            style="margin-right: 10px; width: 25px"
            @click="closeComment"
          />
          <img
            src="./../../assets/images/visualElement/afeshopLogo.png"
            alt=""
            width="200px"
            class="logo_overlay"
          />
        </div>
        <div>
          Comments on the product
          <b>Tennis 24</b>
        </div>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
          doloribus! Impedit asperiores aut neque quas error laboriosam ullam
          consectetur voluptatem libero minus doloremque ab, sit dignissimos
          odit iusto voluptatibus harum minima. Asperiores, dicta. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nesciunt saepe vel natus
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
        </li>
      </ul>
      <ul class="comment_item">
        <li>
          <ul style="display: flex; align-items: center">
            <li>
              <img
                src="./../../assets/images/profileUser/Penguins.jpg"
                alt=""
                style="clip-path: circle(); width: 50px"
              />
            </li>
            <ul style="display: flex; flex-direction: column">
              <li style="font-weight: bold; font-size: 2em">Migus</li>
              <li style="color: #aaa; font-size: 1.35em">12/12/2020 a 8h00</li>
            </ul>
          </ul>
        </li>
        <li style="font-size: 1.5em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe vel natus cumque provident minima praesentium eligendi modi
          incidunt. Provident unde incidunt impedit modi quis suscipit
        </li>
      </ul>
    </div>
    <div class="left">
      <div class="image">
        <img src="./../../assets/images/shop/Productimages/shoe.png" alt="" />
      </div>
      <div class="name">Tennis 24</div>
    </div>
    <div class="right">
      <div>
        Note
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
      <div style="font-size: 1.2em; font-weight: bold">
        Ordered the 10 may 2020
      </div>
      <div style="color: #0085ff; font-size: 1.2em">
        Delivered the 20 may 2020
      </div>
      <button class="ripple" style="font-size: 0.9em" @click="showcomment()">
        See Comments (12)
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "deliveredCompo",
  props: {},
  data() {
    return {
      commentactive: false,
    };
  },
  methods: {
    showcomment: function () {
      this.commentactive = true;
      this.$emit("activeComments");
    },

    closeComment: function () {
      this.commentactive = false;
      this.$emit("activeComments");
    },
  },
};
</script>

<style scoped>
.comment_item {
  display: flex;
  flex-direction: column;
  height: 121px;
  overflow: auto;
  border: 1px solid #939393;
  border-radius: 13px;
  padding: 13px;
}

.comment_block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 13px;
  padding: 25px;
  overflow: auto;
  z-index: 200000;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}
.comment_block ul:first-childs {
  height: 200px;
  overflow: auto;
}
.inProgressCompo {
  height: 130px;
  border-radius: 13px;
  display: flex;
  align-items: center;
}

.left {
  width: 40%;
  height: 100%;
  overflow: hidden;
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #555;
  margin: 10px;
  border: 1px solid #47a7f5;
  border-radius: 13px;
}

.left img {
  width: 83%;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.right div {
  margin-bottom: 5px;
}
</style>