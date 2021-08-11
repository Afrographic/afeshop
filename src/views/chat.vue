<template>
  <div class="chat_block">
    <div class="messsage">
      <div class="messageItem admin_message">
        <div class="sms_bloc">
          <div class="profile">
            <img
              src="./../assets/images/chat/lefa.jpg"
              alt=""
              width="75px"
              style="clip-path: circle()"
            />
          </div>
          <div>
            <div class="actualMessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aliquam quasi omnis possimus dignissimos inventore.
            </div>
            <div class="time" style="">2 hours ago</div>
          </div>
        </div>
      </div>

      <div class="messageItem user_message">
        <div class="sms_bloc">
          <div class="profile">
            <img
              src="./../assets/images/chat/rihanna.png"
              alt=""
              width="75px"
              style="clip-path: circle()"
            />
          </div>
          <div>
            <div class="actualMessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aliquam quasi omnis possimus dignissimos inventore.
            </div>
            <div class="time">2 hours ago</div>
          </div>
        </div>
      </div>

      <div class="messageItem admin_message">
        <div class="sms_bloc">
          <div class="profile">
            <img
              src="./../assets/images/chat/lefa.jpg"
              alt=""
              width="75px"
              style="clip-path: circle()"
            />
          </div>
          <div>
            <div class="actualMessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aliquam quasi omnis possimus dignissimos inventore.
            </div>
            <div class="time" style="">2 hours ago</div>
          </div>
        </div>
      </div>

      <div class="messageItem user_message">
        <div class="sms_bloc">
          <div class="profile">
            <img
              src="./../assets/images/chat/rihanna.png"
              alt=""
              width="75px"
              style="clip-path: circle()"
            />.
          </div>
          <div>
            <div class="actualMessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              libero quas error quam adipisci ad fugiat facere molestias ducimus
              in rerum, quae recusandae accusamus! Soluta voluptas aliquam velit
              enim numquam? Sit similique dolor inventore at itaque laboriosam?
              Iste cupiditate delectus explicabo perferendis commodi vero
              maiores soluta, cumque odit eum neque quibusdam officiis quaerat
              dolores. Harum nam vel ipsum tenetur itaque, nemo minus
              voluptatibus consequuntur ratione suscipit soluta? At, dolores
              dolorum?
            </div>
            <div class="time">2 hours ago</div>
          </div>
        </div>
      </div>

      <div class="messageItem admin_message">
        <div class="sms_bloc">
          <div class="profile">
            <img
              src="./../assets/images/chat/lefa.jpg"
              alt=""
              width="75px"
              style="clip-path: circle()"
            />
          </div>
          <div>
            <div class="actualMessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aliquam quasi omnis possimus dignissimos inventore.
            </div>
            <div class="time" style="">2 hours ago</div>
          </div>
        </div>
      </div>

      <div class="messageItem admin_message">
        <div class="sms_bloc">
          <div class="profile">
            <img
              src="./../assets/images/chat/lefa.jpg"
              alt=""
              width="75px"
              style="clip-path: circle()"
            />
          </div>
          <div>
            <div class="actualMessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              aliquam quasi omnis possimus dignissimos inventore.
            </div>
            <div class="time" style="">2 hours ago</div>
          </div>
        </div>
      </div>

      <div class="messageItem user_message">
        <div class="sms_bloc">
          <div class="profile">
            <img
              src="./../assets/images/chat/rihanna.png"
              alt=""
              width="75px"
              style="clip-path: circle()"
            />.
          </div>
          <div>
            <div class="actualMessage">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              libero quas error quam adipisci ad fugiat facere molestias ducimus
              in rerum, quae recusandae accusamus! Soluta voluptas aliquam velit
              enim numquam? Sit similique dolor inventore at itaque laboriosam?
              Iste cupiditate delectus explicabo perferendis commodi vero
              maiores soluta, cumque odit eum neque quibusdam officiis quaerat
              dolores. Harum nam vel ipsum tenetur itaque, nemo minus
              voluptatibus consequuntur ratione suscipit soluta? At, dolores
              dolorum?
            </div>
            <div class="time">2 hours ago</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <input
        type="text"
        v-model="user_message"
        placeholder="Type a message"
        class="message"
      />
      <button
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px;
        "
        class="ripple"
      >
        <img
          src="./../assets/images/visualElement/send.svg"
          alt=""
          width="30px"
          style="margin-right: 0px"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat",
  data() {
    return {
      user_message: null,
    };
  },
};
</script>

<style scoped>
.user_message {
  display: flex;
  justify-content: flex-end;
}
.user_message .actualMessage {
  background-color: #df9a00;
  color: #fff;
}
.user_message .profile {
  order: 2;
}

.profile {
  width: 75px;
}
.user_message .time {
  text-align: left !important;
}
.messageItem {
  margin-bottom: 5px;
}
.time {
  text-align: right;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.24);
}
.actualMessage {
  padding: 10px;
  background-color: rgba(170, 170, 170, 0.541);
  border-radius: 13px;
}
.sms_bloc {
  display: flex;
  width: 80%;
}

.sms_bloc > div:last-child {
  flex: 1;
}
.footer {
  display: flex;
}
.footer input {
  flex: 1;
  margin-right: 10px;
}
.messsage {
  flex: 1;
  margin-bottom: 15px;
  overflow: auto;
}
.message {
  padding: 12px;
  border: 1px solid #aaa;
  border-radius: 64px;
}
.chat_block {
  box-sizing: border-box;
  line-height: 0.875em;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 20px;
  bottom: 10px;
  height: 95vh;
  width: 400px;
  background-color: white;
  box-shadow: -8px 7px 20px 6px #00000026;
  border-radius: 13px;
  z-index: 40;
}
</style>