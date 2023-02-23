<template>
  <div class="container">
    <div class="content">
      <h3 class="title">Доставка по адресу Коктем 2 микрорайон</h3>
      <nav class="nav">
        <div class="nav__item" v-for="item in navList" :key="item.id">
          <div class="nav__item-image-container">
            <img
              class="nav__item-image"
              :src="getImageByUrl(item.image)"
              alt="service icon"
            />
          </div>

          <h4 class="nav__item-title">{{ item.title }}</h4>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { navList } from "../vite-env.d";
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";
import { useUtils } from "../composables/utils";

const { getImageByUrl } = useUtils();

const navList: navList = reactive([
  {
    title: "Еда",
    image: "../assets/nav/food.png",
    route: "",
    id: uuidv4(),
  },
  {
    title: "Супермаркеты",
    image: "../assets/nav/market.avif",
    route: "",
    id: uuidv4(),
  },
  {
    title: "Что угодно",
    image: "../assets/nav/ssickstar.avif",
    route: "",
    id: uuidv4(),
  },
  {
    title: "Магазины и подарки",
    image: "../assets/nav/presents.avif",
    route: "",
    id: uuidv4(),
  },
  {
    title: "Напитки и снэки",
    image: "../assets/nav/snacks.png",
    route: "",
    id: uuidv4(),
  },
  {
    title: "Аптеки",
    image: "../assets/nav/medicine.png",
    route: "",
    id: uuidv4(),
  },
  {
    title: "Glovo Express",
    image: "../assets/nav/expres.avif",
    route: "",
    id: uuidv4(),
  },
]);
</script>

<style scoped lang="scss">
$primary: #00a082;
$secondary: #ffc244;

.container {
  background-color: $secondary;
  padding: 35px 0px 100px 0px;

  .content {
    .title {
      margin: 48px 0 50px;
      text-align: center;
      font-size: 30px;
    }
    .nav {
      display: flex;
      justify-content: center;
      column-gap: 30px;
      flex-wrap: wrap;
      padding: 8px 0;

      .nav__item {
        display: flex;
        cursor: pointer;
        flex-direction: column;
        row-gap: 30px;
        align-items: center;
        padding-bottom: 20px;
        transition: transform 0.1s ease-in-out;
      }

      .nav__item:hover {
        transform: scale(1.05);
        border-bottom: 3px solid #000;
      }

      .nav__item-title {
        font-size: 20px;
        font-weight: medium;
        text-align: center;
        line-height: 1.4;
        font-weight: 400;
      }

      .nav__item-image-container {
        width: 130px;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/nav/new-bubbles-design.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        .nav__item-image {
          width: 65px;
          height: 65px;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
