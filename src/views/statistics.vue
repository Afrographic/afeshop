
<template>
  <div>
    <div style="width: 600px">
      <stat_graph v-if="graph_active" />
    </div>

    <div class="content_stat">
      <h2>Best seller</h2>
      <div class="contentswip">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="swiper-slide">
              <ul
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  width: 100%;
                  height: 100%;
                "
              >
                <li
                  style="
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    background-color: white;
                    border-radius: 16px;
                  "
                >
                  <img
                    src="../assets/images/shop/Productimages/shoe.png"
                    alt=""
                    width="130px"
                  />
                </li>
                <li>
                  <ul
                    style="
                      font-size: 24px;
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 25px;
                    "
                  >
                    <li>
                      <ul>
                        <li style="font-weight: bold; font-size: 18px">
                          Headphone
                        </li>
                        <li style="margin-top: 5px">
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                          <img
                            src="./../assets/images/visualElement/star_active.svg"
                            alt=""
                            width="15px"
                          />
                        </li>
                      </ul>
                    </li>
                    <li
                      style="
                        text-align: right;
                        color: #0085ff;
                        font-size: 27px;
                        font-weight: bold;
                      "
                    >
                      $200
                    </li>
                  </ul>
                </li>
                <li>
                  <ul
                    class="details_bigsales"
                    style="
                      display: flex;
                      align-items: center;
                      text-align: center;

                      margin-top: 15px;
                    "
                  >
                    <li>
                      <span> 9,200 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/cart.svg"
                          alt=""
                          width="15px"
                        />
                        Sales
                      </p>
                    </li>
                    <li>
                      <span> 4.5 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/star.svg"
                          alt=""
                          width="15px"
                        />
                        Ratings
                      </p>
                    </li>
                    <li>
                      <span> 10 </span>
                      <p>
                        <img
                          src="./../assets/images/visualElement/comment.svg"
                          alt=""
                          width="15px"
                        />Comments
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="chart_stat__">
        <div>
          <h2 style="margin-bottom: 15px">Revenue evolution</h2>
          <revenue_chart v-bind:data_revenue_chart="data_revenue_chart" />
        </div>
        <div>
          <h2 style="margin-bottom: 15px">Orders evolution</h2>
          <stat_graph
            v-bind:data_order_chart="data_order_chart"
            v-bind:data_sales_chart="data_sales_chart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import stat_graph from "./../components/statistics/stat_graph";
import revenue_chart from "./../components/statistics/revenue_chart";

export default {
  name: "statistics",
  components: {
    stat_graph,
    revenue_chart,
  },
  data() {
    return {
      graph_active: false,
      data_revenue_chart: [9, 11, 25, 18, 20, 11, 40],
      data_order_chart: [9, 11, 25, 18, 20, 11, 40],
      data_sales_chart: [10, 20, 30, 40, 15, 20, 36],
    };
  },
  methods: {},
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // console.log(swiper);
  },
};
</script>

<style scoped>
h2 {
  color: #df9b02;
  text-align: center;
  border: 1px solid #df9b02;
  padding: 10px;
}
.chart_stat__ {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 45px;
}
.details_bigsales span {
  font-size: 18px;
  font-weight: bold;
  color: #df9a00;
}
.details_bigsales p {
  font-size: 12px;
  color: #aaa;
}
.details_bigsales p img {
  margin-right: 5px;
}
ul > li {
  width: 100%;
}
.contentswip {
  width: 77vw;
  margin: auto;
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  overflow: auto;
  padding: 15px 15px;
  border-radius: 13px;
  background-color: #f9f9f9;
}
.content_stat {
  padding: 25px;
}
</style>